import {BlobTypes} from "./BlobTypes";
import {EncodingType, isNumber, isString} from "grain-sand-base";
import {Base64DataURL} from "../general";
import {SimpleDataReader} from "../simple";
import {getExtensionMime, parseMime} from "../mime";
import {miniToBlobType} from "./private/miniToBlobType";
import {IBlobPackage} from "./IBlobPackage";
import {readTextBlob, textBlobTypes} from "./private/readTextBlob";
import {base64BlobTypes, readBase64Blob} from "./private/readBase64Blob";

export function readBlob(blob: Blob, encoding?: EncodingType): Promise<IBlobPackage>;

export function readBlob(blob: Blob, type: BlobTypes.Base64): Promise<Base64DataURL>;

export function readBlob(blob: Blob, type: BlobTypes.Image): Promise<HTMLImageElement>;

export function readBlob(blob: Blob, type: BlobTypes.Bitmap): Promise<ImageBitmap>;

export function readBlob(blob: Blob, type: BlobTypes.Svg): Promise<HTMLUnknownElement>;

export function readBlob(blob: Blob, type: BlobTypes.Text, encoding?: EncodingType): Promise<string>;

export function readBlob(blob: Blob, type: BlobTypes.Html, encoding?: EncodingType): Promise<Document>;

export function readBlob(blob: Blob, type: BlobTypes.Xml, encoding?: EncodingType): Promise<XMLDocument>;

export function readBlob(blob: Blob, type: BlobTypes.Json, encoding?: EncodingType): Promise<any>;

export function readBlob(blob: Blob, type: BlobTypes.SimpleData, encoding?: EncodingType): Promise<SimpleDataReader>;

export function readBlob(blob: Blob, type: BlobTypes, encoding: EncodingType): Promise<any> ;

export async function readBlob(blob: Blob, ...args: any[]): Promise<any> {
	let i = 0;
	const argType = isNumber(args[i]) ? args[i++] as BlobTypes : undefined;
	const encoding = isString(args[i]) ? args[i++] : undefined;

	const mimeType = !argType && await parseMime(blob);

	const type = argType || miniToBlobType(mimeType as any);

	let result;
	if (type === BlobTypes.Bitmap) {
		result = await globalThis.createImageBitmap(blob as Blob);
	} else if (textBlobTypes.includes(type as any)) {
		result = await readTextBlob(blob, type as any, encoding);
	} else if (base64BlobTypes.includes(type as any)) {
		result = await readBase64Blob(blob, type as any);
	}

	if (argType && type !== BlobTypes.NotSupped) {
		return result
	}

	return {
		...getExtensionMime(mimeType as any),
		blob,
		type,
		result
	}
}