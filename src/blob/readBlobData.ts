import {EncodingType} from "grain-sand-base";

export function readBlobData(blob: Blob, call: 'readAsText', encoding?: EncodingType): Promise<string> ;
export function readBlobData(blob: Blob, call: 'readAsDataURL'): Promise<string> ;
export function readBlobData(blob: Blob, call: 'readAsArrayBuffer'): Promise<ArrayBuffer>;

export function readBlobData(blob: Blob, call: 'readAsArrayBuffer' | 'readAsText' | 'readAsDataURL', encoding?: EncodingType): Promise<any> {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => {
			resolve(reader.result)
		};
		reader.onerror = reject;
		reader[call](blob, encoding);
	})
}