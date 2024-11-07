import {BlobTypes} from "../BlobTypes";
import {EncodingType} from "grain-sand-base";
import {readBlobData} from "../readBlobData";
import {MimeTypes} from "../../mime";
import {SimpleDataReader} from "../../simple";

export const textBlobTypes = [
	BlobTypes.Text,
	BlobTypes.Html,
	BlobTypes.Svg,
	BlobTypes.Xml,
	BlobTypes.Json,
	BlobTypes.SimpleData,
] as const;

export type TextBlobType = typeof textBlobTypes[number];

export async function readTextBlob(blob: Blob, type: TextBlobType, encoding?: EncodingType): Promise<any> {
	const text = await readBlobData(blob, "readAsText", encoding);
	switch (type) {
		case BlobTypes.Svg:
			return parseText(text, MimeTypes.SVG).querySelector('svg');
		case BlobTypes.Xml:
			return parseText(text, MimeTypes.XML);
		case BlobTypes.Html:
			return parseText(text, MimeTypes.HTML);
		case BlobTypes.SimpleData:
			return new SimpleDataReader(text);
		case BlobTypes.Json:
			return JSON.parse(text);
		default:
			return text;
	}
}

function parseText(text: string, type: MimeTypes) {
	return new (globalThis as any).DOMParser().parseFromString(text,type);
}