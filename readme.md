# EasyQRCodeJS-NodeJS

EasyQRCodeJS-NodeJS is a NodeJS server side javascript QRCode image(PNG/JPEG/SVG/Base64 data url) generator. Support setting Dot style, Logo, Background image, Colorful, Title and more. Support binary(hex) data mode.

EasyQRCodeJS-NodeJS 是一个 NodeJS 环境下的服务端 JavaScript QRCode 图片(PNG/JPEG/SVG/Base64 data url)生成模块。支持点状风格，Logo，背景图片，规则色彩控制，标题等设置。支持二进制数据模式。

## Table of contents

- [Table of contents](#table-of-contents)
- [Choose what you need](#choose-what-you-need)
- [Feature](#feature)
- [Try It!](#try-it)
- [Demo preview](#demo-preview)
- [QR Code Structure](#qr-code-structure)
- [Installation](#installation)
- [Basic Usages](#basic-usages)
- [QRCode API](#qrcode-api)
    - [Object](#object)
    - [Options](#options)
    - [Methods](#methods)
- [TypeScript Support](#typescript-support)
- [License](#license)
- [EasyQRCodeJS-NodeJS-Premium](#easyqrcodejs-nodejs-premium)
- [End](#end)

## Choose what you need

| Project | Support |
| --- | --- |
| [EasyQRCodeJS](https://github.com/ushelp/EasyQRCodeJS) | **Running with DOM on CLIENT-SIDE .** Browser(IE6+, Chrome, Firefox, Safari, Opera, Mobile Safari, Android, Windows Mobile, ETC.), Electron, NW.js, ETC.  |
| [EasyQRCodeJS-NodeJS](https://github.com/ushelp/EasyQRCodeJS-NodeJS) | **Running without DOM on SERVER-SIDE**. Save image to file(PNG/JPEG/SVG) or get data url text.  NodeJS, Electron, NW.js, ETC.|
| [EasyQRCode-React-Native](https://github.com/ushelp/EasyQRCode-React-Native) | **A QRCode generator for React Native**. Generate QRCode image or get base64 data url text. |

## Feature

- **English**

    - Save QRCode image file without DOM on server side

	- Support save PNG/JPEG/SVG image file

	- Support get standard base64 image data url text: `data:image/png;base64, ...`

	- Support get SVG data text: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" ...`
    
    - Required Patterns that support dot style
 
    - Support for Quiet Zone settings
	
    - Support custom Position Pattern inner fill and outer border color

    - Support custom Alignment Pattern inner fill and outer border color

    - Support custom Timing Patterns vertical, horizontal color

    - Support Logo images (including transparent PNG images)

    - Support Background Image

    - Support for title, subtitle settings
    
    - Support binary(hex) data mode

    - Support TypeScript
    
- **中文**

    - 无需 DOM 的服务端 QRCode 图片保存

	- 支持存储为 PNG 图片

	- 支持获得 Base64 编码的标准图形 URL 字符串：`data:image/png;base64, ...`
    
    - 支持获得 SVG 图形文本: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" ...`
    
    - 支持点形风格的 Required Patterns

    - 支持 Quiet Zone 设置
	
    - 支持自定义 Position Pattern 内填充和外边框颜色
	
    - 支持自定义 Alignment Pattern 内填充和外边框颜色

    - 支持自定义 Timing Patterns 垂直，水平颜色

    - 支持 Logo 图片（包括背景透明的 PNG 图片）

    - 支持 Background Image 背景图片

    - 支持标题，副标题设置

    - 二进制数据模式支持

    - TypeScript 支持

## Try It!

[Try It!](http://www.easyproject.cn/easyqrcodejs/tryit.html "EasyQRCodeJS Try It!")

## Demo preview

![Demo preview](doc/images/demo.png)

## QR Code Structure

![QR Code Structure](doc/images/QR_Code_Structure.png)


## Installation

```HTML
npm install easyqrcodejs-nodejs
```


## Basic Usages

```JS
const QRCode = require('easyqrcodejs-nodejs');

// Options
var options = {
	text: "www.easyproject.cn/donation"
};

// New instance with options
var qrcode = new QRCode(options);

// Save QRCode image
qrcode.saveImage({
	path: 'q.png' // save path
});
```

## QRCode API

### Object

```JS
var qrcode = new QRCode(options);
```


### Options

```JS
 var options = {
		// ====== Basic
		text: "https://github.com/ushelp/EasyQRCodeJS",
		width: 256,
		height: 256,
		colorDark : "#000000",
		colorLight : "#ffffff",
		correctLevel : QRCode.CorrectLevel.H, // L, M, Q, H
		dotScale: 1 // Must be greater than 0, less than or equal to 1. default is 1
		
		// ====== Quiet Zone
		/*
		quietZone: 0,
		quietZoneColor: 'transparent',
		*/
		
		// ====== Logo
		/*
		logo:"../demo/logo.png", // Relative address, relative to `easy.qrcode.min.js`
		logo:"http://127.0.0.1:8020/easy-qrcodejs/demo/logo.png", 
		logoWidth:80, // width. default is automatic width
		logoHeight:80 // height. default is automatic height
		logoBackgroundColor:'#fffff', // Logo backgroud color, Invalid when `logBgTransparent` is true; default is '#ffffff'
		logoBackgroundTransparent:false, // Whether use transparent image, default is false
		*/
	
		// ====== Backgroud Image
		/*
		backgroundImage: '', // Background Image
		backgroundImageAlpha: 1, // Background image transparency, value between 0 and 1. default is 1. 
		autoColor: false,
		*/
		
		// ====== Colorful
		// === Posotion Pattern(Eye) Color
		/*
		PO: '#e1622f', // Global Posotion Outer color. if not set, the defaut is `colorDark`
		PI: '#aa5b71', // Global Posotion Inner color. if not set, the defaut is `colorDark`
		PO_TL:'', // Posotion Outer color - Top Left 
		PI_TL:'', // Posotion Inner color - Top Left 
		PO_TR:'', // Posotion Outer color - Top Right 
		PI_TR:'', // Posotion Inner color - Top Right 
		PO_BL:'', // Posotion Outer color - Bottom Left 
		PI_BL:'', // Posotion Inner color - Bottom Left 
		*/
		// === Alignment Color
		/*
		AO: '', // Alignment Outer. if not set, the defaut is `colorDark`
		AI: '', // Alignment Inner. if not set, the defaut is `colorDark`
		*/
		// === Timing Pattern Color
		/*
		timing: '#e1622f', // Global Timing color. if not set, the defaut is `colorDark`
		timing_H: '', // Horizontal timing color
		timing_V: '', // Vertical timing color
		*/
		
		// ====== Title
		/*
		title: 'QR Title', // content 
		titleFont: "bold 18px Arial", //font. default is "bold 16px Arial"
		titleColor: "#004284", // color. default is "#000"
		titleBackgroundColor: "#fff", // background color. default is "#fff"
		titleHeight: 70, // height, including subTitle. default is 0
		titleTop: 25, // draws y coordinates. default is 30
		*/
	   
		// ====== SubTitle
		/*
		subTitle: 'QR subTitle', // content
		subTitleFont: "14px Arial", // font. default is "14px Arial"
		subTitleColor: "#004284", // color. default is "4F4F4F"
		subTitleTop: 40, // draws y coordinates. default is 0
		*/
	   
		// ===== Event Handler
		/*
		onRenderingStart: undefined,
		*/
	   
		// ==== Images format
		/*
		format: 'PNG', // 'PNG', 'JPG'
		compressionLevel: 6, // ZLIB compression level (0-9). default is 6
		quality: 0.75, // An object specifying the quality (0 to 1). default is 0.75. (JPGs only) 
		*/
	   
		// ==== Versions
		/*
		version: 0, // The symbol versions of QR Code range from Version 1 to Version 40. default 0 means automatically choose the closest version based on the text length.
		*/     
       
		// ===== Binary(hex) data mode
		/*
		binary: false // Whether it is binary mode, default is text mode. 
		*/ 
}
```

| Option | Required | Type | Defaults | Description |
| --- | --- |--- | --- |--- |
| Basic options| --- | ---|---|---|
| **text** | Y | String |`''` |  Text |
| **width** | N | Number | `256` |  Width | 
| **height** | N | Number | `256` |  Height | 
| **colorDark** | N | String | `#000000` | Dark CSS color | 
| **colorLight** | N | String | `#ffffff` | Light CSS color | 
| **correctLevel** | N | Enum | `QRCode.CorrectLevel.H` | `QRCode.CorrectLevel.H`<br/>`QRCode.CorrectLevel.Q` <br/> `QRCode.CorrectLevel.M` <br/> `QRCode.CorrectLevel.L`| 
| **dotScale** | N | Number | `1.0` |Dot style required Patterns. Ranges: `0-1.0` | 
| Quiet Zone| --- | ---|---|---|
| **quietZone** | N | Number | `0` |  Quiet Zone size | 
| **quietZoneColor** | N | String | `transparent` |  Background CSS color to Quiet Zone | 
| Logo options| --- | ---|---|---|
| **logo** | N | String | `undefined` | Logo Image Path or Base64 encoded image. If use relative address, relative to `easy.qrcode.min.js` |  
| **logoWidth** | N | Number | `undefined` |  Height |  
| **logoHeight** | N | Number | `undefined` |  Width |  
| **logoBackgroundTransparent** | N | Boolean | `false` |  Whether the background transparent image(`PNG`) shows transparency. When `true`, `logoBackgroundColor` is invalid |  
| **logoBackgroundColor** | N | String | `#ffffff` |  Set Background CSS Color when image background transparent. Valid when `logoBackgroundTransparent` is `false` |  
| Backgroud Image options|  ---|--- |---|---|
| **backgroundImage** | N | String | `undefined` | Background Image Path or Base64 encoded image. If use relative address, relative to `easy.qrcode.min.js` | 
| **backgroundImageAlpha** | N | Number | `1.0` |  Background image transparency. Ranges: `0-1.0`  |  
| **autoColor** | N | Boolean | `false` |  Automatic color adjustment | 
| Posotion Pattern Color options| --- | ---|---|---|
| **PO** | N | String | `undefined` | Global Posotion Outer CSS color. if not set, the defaut is `colorDark` | 
| **PI** | N | String | `undefined` | Global Posotion Inner CSS color. if not set, the defaut is `colorDark` | 
| **PO_TL** | N | String | `undefined` | Posotion Outer CSS color - Top Left |  
| **PI_TL** | N | String | `undefined` | Posotion Inner CSS color - Top Left |  
| **PO_TR** | N | String | `undefined` | Posotion Outer CSS color - Top Right |  
| **PI_TR** | N | String | `undefined` | Posotion Inner CSS color - Top Right | 
| **PO_BL** | N | String | `undefined` | Posotion Outer CSS color - Bottom Left | 
| **PI_BL** | N | String | `undefined` | Posotion Inner CSS color - Bottom Left | 
| Alignment Color options| --- |--- |---|---|
| **AO** | N | String | `undefined` | Alignment Outer CSS color. if not set, the defaut is `colorDark` | 
| **AI** | N | String | `undefined` | Alignment Inner CSS color. if not set, the defaut is `colorDark` |  
| Timing Pattern Color options| --- | ---|---|---|
| **timing** | N | String | `undefined` | Global Timing CSS color. if not set, the defaut is `colorDark` |  
| **timing_H** | N | String | `undefined` | Horizontal timing CSS color |  
| **timing_V** | N | String | `undefined` | Vertical timing CSS color |  
| Title options| --- | ---|---|---|
| **title** | N | String | `''` |  | 
| **titleFont** | N | String | `bold 16px Arial` | CSS Font |  
| **titleColor** | N | String | `#000000` | CSS color |  
| **titleBackgroundColor** | N | String | `#ffffff` | CSS color| 
| **titleHeight** | N | Number | `0` | Title Height, Include subTitle |  
| **titleTop** | N | Number | `30` | draws y coordinates.| 
| SubTitle options| --- | ---|---|---|
| **subTitle** | N | String | `''` |  |  
| **subTitleFont** | N | String | `14px Arial` | CSS Font | 
| **subTitleColor** | N | String | `#4F4F4F` | CSS color | 
| **subTitleTop** | N | Number | `0` | draws y coordinates. default is 0|
| Event Handler options| --- | ---|---|---|
| **onRenderingStart(qrCodeOptions)** | N | Function | `undefined` | Callback function when rendering start work. can use to hide loading state or handling.  | 
| Images format options| --- | ---|---|---|
| **format** | N | String | `PNG` | 'PNG' or 'JPG'  |
| **compressionLevel** | N | Number | `6` | ZLIB compression level between 0 and 9. (**PNGs only**)  |
| **quality** | N | Number | `0.75` | An object specifying the quality (0 to 1). (**JPGs only**)  |
| Version options| --- | ---|---|---|
| **version** | N | Number | `0` | The symbol versions of QR Code range from Version `1` to Version `40`. default 0 means automatically choose the closest version based on the text length.  [Information capacity and versions of QR Codes](https://www.qrcode.com/en/about/version.html) **NOTE**: If you set a value less than the minimum version available for text, the minimum version is automatically used. |
| Binary(hex) data model options| --- | ---|---|---|
| **binary** | N | Boolean | `false` | Whether it is binary mode, default is text mode.  | 

    
### Methods

- **saveImage(ImagesFormatOptions)**

	```JS
	//  Save PNG Images to file
	qrcode.saveImage({
		path: 'q.png' // file path
	}).then(data=>{
       console.log("`q-premium1.png` has been Created!");
    });
	```
    
- **toDataURL()**
 
	```JS
	// Get standard base64 image data url text: 'data:image/png;base64, ...'
	qrcode.toDataURL().then(data=>{
		console.info('======QRCode PNG Base64 DataURL======')
		console.info(data);
	});
	```
    
- **toSVGText()**
 
	```JS
	// Get SVG data text: '<svg xmlns:xlink="http://www.w3.org/1999/xlink" ...'
	qrcode.toSVGText().then(data=>{
		console.info('======QRCode SVG Data Text======')
		console.info(data)
	});
	```
    
## TypeScript Support

Update to version `3.7.1+`.

```Javascript
import QRCode = require("easyqrcodejs-nodejs")
```

## License
MIT License

## EasyQRCodeJS-NodeJS-Premium

**EasyQRCodeJS-NodeJS-Premium** is a more powerful and comprehensive business enterprise edition. You can use Canvas to customize any element, Such as Eye frame sharp, Eye ball sharp, QR Body block sharp, etc.

If you need more functions, we can provide you with customized development of API libraries or products. please contact me to buy the business enterprise edition.

**EasyQRCodeJS-NodeJS-Premium** 是功能更加强大和全面的商业/企业版本。让您可以在 QRCode 中通过 Canvas 自定义任何喜欢的元素，例如  Eye frame sharp, Eye ball sharp, QR Body block sharp 等等。

如果您需要更多功能，我们可以为您提供 API 库或产品的定制开发。请联系我购买商业/企业版本。

![Premium demo preview](doc/images/demo-premium.png)

## End

Email：<inthinkcolor@gmail.com>

[http://www.easyproject.cn](http://www.easyproject.cn "EasyProject Home")


**Donation/捐助:**

<a href="http://www.easyproject.cn/donation">
<img alt="
支付宝/微信/QQ/云闪付/PayPal 扫码支付" src="http://www.easyproject.cn/thanks/donation.png"  title="支付宝/微信/QQ/云闪付/PayPal 扫码支付"  height="320" width="320"></img></a>
<div>支付宝/微信/QQ/云闪付/PayPal</div>

<br/>

我们相信，每个人的点滴贡献，都将是推动产生更多、更好免费开源产品的一大步。

**感谢慷慨捐助，以支持服务器运行和鼓励更多社区成员。**

We believe that the contribution of each bit by bit, will be driven to produce more and better free and open source products a big step.

**Thank you donation to support the server running and encourage more community members.**


