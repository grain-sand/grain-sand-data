# grain-sand-data
### English | [中文](README.cn.md)
> A foundational library for reading and writing network or file data on the browser side<br/>
> For local file read/write operations, [grain-sand-web-fs](https://www.npmjs.com/package/grain-sand-web-fs), built on top of this library, offers enhanced ease of use<br/>
> For network data reading and downloading, [grain-sand-net](https://www.npmjs.com/package/grain-sand-net), also based on this library, provides a more convenient solution
>> The main features include automatic type detection by file content and file extension analysis.

> Automatically reads common browser-side data types based on content
>> e.g., text, images, HTML, XML, etc.

> Also includes a SimpleData type wrapper, optimized for network transmission and smaller than JSON


## Installation
```shell
npx yarn add grain-sand-data
```

## Usage
### Auto-detecting Data Types and Reading Data
```ts
import {parseMime,getExtensionMime,readBlob} from 'https://cdn.jsdmirror.cn/npm/grain-sand-data/lib/index.web.js'

const blob = await fetch('https://emoji.bj.bcebos.com/yige-aigc/index_aigc/final/toolspics/15.png').then(r => r.blob());

const mime = await parseMime(blob); // Analyze data type from blob, supports images, text, videos, segments, etc.

console.log(mime); // Outputs: image/png

const type = await getExtensionMime(mime!);
console.log(type); // Outputs: {ext: 'png', mime: 'image/png'}

const pkg = await readBlob(blob);
document.body.appendChild(pkg.result); // Displays the image on the page

console.log(pkg); // Outputs: {ext: 'png', mime: 'image/png', blob: Blob, type: 2, result: img}
```