import {invertRecordKv} from "grain-sand-base";
import {getMiniToExtensionMap} from "./getMiniToExtensionMap";
import {MimeTypes} from "../MimeTypes";

let extensionToMimeMap: Record<string, MimeTypes> | undefined;

export const getExtensionToMiniMap = (): Record<string, MimeTypes> => {
	if (!extensionToMimeMap) {
		extensionToMimeMap = invertRecordKv(getMiniToExtensionMap()) as any;
	}
	return extensionToMimeMap!;
}