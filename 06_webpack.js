// configuring webpack
// - npm install webpack webpack-cli --save-dev
// - create an index.js
// - add "build": "webpack" to scripts section of package.json
// - run it with `npm run build`
console.log('no code here just notes')
module.exports = {
    //this is the default but were setting it anyway.
    entry: './src/index.js',    //you can also use and  object with multiple entry points
    output: {
        //this is the interesting part of my config. Normally output will go to a dist folder,
        // but I am shoving into the public html of the repo itself.
        filename: '../public/main.js'
    }
}