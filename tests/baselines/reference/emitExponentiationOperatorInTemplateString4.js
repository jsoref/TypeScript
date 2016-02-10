//// [emitExponentiationOperatorInTemplateString4.ts]

var t1 = 10;
var t2 = 10;
var s;

// With TemplateTail
`${t1 ** -t2} world`;
`${(-t1) ** t2 - t1} world`;
`${(-++t1) ** t2 - t1} world`;
`${(-t1++) ** t2 - t1} world`;
`${(~t1) ** t2 ** --t1 } world`;
`${typeof (t1 ** t2 ** t1) } world`;

// TempateHead & TemplateTail are empty
`${t1 ** -t2} hello world ${t1 ** -t2}`;
`${(-t1) ** t2 - t1} hello world ${(-t1) ** t2 - t1}`;
`${(-++t1) ** t2 - t1} hello world ${t1 ** (-++t1) **- t1}`;
`${(-t1++) ** t2 - t1} hello world ${t2 ** (-t1++) **  - t1}`;
`${(~t1) ** t2 ** --t1 } hello world ${(~t1) ** t2 ** --t1 }`;
`${typeof (t1 ** t2 ** t1)} hello world ${typeof (t1 ** t2 ** t1)}`;

// With templateHead
`hello ${(-t1) ** t2 - t1}`;
`hello ${(-++t1) ** t2 - t1}`;
`hello ${(-t1++) ** t2 - t1}`;
`hello ${(~t1) ** t2 ** --t1 }`;
`hello ${typeof (t1 ** t2 ** t1)}`;

//// [emitExponentiationOperatorInTemplateString4.js]
var t1 = 10;
var t2 = 10;
var s;
// With TemplateTail
(Math.pow(t1, -t2)) + " world";
(Math.pow((-t1), t2) - t1) + " world";
(Math.pow((-++t1), t2) - t1) + " world";
(Math.pow((-t1++), t2) - t1) + " world";
(Math.pow((~t1), Math.pow(t2, --t1))) + " world";
typeof (Math.pow(t1, Math.pow(t2, t1))) + " world";
// TempateHead & TemplateTail are empty
(Math.pow(t1, -t2)) + " hello world " + (Math.pow(t1, -t2));
(Math.pow((-t1), t2) - t1) + " hello world " + (Math.pow((-t1), t2) - t1);
(Math.pow((-++t1), t2) - t1) + " hello world " + (Math.pow(t1, Math.pow((-++t1), -t1)));
(Math.pow((-t1++), t2) - t1) + " hello world " + (Math.pow(t2, Math.pow((-t1++), -t1)));
(Math.pow((~t1), Math.pow(t2, --t1))) + " hello world " + (Math.pow((~t1), Math.pow(t2, --t1)));
typeof (Math.pow(t1, Math.pow(t2, t1))) + " hello world " + typeof (Math.pow(t1, Math.pow(t2, t1)));
// With templateHead
"hello " + (Math.pow((-t1), t2) - t1);
"hello " + (Math.pow((-++t1), t2) - t1);
"hello " + (Math.pow((-t1++), t2) - t1);
"hello " + (Math.pow((~t1), Math.pow(t2, --t1)));
"hello " + typeof (Math.pow(t1, Math.pow(t2, t1)));
