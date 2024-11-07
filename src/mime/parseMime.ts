import {MimeTypes} from "./MimeTypes";
import {parseHexHeader} from "./private/parseHexHeader";
import {parseZipL2Header} from "./private/parseZipL2Header";
import {parseTextHeader} from "./private/parseTextHader";

const unknownHeaders: string[] = ['stream', 'unknown', 'binary', 'text/plain'];

export async function parseMime(header: Uint8Array | ArrayBuffer | Blob): Promise<MimeTypes | undefined> {
	const blobType: string = (header as any).type || '';
	if (blobType && !unknownHeaders.some(uh => blobType.includes(uh))) {
		return blobType as any;
	}

	let textType: any = (blobType?.includes(MimeTypes.TextPlain as string)) ? await parseTextHeader(header) : '';
	if (textType) return textType;

	const hexType = await parseHexHeader(header) as string;
	if (/zip$/.test(hexType)) {
		return await parseZipL2Header(header)
	}
	textType = (!hexType || hexType.includes(MimeTypes.TextPlain as string)) ? await parseTextHeader(header) : '';
	return (textType || blobType || hexType || undefined) as any;
}
