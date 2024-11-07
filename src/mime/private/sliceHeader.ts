export async function sliceHeader(header: Uint8Array | ArrayBuffer | Blob, end: number, start: number = 0): Promise<Uint8Array> {
	let arrayHeader;
	if (header instanceof Blob) {
		arrayHeader = new Uint8Array(await header.slice(start, end).arrayBuffer());
	} else if (header instanceof ArrayBuffer) {
		arrayHeader = new Uint8Array(header.slice(start, end));
	} else {
		arrayHeader = header.slice(start, end);
	}
	return arrayHeader;
}

export async function sliceHexString(header: Uint8Array | ArrayBuffer | Blob, end: number, start: number = 0): Promise<string> {
	return Array.from(await sliceHeader(header, end, start))
		.map(b => b.toString(16).padStart(2, "0"))
		.join('')
		.toUpperCase();
}

export async function sliceText(header: Uint8Array | ArrayBuffer | Blob, end: number, start: number = 0): Promise<string>  {
	return new TextDecoder().decode(await sliceHeader(header, end, start));
}