//Node tha modules are different in JS ES6 in the browser.

//Node uses require() but in ES6 uses import/export.

const emptyModule = require('./src/empty-module')//notice that we don't need the file extension here.
console.log(emptyModule);// {}

const moduleOne = require('./src/module-one')
console.log(moduleOne);
