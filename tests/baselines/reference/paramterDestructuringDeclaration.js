//// [prameterDestructuringDeclaration.ts]

interface C {
    ({p: name}): any;
    new ({p: boolean}): any;
}


//// [paramterDestructuringDeclaration.js]


//// [paramterDestructuringDeclaration.d.ts]
interface C {
    ({p: name}: {
        p: any;
    }): any;
    new ({p: boolean}: {
        p: any;
    }): any;
}
