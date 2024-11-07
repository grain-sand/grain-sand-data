export const enum NetMimeTypes {
	// 邮件类型
	MIME = "message/rfc822",
	SMTP = "application/smtp",

	// 网络协议类型
	HTTP = "application/http",
	HTTPS = "application/https",
	FTP = "application/ftp",
	TCP = "application/tcp",
	UDP = "application/udp",

	// Web相关
	JSONLD = "application/ld+json",
	WebAssembly = "application/wasm",

	// Web相关
	SVGZ = "image/svg+xml+gzip",
	MHTML = "multipart/related",
	OGG = "application/ogg",
	XAP = "application/x-silverlight-app",
	WOFF = "font/woff",
	WASM = "application/wasm",
	WGT = "application/widget",

	// 二进制数据
	OctetStream = "application/octet-stream",
	UnknownBinary = "application/x-unknown",
}