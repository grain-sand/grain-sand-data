import {getMiniToExtensionMap} from "./private/getMiniToExtensionMap";
import {MimeTypes} from "./MimeTypes";
import {getExtensionToMiniMap} from "./private/getExtensionToMiniMap";
import {IExtensionMime} from "./IExtensionMime";

const MineExtensionRegexp = /^\.?(\w+)(?:\/([0-9a-z-+.]+)\s*(?:;.*charset\s*=\s*([0-9a-z-]+).*)?)?$/i

export function getExtensionMime(extOrMine: string): IExtensionMime {
	const match = MineExtensionRegexp.exec(extOrMine)
	let mime: any, ext: any;
	if (match?.[2]) {
		mime = `${match[1]}/${match[2]}`
		ext = getMiniToExtensionMap()?.[mime as MimeTypes] || 'unknown'
	} else if (match?.[1]) {
		ext = match[1]
		mime = getExtensionToMiniMap()[ext] || MimeTypes.UnknownBinary
	}
	match?.[3] && (mime = `${mime}; charset=${match[3]}`)
	return {
		ext,
		mime
	}
}