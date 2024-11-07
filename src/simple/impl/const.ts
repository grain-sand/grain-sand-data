export const SimpleDataTypePrefix: string = '//';
export const SimpleDataHeaderPrefix: string = 'SimpleData,';

export const SimpleDataHeaderRegexp = new RegExp(`^(${SimpleDataHeaderPrefix})?(\\{.*\\}|\\[.*\\])$`, 'i')
