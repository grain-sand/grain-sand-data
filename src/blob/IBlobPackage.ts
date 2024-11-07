import {BlobTypes} from "./BlobTypes";
import {IExtensionMime} from "../mime";

export interface IBlobPackage<T = any> extends IExtensionMime {
	type: BlobTypes
	blob: Blob
	result?: T
}