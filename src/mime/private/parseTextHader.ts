import {MimeTypes} from "../MimeTypes";
import {sliceText} from "./sliceHeader";
import {SimpleDataHeaderPrefix, SimpleDataHeaderRegexp} from "../../simple/impl/const";

const textHeaderTypes: [RegExp, MimeTypes][] = [
	[/^<(!DOCTYPE\s+)?html/i, MimeTypes.HTML],
	[/^<svg/i, MimeTypes.SVG],
	[/^<(\?xml|\w+)/i, MimeTypes.XML],
	[/^[{\[]/i, MimeTypes.JSON],
	[/^8BPS/i, MimeTypes.PSD],
	[/^@?(echo|chcp|set)/i, MimeTypes.Bat],
	[new RegExp(`^${SimpleDataHeaderPrefix}`,'i'), MimeTypes.SimpleData],
	[/^DAUMPLAYLIST/i, MimeTypes.DPL],
]

export async function parseTextHeader(header: Uint8Array | ArrayBuffer | Blob): Promise<MimeTypes | undefined> {
	const textHeader = (await sliceText(header, 50)).trim();

	// console.log(textHeader)

	for (const [regexp, type] of textHeaderTypes) {
		if (regexp.test(textHeader)) {
			return type;
		}
	}
	return undefined;
}