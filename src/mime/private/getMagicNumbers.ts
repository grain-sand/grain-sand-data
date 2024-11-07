import {MimeTypes} from "../MimeTypes";

let magicNumbers: any;

export const getMagicNumbers = (): Map<string, MimeTypes> => {
	return magicNumbers || (magicNumbers = new Map([
		// 文本类型
		["EFBBBF", MimeTypes.TextUTF8],
		["FEFF", MimeTypes.TextUTF16BE],
		["FFFE", MimeTypes.TextUTF16LE],

		// 图片类型
		["FFD8FF", MimeTypes.JPEG],
		["89504E47", MimeTypes.PNG],
		["47494638", MimeTypes.GIF],
		["49492A00", MimeTypes.TIFF],
		["4D4D002A", MimeTypes.TIFF],
		["424D", MimeTypes.BMP],
		["00000100", MimeTypes.ICO],
		["38425053", MimeTypes.PSD],

		// 音频文件类型
		["494433", MimeTypes.MP3],
		["4F676753", MimeTypes.OGG],
		["57415645", MimeTypes.WAV],
		["664C6143", MimeTypes.FLAC],
		["000001BA", MimeTypes.MPEGPS],

		// 视频文件类型
		["000001BA", MimeTypes.MPEG],
		["000001B3", MimeTypes.MPEG],
		["1A45DFA3", MimeTypes.MKV],
		["6674797069736F6D", MimeTypes.MP4],
		["0000001866747970", MimeTypes.MP4],
		["667479706d703432", MimeTypes.MP4],
		["47", MimeTypes.MP2T],

		// 压缩文件类型
		["504B0304", MimeTypes.ZIP],
		["52617221", MimeTypes.RAR],
		["1F8B08", MimeTypes.GZIP],
		["75737461", MimeTypes.TAR],
		["425A68", MimeTypes.BZIP2],
		["377ABCAF271C", MimeTypes.SEVEN_ZIP],

		// 应用程序和文档类型
		["25504446", MimeTypes.PDF],
		["D0CF11E0A1B11AE1", MimeTypes.DOC],
		["7B5C727466", MimeTypes.RTF],
		["4D5A", MimeTypes.EXE],
		["FFD8FFE0", MimeTypes.JPEG],

		//可执行文件
		["MZ", MimeTypes.OctetStream],

	]));
};