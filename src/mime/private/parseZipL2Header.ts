import {MimeTypes} from "../MimeTypes";
import {sliceText} from "./sliceHeader";

const ZipSubHeaders: [string, MimeTypes][] = [
	["word/", MimeTypes.DOCX],
	["ppt/", MimeTypes.PPTX],
	["xl/", MimeTypes.XLSX],
	["@Uu", MimeTypes.Fbr],
	["mimetypeapplication/", MimeTypes.AdobeXD],
]

export async function parseZipL2Header(header: Uint8Array | ArrayBuffer | Blob): Promise<MimeTypes | undefined> {
	const subHeader = await sliceText(header, 50, 30);

	// console.log('L2',':',subHeader)

	for( const [header,type] of ZipSubHeaders) {
		if(subHeader.includes(header)) {
			return type
		}
	}
	return MimeTypes.ZIP; // 默认为 ZIP
}