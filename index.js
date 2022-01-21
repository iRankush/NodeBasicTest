const triple = require('./triple.js')
const fs = require('fs');
const validator = require('validator')

console.log("Triple me" , triple(10))

// reading file newFile.txt
fs.readFile('./newFile.txt' , 'utf-8' , (err , data) => {
    if (err) throw err

    console.log("I am reading File : " , data)
})


fs.writeFile('./index.html' , '<h2>Hi , writeFile() was created me</h2><p>I want to learn nodeJS</p>' , (err , data) => {
    if(err) throw err

    console.log("File was successFully created")
} )

// checking email address is valid or  note
console.log(validator.isEmail('rank@gmail.com'))