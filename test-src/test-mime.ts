// noinspection ES6UnusedImports
// noinspection JSUnusedLocalSymbols

import {describe, it, expect} from "vitest";
import {logJson} from "grain-sand-base";
import {getExtensionMime, parseMimeExt} from "../src";

const console = (top as any).console;

describe('mime', () => {
	it('parseMine', async (): Promise<void> => {
		const blob = await fetch('/1.webp').then(r=>r.blob());
		const blob2 = new Blob([new Uint8Array(await blob.arrayBuffer())])

		console.log(await parseMimeExt(blob))
		console.log(await parseMimeExt(blob2))

	})
	// it('get', async (): Promise<void> => {
	// 	console.log(getExtensionMime('text/plain'))
	// 	console.log(getExtensionMime('text/plain;charset=utf-8'))
	// 	console.log(getExtensionMime('image/png'))
	// 	console.log(getExtensionMime('.txt'))
	// })
})