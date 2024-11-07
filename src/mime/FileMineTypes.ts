export const enum FileMimeTypes {
	// 文本类型
	TextPlain = "text/plain",
	TextUTF8 = "text/plain;charset=UTF-8",
	TextUTF16BE = "text/plain;charset=UTF-16BE",
	TextUTF16LE = "text/plain;charset=UTF-16LE",
	HTML = "text/html",
	CSS = "text/css",
	JavaScript = "text/javascript",
	XML = "text/xml",
	JSON = "application/json",
	CSV = "text/csv",
	Markdown = "text/markdown",
	LaTeX = "application/x-latex",
	TSV = "text/tab-separated-values",
	Bat = "text/x-sh",
	SimpleData = "text/x-simpledata",

	// 图片类型
	JPEG = "image/jpeg",
	PNG = "image/png",
	GIF = "image/gif",
	SVG = "image/svg+xml",
	WebP = "image/webp",
	BMP = "image/bmp",
	TIFF = "image/tiff",
	HEIF = "image/heif",
	HEIC = "image/heic",
	ICO = "image/x-icon",
	JPEG2000 = "image/jp2",
	AdobeXD = "application/vnd.adobe.xd",
	PSD = "image/vnd.adobe.photoshop",

	// 音频类型
	MP3 = "audio/mpeg",
	OGG = "audio/ogg",
	WAV = "audio/wav",
	AAC = "audio/aac",
	FLAC = "audio/flac",
	M4A = "audio/x-m4a",
	AMR = "audio/amr",
	WMA = "audio/x-ms-wma",

	// 视频类型
	MP4 = "video/mp4",
	MPEG = "video/mpeg",
	MP2T = "video/MP2T",
	MPEGPS = "video/MP1S",
	WebM = "video/webm",
	OggVideo = "video/ogg",
	QuickTime = "video/quicktime",
	AVI = "video/x-msvideo",
	MKV = "video/x-matroska",
	MOV = "video/quicktime",
	FLV = "video/x-flv",
	WMV = "video/x-ms-wmv",

	// 应用程序类型
	PDF = "application/pdf",
	EXE = "application/vnd.microsoft.portable-executable",
	MSI = "application/x-msdownload",
	APK = "application/vnd.android.package-archive",
	JAR = "application/java-archive",
	DMG = "application/x-apple-diskimage",
	ISO = "application/x-iso9660-image",

	// 字体类型
	TTF = "font/ttf",
	WOFF = "font/woff",
	WOFF2 = "font/woff2",
	OTF = "font/otf",
	EOT = "application/vnd.ms-fontobject",
	SVGFont = "font/svg+xml",

	// 文档类型
	DOC = "application/msword",
	DOCX = "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
	XLS = "application/vnd.ms-excel",
	XLSX = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
	PPT = "application/vnd.ms-powerpoint",
	PPTX = "application/vnd.openxmlformats-officedocument.presentationml.presentation",
	ODT = "application/vnd.oasis.opendocument.text",
	ODS = "application/vnd.oasis.opendocument.spreadsheet",
	ODP = "application/vnd.oasis.opendocument.presentation",
	RTF = "application/rtf",

	// 数据格式
	Base64 = "application/base64",
	P7M = "application/pkcs7-mime",
	P12 = "application/x-pkcs12",

	// 系统和设备类型
	COM = "application/x-msdos-program",
	DLL = "application/x-msdownload",
	SYS = "application/x-mswinexe",
	OLE = "application/x-oleobject",

	// 二进制数据
	OctetStream = "application/octet-stream",
	UnknownBinary = "application/x-unknown",
	Binary = "application/x-binary",

	// 压缩和二进制文件
	ZIP = "application/zip",
	RAR = "application/vnd.rar",
	GZIP = "application/gzip",
	TAR = "application/x-tar",
	BZIP2 = "application/x-bzip2",
	SEVEN_ZIP = "application/x-7z-compressed",
	XZ = "application/x-xz",
	GZ = "application/x-gzip",
	TAR_GZ = "application/gzip",
	LZ = "application/x-lzip",
	LZH = "application/x-lzh",

	//二次扩展的压缩文件
	Fbr = "application/zip+fbr",

	//播放列表
	M3U = "audio/x-mpegurl",
	M3U8 = "application/x-mpegurl",
	PLS = "audio/x-scpls",
	XSPF = "application/xspf+xml",
	DPL = "application/x-daumplaylist",
}