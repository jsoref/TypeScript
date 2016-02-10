/// <reference path='fourslash.ts'/>

// @Filename: externalModuleIntelliSense_file0.ts
////export = express;
////function express(): express.ExpressServer;
////module express {
////    export interface ExpressServer {
////        enable(name: string): ExpressServer;
////        post(path: RegExp, handler: (req: Function) => void): void;
////    }
////    export class ExpressServerRequest {
////    }
////}

// @Filename: externalModuleIntelliSense_file1.ts
///////<reference path='externalModuleIntelliSense_file0.ts'/>
////import express = require('externalModuleIntelliSense_file0');
////var x = express();/*1*/

goTo.marker('1');
verify.numberOfErrorsInCurrentFile(0);
goTo.eof();
edit.insert("x.");
verify.completionListContains('enable');
verify.completionListContains('post');
verify.memberListCount(2);
