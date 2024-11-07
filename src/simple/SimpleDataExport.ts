import {IDataExportArg} from "./IDataExportArg";
import {checkFieldsRecord, createFieldEntries} from "./impl/checkFieldsRecord";
import {IRecordMeta} from "./IRecordMeta";
import {createDataLine} from "./impl/createDataLine";
import {isAsyncIterable, isIterable, joinAsyncIterable} from "grain-sand-base";
import {SimpleDataHeaderPrefix, SimpleDataTypePrefix} from "./impl/const";

export const exportSimpleData = (arg: IDataExportArg) => joinAsyncIterable(new SimpleDataExport(arg))

export class SimpleDataExport implements AsyncIterable<string> {

	private _arg?: IDataExportArg

	constructor(arg: IDataExportArg) {
		this._arg = arg;
	}

	async* [Symbol.asyncIterator](): AsyncIterator<string> {
		const {header, exportData} = this._arg!
		yield `${SimpleDataHeaderPrefix}${JSON.stringify(header)}`;
		for (const data of exportData) {
			const fields = await checkFieldsRecord(data);
			const fieldsEntries = createFieldEntries(fields);
			const header: IRecordMeta = {name: data.name, fields}
			data.description && (header.description = data.description);
			data.extraData && (header.extraData = data.extraData);
			data.defaultValues && (header.defaultValues = data.defaultValues);
			yield `${SimpleDataTypePrefix}${JSON.stringify(header)}`;
			if (isIterable(data.data)) {
				for (const d of data.data as any) {
					yield createDataLine(fieldsEntries, d);
				}
			} else if (isAsyncIterable(data.data)) {
				for await(const d of data.data as any) {
					yield createDataLine(fieldsEntries, d);
				}
			}
		}
	}

	destroy() {
		delete this._arg;
	}
}