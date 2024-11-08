import {BlobTypes} from "./BlobTypes";
import {IExtensionMime} from "../mime";
import {Base64DataURL} from "../general";

export type BlobResult =
	Blob
	| string
	| Base64DataURL
	| HTMLImageElement
	| ImageBitmap
	| HTMLUnknownElement
	| Document
	| XMLDocument;

export interface IBlobPackage<T extends BlobResult = any> extends IExtensionMime {
	type: BlobTypes
	blob: Blob
	result?: T
}