const validator = require('validator'); //npm package

const getNotes = require('./notes.js');

const msg = getNotes();
console.log(msg);

//console.log(validator.isEmail('example@example.com'));
//console.log(validator.isEmail('example.com'));

console.log(validator.isURL('htpps://www.google.com'));