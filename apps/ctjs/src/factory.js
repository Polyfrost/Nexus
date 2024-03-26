/// <reference types="../types" />
/// <reference lib="es2015" />

import {
	JByteArrayInputStream,
	JCertificateFactory,
	JFiles,
	JKeyStore,
	JPaths,
	JSSLContext,
	JString,
	JSystem,
	JTrustManagerFactory,
} from './classes';

const certificates = [];
const keyStore = JKeyStore.getInstance(JKeyStore.getDefaultType());
const keyStorePath = JPaths.get(JSystem.getProperty('java.home'), 'lib', 'security', 'cacerts');
keyStore.load(JFiles.newInputStream(keyStorePath), new JString('keyStoreOneConfig').toCharArray());
const certificateFactory = JCertificateFactory.getInstance('X.509');

for (const cert of certificates) {
	const pathString = `${ChatTriggers.MODULES_FOLDER}/OneConfig/certs/${cert}`;
	const path = JPaths.get(pathString);
	const data = JFiles.readAllBytes(path);
	const certificate = certificateFactory.generateCertificate(new JByteArrayInputStream(data));
	keyStore.setCertificateEntry(`org.polyfrost.oneconfig.tweaker.ssl:${certificate}`, certificate);
}

const trustManagerFactory = JTrustManagerFactory.getInstance(JTrustManagerFactory.getDefaultAlgorithm());
trustManagerFactory.init(keyStore);
const sslContext = JSSLContext.getInstance('TLS');
sslContext.init(null, tmf.getTrustManagers(), null);
JSSLContext.setDefault(sslContext);
const socketFactory = sslContext.getSocketFactory();

export default socketFactory;
