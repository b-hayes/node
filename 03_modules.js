//Node tha modules are different in JS ES6 in the browser.

//Node uses require() but in ES6 uses import/export.

const emptyModule = require('./src/empty-module')//notice that we don't need the file extension here.
console.log(emptyModule);// {}

const moduleOne = require('./src/module-one')
console.log(moduleOne);

//at some point you will want to install modules made by other people.
// the command `npm install` can do this for you and you can search the modules available
// at: https://www.npmjs.com/ ir by typing `npm search`