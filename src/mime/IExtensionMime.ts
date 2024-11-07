import {MimeTypes} from "./MimeTypes";

export type FullMimeType = MimeTypes | `${MimeTypes};${string}`;

export interface IExtensionMime {
	ext: string
	mime: FullMimeType
}