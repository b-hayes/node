//this is an attempt at compiling vue components without a heavy framework.

const compilerSfc = require("@vue/compiler-sfc")
const { readFile, writeFile } = require('fs').promises
const loader = require("vue-loader")

readFile('./src/HelloWorld.vue', 'utf8').then(function (data) {
    var compiledTemplate = compilerSfc.compileTemplate({
        id: 'HelloWorld',
        source: data
    })
    console.log(compiledTemplate)
    //This appears to work but still have no idea how to use the results in its current form.
    //leaving this here in case there comes a day when it becomes worth figuring out.

    // var compiledScript = compilerSfc.compileScript(data, {
    //     id: 'HelloWorld',
    //     reactivityTransform: {}
    // })
    // console.log(compiledScript)


    //write the compiled content into a native Javascript ES6 Module
    // writeFile('./public/js/HelloWorld.js', compiled.content, 'utf8').then(function () {
    //  //cant get this to work at all.
    // })
})