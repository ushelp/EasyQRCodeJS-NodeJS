const QRCode = require('../index.min');


var qrcode = new QRCode({
	// ====== Basic
	text: "www.easyproject.cn/donation",
	width: 256,
	height: 256,
	quietZone: 0,
	colorDark: "#000000",
	colorLight: "#ffffff",
	correctLevel: QRCode.CorrectLevel.H, // L, M, Q, H
	dotScale: 1 // Must be greater than 0, less than or equal to 1. default is 1
});



var qrcode2 = new QRCode({
	// ====== Basic
	text: "www.easyproject.cn/donation",
	
	width: 400,
	height: 400,
	quietZone: 0,
	correctLevel: QRCode.CorrectLevel.H, // L, M, Q, H
	dotScale: 0.5 ,// Must be greater than 0, less than or equal to 1. default is 1
	colorDark: "#473C8B",
	colorLight: "#FFFACD",
	
	// === Posotion Pattern(Eye) Color
	PI: '#BF3030',
	PO: '#269926', 
	
	PI_TL: '#b7d28d', // Position Inner - Top Left 
	PO_TL: '#aa5b71', // Position Outer - Top Right
	AO: '#336699',  // Position Outer - Bottom Right
	AI: '#336699',  // Position Inner - Bottom Right
	
	// === Aligment color
	AI: '#009ACD',
	AO: '#B03060',
	
	// === Timing Pattern Color
	//	timing: '#e1622f', // Global Timing color. if not set, the defaut is `colorDark`
	timing_H: '#ff6600', // Horizontal timing color
	timing_V: '#cc0033',// Vertical timing color
	
	// === Background image
	backgroundImage: 'logo.png',
	backgroundImageAlpha: 0.3,
	autoColor: true,
	
});


var qrcode3 = new QRCode({
	// ====== Basic
	text: "www.easyproject.cn/donation",
	
	width: 400,
	height: 400,
	quietZone: 20,
	correctLevel: QRCode.CorrectLevel.H, // L, M, Q, H
	dotScale: 0.5 ,// Must be greater than 0, less than or equal to 1. default is 1
	colorDark: "#473C8B",
	colorLight: "#FFFACD",
	
	// === Title
	title: 'EasyQRCode', // Title
	titleFont: "bold 24px Arial", // Title font
	titleColor: "#004284", // Title Color
	titleBackgroundColor: "#fffff", // Title Background
	titleHeight: 70, // Title height, include subTitle
	titleTop: 25, // Title draw position(Y coordinate), default is 30
	
	// === SubTitle
	subTitle: 'nodejs', // Subtitle content
	subTitleFont: "20px Arial", // Subtitle font
	subTitleColor: "#269926", // Subtitle color
	subTitleTop: 40, // Subtitle drwa position(Y coordinate), default is 50
	
	// === Posotion Pattern(Eye) Color
	PI: '#BF3030',
	PO: '#269926', 
	
	PI_TL: '#b7d28d', // Position Inner - Top Left 
	PO_TL: '#aa5b71', // Position Outer - Top Right
	AO: '#336699',  // Position Outer - Bottom Right
	AI: '#336699',  // Position Inner - Bottom Right
	
	// === Aligment color
	AI: '#009ACD',
	AO: '#B03060',
	
	// === Timing Pattern Color
	//	timing: '#e1622f', // Global Timing color. if not set, the defaut is `colorDark`
	timing_H: '#ff6600', // Horizontal timing color
	timing_V: '#cc0033' ,// Vertical timing color
	
	// === Logo
	logo: "https://avatars1.githubusercontent.com/u/4082017?s=160&v=4", // LOGO
	//					logo:"http://127.0.0.1:8020/easy-qrcodejs/demo/logo.png",  
	//					logoWidth:80, 
	//					logoHeight:80,
	logoBackgroundColor: '#FFF8DC', // Logo backgroud color, Invalid when `logBgTransparent` is true; default is '#ffffff'
	logoBackgroundTransparent: false, // Whether use transparent image, default is false

	// === Background image
	backgroundImage: 'logo.png',
	backgroundImageAlpha: 0.3,
	autoColor: true,
	
	onRendStart:function(){
		console.info("The QRCode file `q3.png` was created.");
	}
	
});

qrcode.saveImage({
	path: 'q.png',
	compressionLevel: 6
});


qrcode2.saveImage({
	path: 'q2.png'
});


qrcode3.saveImage({
	path: 'q3.png'
});


qrcode.toDataURL().then(data=>{
	console.info('======QRCode PNG DataURL======')
	console.info(data)
	console.info('')
});

