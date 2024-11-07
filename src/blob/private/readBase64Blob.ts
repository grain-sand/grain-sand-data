import {BlobTypes} from "../BlobTypes";
import {readBlobData} from "../readBlobData";
import {Base64DataURL} from "../../general";

export const base64BlobTypes = [
	BlobTypes.Base64,
	BlobTypes.Image,
] as const;

export type Base64BlobType = typeof base64BlobTypes[number];

export function readBase64Blob(blob: Blob, type: BlobTypes.Base64): Promise<Base64DataURL>;

export function readBase64Blob(blob: Blob, type: BlobTypes.Image): Promise<HTMLImageElement>;

export function readBase64Blob(blob: Blob, type: Base64BlobType): Promise<any> {
	return new Promise(async (resolve, reject) => {
		const text = await readBlobData(blob, "readAsDataURL");
		switch (type) {
			case BlobTypes.Image:
				const image = new globalThis.Image();
				image.onload = () => resolve(image);
				image.onerror = reject;
				image.src = text;
				break;
			default:
				resolve(text)
		}
	})
}