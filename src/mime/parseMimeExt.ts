import {parseMime} from "./parseMime";
import {getExtensionMime} from "./getExtensionMime";
import {IExtensionMime} from "./IExtensionMime";

export async function parseMimeExt(header: Uint8Array | ArrayBuffer | Blob):Promise<IExtensionMime> {
	return getExtensionMime(`${await parseMime(header)}`)
}