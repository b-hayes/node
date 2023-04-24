//last time we used the standard fs functions this time we,
//import the version that returns a promise object instead of asking for a callback function.
const { readFile } = require('fs').promises
const util = require('util'); //to help see what's going on.

//instead of using a call back function we can get a promise.
filePromise = readFile('./hello.txt', 'utf8')
console.log('filePromise:')
console.log(util.inspect(filePromise))

//now we have the option to either, wait for the function to resolve, or use a callback as before.

//adding a callback
filePromise.then(function (txt) {
    console.log(txt)//hello form the text file
})
console.log('hello from the line after defining the callback')

//waiting for the promise to resolve instead
async function getFile() {
    //you won't always have to wrap this inside a function but in this case I have to do it.
    let filePromise = readFile('./hello.txt', 'utf8')
    //the idea is you can send a process off to read the file,
    // do some other things, like perhaps go read other files.
    // and then use await at the time when you actually need to use the files content
    let txt = await filePromise;
    console.log('log after the await:')
    console.log(txt)
    return txt
}

console.log('---------- await test -----------')
//so the annoying thing about this is that await can only be used inside an async function,
// and an async function also returns a promise. So even tho we await the file,
//the following logs will still happen before the file is read.
let txt = getFile().then(function () {
    console.log('so no matter what I still need to define a callback when using promises api.')
})
console.log('log from outside the function:')
console.log(txt)

//Conclusion: await basically shorthand for .then(function (result){ /* do stuff */ })
//  unless you have several awaits inside an async function,
//  this is where it actually becomes useful...
async function doAllTheThings() {
    //Say we want to read a bunch of files.
    // Instead of waiting to read files one by one, we can read them all at once with multiple
    // cpu threads each reading the file as fast as they can.
    // And then at the end we can combine them into a single result.

    //create the promises
    let file1 = readFile('./hello.txt', 'utf8')
    let file2 = readFile('./hello-two.txt', 'utf8')

    //wait for all the promises to resolve
    let results = await Promise.all([file1, file2])

    //do what you need to return the final value
    let processed = results[0] + results[1]

    //and that seems the only useful thing for await.
    // To collect many promises to return a single promise,
    // that will combine the result of the many.

    return processed
}

doAllTheThings().then(function (data) {
    console.log(data)
})
console.log('console.log from the line below the doAllTheThings method call')