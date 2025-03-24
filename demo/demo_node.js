const QRCode = require("../index");

const fs = require("fs");

// ================================ PNG Configs

var config = {
  // ====== Basic
  text: "www.easyproject.cn/donation",
  width: 256,
  height: 256,
  quietZone: 0,
  colorDark: "#000000",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H, // L, M, Q, H
  dotScale: 1, // Must be greater than 0, less than or equal to 1. default is 1
};

var config2 = {
  // ====== Basic
  text: "www.easyproject.cn/donation",

  width: 400,
  height: 400,
  quietZone: 0,
  correctLevel: QRCode.CorrectLevel.H, // L, M, Q, H
  dotScale: 0.5, // Must be greater than 0, less than or equal to 1. default is 1
  colorDark: "#473C8B",
  colorLight: "#FFFACD",

  // === Posotion Pattern(Eye) Color
  PI: "#BF3030",
  PO: "#269926",

  PI_TL: "#b7d28d", // Position Inner - Top Left
  PO_TL: "#aa5b71", // Position Outer - Top Right
  AO: "#336699", // Position Outer - Bottom Right
  AI: "#336699", // Position Inner - Bottom Right

  // === Aligment color
  AI: "#009ACD",
  AO: "#B03060",

  // === Timing Pattern Color
  //	timing: '#e1622f', // Global Timing color. if not set, the defaut is `colorDark`
  timing_H: "#ff6600", // Horizontal timing color
  timing_V: "#cc0033", // Vertical timing color

  // === Background image
  backgroundImage: "logo.png",
  backgroundImageAlpha: 0.3,
  autoColor: true,
};

var config3 = {
  // ====== Basic
  text: "www.easyproject.cn/donation",

  width: 400,
  height: 400,
  correctLevel: QRCode.CorrectLevel.H, // L, M, Q, H
  dotScale: 0.5, // Must be greater than 0, less than or equal to 1. default is 1
  colorDark: "#473C8B",
  colorLight: "#FFFACD",

  // === Title
  title: "EasyQRCode", // Title
  titleFont: "normal normal bold 24px Arial", // Title font
  titleColor: "#004284", // Title Color
  titleBackgroundColor: "#ffffff", // Title Background
  titleHeight: 70, // Title height, include subTitle
  titleTop: 25, // Title draw position(Y coordinate), default is 30

  // === SubTitle
  subTitle: "nodejs", // Subtitle content
  subTitleFont: "normal normal normal 20px Arial", // Subtitle font
  subTitleColor: "#269926", // Subtitle color
  subTitleTop: 50, // Subtitle drwa position(Y coordinate), default is 50

  // === Posotion Pattern(Eye) Color
  PI: "#BF3030",
  PO: "#269926",

  PI_TL: "#b7d28d", // Position Inner - Top Left
  PO_TL: "#aa5b71", // Position Outer - Top Right
  AO: "#336699", // Position Outer - Bottom Right
  AI: "#336699", // Position Inner - Bottom Right

  // === Aligment color
  AI: "#009ACD",
  AO: "#B03060",

  // === Timing Pattern Color
  //	timing: '#e1622f', // Global Timing color. if not set, the defaut is `colorDark`
  timing_H: "#ff6600", // Horizontal timing color
  timing_V: "#cc0033", // Vertical timing color

  // === Logo
  // logo: "https://avatars1.githubusercontent.com/u/4082017?s=160&v=4", // LOGO
  logo: "avatars.png", // LOGO
  //					logo:"http://127.0.0.1:8020/easy-qrcodejs/demo/logo.png",
  //					logoWidth:80,
  //					logoHeight:80,
  logoBackgroundColor: "#FFF8DC", // Logo backgroud color, Invalid when `logBgTransparent` is true; default is '#ffffff'
  logoBackgroundTransparent: false, // Whether use transparent image, default is false

  // === Background image
  backgroundImage: "logo.png",
  backgroundImageAlpha: 0.3,
  autoColor: true,

  onRenderingStart: function (options) {
    console.info(`The QRCode file 'q3.${options.format}' was created.`);
  },
};

var config4 = {
  // ====== Basic
  text: "www.easyproject.cn/donation",

  width: 400,
  height: 400,
  correctLevel: QRCode.CorrectLevel.H, // L, M, Q, H
  dotScale: 0.5, // Must be greater than 0, less than or equal to 1. default is 1
  colorDark: "#473C8B",
  colorLight: "#FFFACD",

  // QuietZone
  quietZone: 15,
  quietZoneColor: "#00CED1",

  // === Posotion Pattern(Eye) Color
  PI: "#BF3030",
  PO: "#269926",

  PI_TL: "#b7d28d", // Position Inner - Top Left
  PO_TL: "#aa5b71", // Position Outer - Top Right
  AO: "#336699", // Position Outer - Bottom Right
  AI: "#336699", // Position Inner - Bottom Right

  // === Aligment color
  AI: "#009ACD",
  AO: "#B03060",

  // === Timing Pattern Color
  //	timing: '#e1622f', // Global Timing color. if not set, the defaut is `colorDark`
  timing_H: "#ff6600", // Horizontal timing color
  timing_V: "#cc0033", // Vertical timing color

  // === Logo
  // logo: "https://avatars1.githubusercontent.com/u/4082017?s=160&v=4", // LOGO
  logo: "./avatars.png", // LOGO
  //					logo:"http://127.0.0.1:8020/easy-qrcodejs/demo/logo.png",
  //					logoWidth:80,
  //					logoHeight:80,
  logoBackgroundColor: "#FFF8DC", // Logo backgroud color, Invalid when `logBgTransparent` is true; default is '#ffffff'
  logoBackgroundTransparent: false, // Whether use transparent image, default is false
};

// ================================ PNG Test

var qrcode = new QRCode(config);
var qrcode2 = new QRCode(config2);
var qrcode3 = new QRCode(config3);
var qrcode4 = new QRCode(config4);

qrcode.saveImage({
  path: "q.png",
});
qrcode2.saveImage({
  path: "q2.png",
});
qrcode3.saveImage({
  path: "q3.png",
});
qrcode4.saveImage({
  path: "q4.png",
});
qrcode.toDataURL().then((data) => {
  console.info("======QRCode PNG DataURL======");
  console.info(data);
  console.info("");
});

// ================================ JPG Test

var config5 = Object.assign({}, config, {
  format: "JPG",
  version: 6,
});
var config6 = Object.assign({}, config2, {
  format: "JPG",
});
var config7 = Object.assign({}, config3, {
  format: "JPG",
});
var config8 = Object.assign({}, config4, {
  format: "JPG",
});

var qrcode5 = new QRCode(config5);
var qrcode6 = new QRCode(config6);
var qrcode7 = new QRCode(config7);
var qrcode8 = new QRCode(config8);

qrcode5.saveImage({
  path: "q.jpg",
});
qrcode6.saveImage({
  path: "q2.jpg",
});
qrcode7.saveImage({
  path: "q3.jpg",
});
qrcode8.saveImage({
  path: "q4.jpg",
});

qrcode5.toSVGText().then((data) => {
  console.info("======QRCode SVG Data Text======");
  console.info(data);
  console.info("");
});

qrcode8.saveSVG({
  path: "qrcode.svg",
});

var streamConfig = {
  // ====== Basic
  text: "https://github.com/ushelp/EasyQRCodeJS-NodeJS",
  colorLight: "transparent",
  width: 400,
  height: 400,
  quietZone: 10,
  quietZoneColor: "transparent",
};

async function generate() {
  var streamQrcode = new QRCode(streamConfig);

  const out = fs.createWriteStream(`qrcode-stream.png`);
  // const stream = await streamQrcode.toStream();
  // stream.pipe(out);
  // out.on('finish', () => console.log('Finsihed'));

  streamQrcode.toStream().then((res) => {
    res.pipe(out).on("finish", () => console.log("Stream Finsihed"));
  });
}

generate();
