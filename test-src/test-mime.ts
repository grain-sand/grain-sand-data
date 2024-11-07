// noinspection ES6UnusedImports
// noinspection JSUnusedLocalSymbols

import {describe, it, expect} from "vitest";
import {logJson} from "grain-sand-base";
import {getExtensionMime} from "../src";
import {parseMime} from "../src/mime/parseMime";

const console = (top as any).console;

describe('mime', () => {
	it('get', async (): Promise<void> => {
		console.log(getExtensionMime('text/plain'))
		console.log(getExtensionMime('text/plain;charset=utf-8'))
		console.log(getExtensionMime('image/png'))
		console.log(getExtensionMime('.txt'))
	})
	it('header', async (): Promise<void> => {
		const blob = new Blob(['<!DOCTYPE html>\n' +
		'<html lang="en">\n' +
		'  <head>\n' +
		'    <meta charset="UTF-8">\n' +
		'    <link rel="icon" href="/favicon.ico">\n' +
		'    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
		'    <title>Vite App</title>\n' +
		'  </head>\n' +
		'  <body>\n' +
		'    <div id="app"></div>\n' +
		'    <script type="module" src="/src/main.ts"></script>\n' +
		'  </body>\n' +
		'</html>'], {type: ''});
		// logJson(await detectTypeFromHeader(blob))
		// console.log(detectTypeFromHeader(blob))
		console.log(await parseMime(blob))

	})
})