//// [awaitBindingElement24.ts]
declare class Promise<T> {
    constructor(init: (resolve: (value?: T | IPromise<T>) => void, reject: (reason?: any) => void) => void);
    then<TResult>(onfulfilled?: (value: T) => TResult | IPromise<TResult>, onrejected?: (reason: any) => TResult | IPromise<TResult>): Promise<TResult>;
}
declare var a: number;
declare var ar: number[];
declare var pa: Promise<number>;
declare var par: Promise<number[]>;
async function func(): Promise<void> {
  var [ x = a ] = ar;
}


//// [awaitBindingElement24.js]
function func() {
    return new Promise(function (_resolve) {
        _resolve(__awaiter(__generator(function (_state) {
            _a = ar[0], x = _a === void 0 ? a : _a;
            return [2 /*return*/];
        })));
    });
    var _a, x;
}