const validator = require('validator') //npm package
const c = require('chalk')
const chalk = c.default

const getNotes = require('./notes.js')

const msg = getNotes()
console.log(msg)

//console.log(validator.isEmail('example@example.com'))
//console.log(validator.isEmail('example.com'))
//console.log(validator.isURL('https://mead.io'))

const log = console.log

//warning and error
const warningMsg = chalk.black.bgYellowBright
const errorMsg = chalk.bgRedBright.black

//my own theme
//const myTheme = chalk.yellowBright.dim.bold.bgMagenta
//log(myTheme('Testing my own theme'))
//log(chalk.green('Success!'))

//log error msg
log(warningMsg('This is a warning!'));
log(errorMsg('This is a error!'));