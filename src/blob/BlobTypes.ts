export const enum BlobTypes {

	/**
	 * 文本类型
	 */
	Text,

	/**
	 * 已编码的Base64URL
	 */
	Base64,

	/**
	 * <img>对象,类型为 HTMLImageElement
	 */
	Image,

	/**
	 * 位图,类型为 ImageBitmap
	 */
	Bitmap,

	/**
	 * Svg,类型为HTMLUnknownElement
	 */
	Svg,

	/**
	 * Html,类型为Document
	 */
	Html    ,

	/**
	 * Xml,类型为XMLDocument
	 */
	Xml,

	/**
	 * Json,类型为any object
	 */
	Json,

	/**
	 * 本类库内置的简单数据类型,比JSON有更小的空间占用,更利于网络传输
	 * 类型为 SimpleDataReader
	 */
	SimpleData,

	/**
	 * 当为不支持的类型时,返回原Blob与可能的类型
	 */
	NotSupped

}