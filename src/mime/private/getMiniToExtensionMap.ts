import {MimeTypes} from "../MimeTypes";

let mimeToExtensionMap: any;

export const getMiniToExtensionMap = (): Record<MimeTypes, string> => {
	return mimeToExtensionMap || (mimeToExtensionMap = {
		// 文本类型
		[MimeTypes.SimpleData]: "txt",
		[MimeTypes.TextPlain]: "txt",
		[MimeTypes.HTML]: "html",
		[MimeTypes.CSS]: "css",
		[MimeTypes.JavaScript]: "js",
		[MimeTypes.XML]: "xml",
		[MimeTypes.JSON]: "json",
		[MimeTypes.CSV]: "csv",
		[MimeTypes.Markdown]: "md",
		[MimeTypes.LaTeX]: "tex",
		[MimeTypes.TSV]: "tsv",
		[MimeTypes.Bat]: "bat",

		// 图片类型
		[MimeTypes.JPEG]: "jpeg",
		[MimeTypes.PNG]: "png",
		[MimeTypes.GIF]: "gif",
		[MimeTypes.SVG]: "svg",
		[MimeTypes.WebP]: "webp",
		[MimeTypes.BMP]: "bmp",
		[MimeTypes.TIFF]: "tiff",
		[MimeTypes.HEIF]: "heif",
		[MimeTypes.HEIC]: "heic",
		[MimeTypes.ICO]: "ico",
		[MimeTypes.JPEG2000]: "jp2",

		// 音频类型
		[MimeTypes.MP3]: "mp3",
		[MimeTypes.OGG]: "ogg",
		[MimeTypes.WAV]: "wav",
		[MimeTypes.AAC]: "aac",
		[MimeTypes.FLAC]: "flac",
		[MimeTypes.M4A]: "m4a",
		[MimeTypes.AMR]: "amr",
		[MimeTypes.WMA]: "wma",

		// 视频类型
		[MimeTypes.MP4]: "mp4",
		[MimeTypes.WebM]: "webm",
		[MimeTypes.OggVideo]: "ogg",
		[MimeTypes.QuickTime]: "mov",
		[MimeTypes.AVI]: "avi",
		[MimeTypes.MKV]: "mkv",
		[MimeTypes.FLV]: "flv",
		[MimeTypes.WMV]: "wmv",

		// 应用程序类型
		[MimeTypes.PDF]: "pdf",
		[MimeTypes.ZIP]: "zip",
		[MimeTypes.RAR]: "rar",
		[MimeTypes.GZIP]: "gzip",
		[MimeTypes.TAR]: "tar",
		[MimeTypes.EXE]: "exe",
		[MimeTypes.MSI]: "msi",
		[MimeTypes.APK]: "apk",
		[MimeTypes.JAR]: "jar",
		[MimeTypes.DMG]: "dmg",
		[MimeTypes.ISO]: "iso",
		[MimeTypes.Fbr]: "fbr",

		// 字体类型
		[MimeTypes.TTF]: "ttf",
		[MimeTypes.WOFF]: "woff",
		[MimeTypes.WOFF2]: "woff2",
		[MimeTypes.OTF]: "otf",
		[MimeTypes.EOT]: "eot",
		[MimeTypes.SVGFont]: "svgfont",

		// 文档类型
		[MimeTypes.DOC]: "doc",
		[MimeTypes.DOCX]: "docx",
		[MimeTypes.XLS]: "xls",
		[MimeTypes.XLSX]: "xlsx",
		[MimeTypes.PPT]: "ppt",
		[MimeTypes.PPTX]: "pptx",
		[MimeTypes.ODT]: "odt",
		[MimeTypes.ODS]: "ods",
		[MimeTypes.ODP]: "odp",

		// 二进制数据
		[MimeTypes.OctetStream]: "exe",
		[MimeTypes.UnknownBinary]: "unknown",

		[MimeTypes.M3U]: 'm3u',
		[MimeTypes.M3U8]: 'm3u8',
		[MimeTypes.PLS]: 'pls',
		[MimeTypes.XSPF]: 'xspf',
		[MimeTypes.DPL]: 'dpl',
	});
};