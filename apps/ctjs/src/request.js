/// <reference types="../types" />
/// <reference lib="es2015" />

// copied from https://www.chattriggers.com/modules/v/requestV2
// so we dont have to depend on anything :3

import {
	JBufferedReader,
	JDataOutputStream,
	JGZIPInputStream,
	JHttpsUrlConnection,
	JInputStreamReader,
	JOutputStreamWriter,
	JString,
	JURL,
	JURLEncoder,
} from './classes.js';

import socketFactory from './factory.js';

/**
 * @typedef {object} Options
 * @property {string} url
 * @property {string=} method defaults to 'GET'
 * @property {number=} timeout in ms, defaults to infinity
 * @property {number=} connectTimeout in ms, defaults to infinity
 * @property {number=} readTimeout in ms, defaults to infinity
 * @property {Record<string, string>=} headers
 * @property {Record<string, string>=} qs escaped and appended to url
 * @property {any=} body Represents JSON POST data. Automatically sets 'Content-Type' header to 'application/json; charset=UTF-8' Body takes presedence over 'form'
 * @property {Record<string, string>=} form Represents form data. Automatically sets 'Content-Type' header to 'x-www-form-urlencoded'
 * @property {boolean=} followRedirect default to true
 * @property {boolean=} json automatically parse the output
 */

/**
 * @param {Options | string} o
 * @returns {Promise<any>}
 */
export default function request(o) {
	let options = {};

	if (typeof o === 'string')
		options.url = o;
	else
		options = o;

	options.method = options.method?.toUpperCase()?.trim() ?? 'GET';
	options.timeout = options.timeout ?? 0;
	options.connectTimeout = options.connectTimeout ?? options.timeout;
	options.readTimeout = options.readTimeout ?? options.timeout;
	options.headers = options.headers ?? {};
	options.qs = options.qs ?? {};
	options.followRedirect = options.followRedirect ?? true;
	options.json = options.json ?? false;

	return new Promise((resolve, reject) => RequestObject(options, resolve, reject));
}

function RequestObject(options, resolve, reject) {
	const getQueryString = (obj) => {
		let queryString = '';

		Object.keys(obj).forEach((qs) => {
			queryString += `${JURLEncoder.encode(qs, 'UTF-8')}=${JURLEncoder.encode(obj[qs], 'UTF-8')}&`;
		});

		return queryString.length > 0 ? queryString.substr(0, queryString.length - 1) : queryString;
	};

	new Thread(() => {
		try {
			const queryString = `?${getQueryString(options.qs)}`;
			if (queryString.length > 1)
				options.url += queryString;

			const url = new JURL(options.url);
			const conn = url.openConnection();

			if (conn instanceof JHttpsUrlConnection)
				conn.setSSLSocketFactory(socketFactory);

			conn.setRequestMethod(options.method);
			conn.setDoOutput(true);
			conn.setConnectTimeout(options.connectTimeout);
			conn.setReadTimeout(options.readTimeout);
			conn.setInstanceFollowRedirects(options.followRedirect);
			conn.setRequestProperty('Accept-Encoding', 'gzip');

			Object.keys(options.headers).forEach(h => conn.setRequestProperty(h, options.headers[h]));

			if (options.method === 'POST') {
				if (typeof options.body === 'object') {
					conn.setRequestProperty('Content-Type', 'application/json; charset=UTF-8');

					let streamWriter;

					try {
						streamWriter = new JOutputStreamWriter(conn.getOutputStream());
						streamWriter.write(JSON.stringify(options.body));
						streamWriter.close();
					}
					catch (err) {
						print(err);
					}
					finally {
						streamWriter.close();
					}
				}
				else if (typeof options.form === 'object') {
					const params = getQueryString(options.form);
					const bytes = new JString(params).getBytes('UTF-8');
					conn.setRequestProperty('Content-Type', 'application/x-www-form-urlencoded');
					conn.setRequestProperty('Content-Length', bytes.length.toString());
					let streamWriter;

					try {
						streamWriter = new JDataOutputStream(conn.getOutputStream());
						streamWriter.write(bytes);
					}
					catch (err) {
						print(err);
					}
					finally {
						streamWriter.close();
					}
				}
			}

			const status = conn.getResponseCode();
			let content = '';
			let stream = conn[status > 299 ? 'getErrorStream' : 'getInputStream']();
			stream = conn.getContentEncoding() === 'gzip' ? new JGZIPInputStream(stream) : stream;
			const reader = new JBufferedReader(new JInputStreamReader(stream));

			while (true) {
				const inputLine = reader.readLine();
				if (!inputLine)
					break;
				content += inputLine;
			}

			reader.close();
			conn.disconnect();

			if (options.json)
				content = JSON.parse(content);

			if (status > 299) {
				reject(content);
			}
			else if (options.resolveWithFullResponse) {
				const headers = {};
				const headerFields = conn.getHeaderFields();
				headerFields.keySet().forEach((key) => {
					headers[key] = headerFields.get(key)[0];
				});

				resolve({
					statusCode: status,
					statusMessage: conn.getResponseMessage(),
					headers,
					body: content,
				});
			}
			else {
				resolve(content);
			}
		}
		catch (err) {
			reject(err);
		}
	}).start();
}
