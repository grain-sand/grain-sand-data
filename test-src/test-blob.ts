// noinspection ES6UnusedImports
// noinspection JSUnusedLocalSymbols

import {describe, expect, it} from "vitest";
import {logJson} from "grain-sand-base";
import {BlobTypes, MimeTypes, readBlob} from "../src";

const console = (top as any).console;

describe('blob', async () => {
	// const blob = await fetch('https://emoji.bj.bcebos.com/yige-aigc/index_aigc/final/toolspics/15.png').then(r => r.blob());
	const blob = await fetch('/1.svg').then(r => r.blob());
	it('img', async (): Promise<void> => {
		const img = await readBlob(blob,BlobTypes.Image);
		expect(img).instanceof(HTMLImageElement);
	})
	it('auto-img', async (): Promise<void> => {
		const img = await readBlob(blob);
		console.log(img)
		// expect(img.mime).eq(MimeTypes.SVG)
	})
})