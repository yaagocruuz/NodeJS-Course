const fs = require('fs')
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

// ----------------------------------------------
const buffer = fs.readFileSync('1-json.json')
const dataJSON = buffer.toString()
const user = JSON.parse(dataJSON)
user.name = 'Yago'
user.age = 21

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)