import {MimeTypes} from "../MimeTypes";
import {getMagicNumbers} from "./getMagicNumbers";
import {sliceHexString} from "./sliceHeader";

export async function parseHexHeader(header: Uint8Array | ArrayBuffer | Blob): Promise<MimeTypes | undefined> {
	const hexString = await sliceHexString(header,8);

	// console.log('L1',':',hexString)

	const numbers = getMagicNumbers();
	if (numbers.has(hexString)) {
		return numbers.get(hexString) as MimeTypes;
	}
	for (const [magic, mimeType] of numbers) {
		if (hexString.startsWith(magic)) {
			return mimeType;
		}
	}
}