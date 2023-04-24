//this is an attempt as using Vue JS components without any framework.

const compilerSfc = require("@vue/compiler-sfc")
const { readFile, writeFile } = require('fs').promises

readFile('./src/HelloWorld.vue', 'utf8').then(function (data) {
    var compiledTemplate = compilerSfc.compileTemplate({
        id: 'HelloWorld',
        source: data
    })
    console.log(compiledTemplate)

    var compiledScript = compilerSfc.compileScript(data, {
        id: 'HelloWorld',
        reactivityTransform: {}
    })
    console.log(compiledScript)

    //write the compiled content into a native Javascript ES6 Module
    // writeFile('./public/js/HelloWorld.js', compiled.content, 'utf8').then(function () {
    //
    // })
})