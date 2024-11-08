# grain-sand-data
### 中文 | [English](README.md)
> 在浏览器端读写网络或文件数据的基础性类库<br/>
> 如果用于本地文件读写,基于本类库的[grain-sand-web-fs](https://www.npmjs.com/package/grain-sand-web-fs)更方便使用<br/>
> 如果用于网络读取与下载,基于本类库的[grain-sand-net](https://www.npmjs.com/package/grain-sand-net)更方便使用
>> 主要包含通过文件内容自动类型分析与扩展名分析

> 自动根据内容读取浏览器端常用数据类型
>>如:文本、图片、html、XML……等

> 还包含了一个更利于网络传输,更小于json的SimpleData类型封装


## 安装
```shell
npx yarn add grain-sand-data
```
## 使用
### 自动判断数据类型 与 数据读取
```ts
import {parseMime,getExtensionMime,readBlob} from 'https://cdn.jsdmirror.cn/npm/grain-sand-data/lib/index.web.js'

const blob = await fetch('https://emoji.bj.bcebos.com/yige-aigc/index_aigc/final/toolspics/15.png').then(r=>r.blob());

const mime = await parseMime(blob)//从blob分析数据类型,图片、文本、视频、切片……等类型皆支持

console.log(mime) // 打印输出  image/png

const type = await getExtensionMime(mime!)
console.log(type) // 打印输出  {ext: 'png', mime: 'image/png'}

const pkg = await readBlob(blob)
document.body.appendChild(pkg.result) //将会在页面上显示图片

console.log(pkg) //打印输出 {ext: 'png', mime: 'image/png', blob: Blob, type: 2, result: img}

```