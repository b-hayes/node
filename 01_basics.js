global.hello = 'hello world'
console.log(global.hello)

//events
process.on('exit', function () {
    //the exit event will be emitted at the end of this script.
    console.log('Exit event happened.')
})

//event emitter
const { EventEmitter } = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('lunch', function () {
    console.log('Lunch time!')
})

eventEmitter.emit('lunch')

//file system (using var instead of const because I am replacing it later, dont do this normally).
var { readFile, readFileSync } = require('fs')
const util = require("util");

//file system && sync functions
//sync meaning synchronous, node will wait for them before executing the next line of code
let txt = readFileSync('./hello.txt', 'utf8');
console.log(txt)
console.log('hello from the next line after reading the file.')

//most functions are asynchronous by default, they will let node continue and run a callback when they are finished.
readFile('./hello.txt', 'utf8', function (error, txt) {
    console.log(txt)
})
console.log('hello from the next line after reading the file asynchronously.')

process.on('exit', function (){
    console.log('THanks for coming. Now you should run the file promise example.')
})
