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

export interface Options<B = any> {
	/** The url to fetch */
	url: string;
	/**
	 * The HTTP request method.
	 * @default "GET"
	 */
	method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | string;
	/**
	 * The default timeout
	 * @default Infinity
	 */
	timeout?: number;
	/**
	 * The connection timeout
	 * @default Infinity
	 */
	connectTimeout?: number;
	/**
	 * The read timeout
	 * @default Infinity
	 */
	readTimeout?: number;
	/**
	 * List of headers to be used while fetching
	 */
	headers?: Record<string, string>;
	/**
	 * QueryString Escaped and appended to URL
	 */
	qs?: Record<string, string>;
	/**
	 * Represents JSON POST data. Automatically sets `Content-Type` header to `application/json; charset=UTF-8` Body takes presedence over `Options#form`
	 */
	body?: B;
	/**
	 * Represents form data. Automatically sets `Content-Type` header to `x-www-form-urlencoded`
	 */
	form?: Record<string, string>;
	/**
	 * Follow any redirects
	 * @default true
	 */
	followRedirect?: boolean;
	/**
	 * Automatically parse the output as JSON
	 * @default true
	 */
	json?: boolean;
	resolveWithFullResponse?: boolean;
};

export default function request<B = any, T = any>(o: Options<B> | string): Promise<T> {
	const options: Options<B> = typeof o === 'string' ? { url: o } : o;

	options.method = options.method?.toUpperCase()?.trim() ?? 'GET';
	options.timeout = options.timeout ?? 0;
	options.connectTimeout = options.connectTimeout ?? options.timeout;
	options.readTimeout = options.readTimeout ?? options.timeout;
	options.headers = options.headers ?? {};
	options.qs = options.qs ?? {};
	options.followRedirect = options.followRedirect ?? true;
	options.json = options.json ?? false;

	return new Promise<T>((resolve, reject) => RequestObject<T>(options, resolve, reject));
}

function getQueryString(obj: Record<string, string>) {
	let queryString = '';

	Object.keys(obj).forEach((qs) => {
		queryString += `${JURLEncoder.encode(qs, 'UTF-8')}=${JURLEncoder.encode(obj[qs], 'UTF-8')}&`;
	});

	return queryString.length > 0 ? queryString.substr(0, queryString.length - 1) : queryString;
}

function RequestObject<T extends string | any>(options: Options, resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void) {
	new Thread(() => {
		try {
			if (options.qs) {
				const queryString = `?${getQueryString(options.qs)}`;
				if (queryString.length > 1)
					options.url += queryString;
			}

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

			if (options.headers)
				Object.keys(options.headers).forEach(h => conn.setRequestProperty(h, options.headers![h]));

			if (options.method === 'POST')
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
					const params: string = getQueryString(options.form);
					const bytes: Uint8Array = new JString(params).getBytes('UTF-8');
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

			const status: number = conn.getResponseCode();
			let content: string = '';
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

			const filteredContent = options.json ? (JSON.parse(content) as T) : content as T;

			if (status > 299)
				reject(filteredContent);
			else
				resolve(filteredContent);
		}
		catch (err) {
			reject(err);
		}
	}).start();
}
