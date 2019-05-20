//NPM PACKAGES
const validator = require('validator') //Validates emails, url's, etc
const yargs = require('yargs') //Arguments on terminal
const c = require('chalk') //Color for messages on terminal. 
const chalk = c.default

const log = console.log

log(process.argv)
log(yargs.argv)