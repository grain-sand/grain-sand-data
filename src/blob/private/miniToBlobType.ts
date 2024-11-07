import {MimeTypes} from "../../mime";
import {BlobTypes} from "../BlobTypes";

export function miniToBlobType(miniType: MimeTypes): BlobTypes {
	switch(miniType) {
		case MimeTypes.TextPlain:
			return BlobTypes.Text;
		case MimeTypes.Base64:
			return BlobTypes.Base64;
		case MimeTypes.JPEG:
		case MimeTypes.PNG:
		case MimeTypes.GIF:
		case MimeTypes.WebP:
		case MimeTypes.BMP:
		case MimeTypes.ICO:
			return BlobTypes.Image;
		case MimeTypes.SVG:
			return BlobTypes.Svg;
		case MimeTypes.HTML:
			return BlobTypes.Html;
		case MimeTypes.XML:
			return BlobTypes.Xml;
		case MimeTypes.JSON:
			return BlobTypes.Json;
		case MimeTypes.SimpleData:
			return BlobTypes.SimpleData;
		default:
			return BlobTypes.NotSupped;
	}
}