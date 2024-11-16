const fs = require('fs')

// reading a file text

const readText = fs.readFileSync('./texts/read.txt','utf-8')


//writting text
const writtenText  = fs.writeFileSync('./texts/write.txt', 'this is my written text')

console.log(writtenText);