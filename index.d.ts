// Type definitions for easyqrcodejs-nodejs.js
// Project: [https://github.com/ushelp/EasyQRCodeJS-NodeJS] 
// Definitions by: Ray <inthinkcolor@gmail.com> 

export = QRCode;

declare class QRCode {
    constructor(vOption: any);

    saveImage(saveOptions: any): any;
    
    saveSVG(saveOptions: any): any;

    toDataURL(format?: any): any;
    
    toSVGText(format?: any): any;

    static CorrectLevel: {
        H: number;
        L: number;
        M: number;
        Q: number;
    };

}

