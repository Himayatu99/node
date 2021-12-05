const fs = require("fs");

// Reading file 

fs.readFile("notes.json", "utf-8", (erro, data) => {
    if (erro) {
        console.log("Err....")
    }
    else {
        const notes = JSON.parse(data)
        console.log(notes)
    }
})

// write File

fs.writeFile("text.txt", "Welcome to all views.......", (err) => {
    if (err) {
        console.log("Err ocure....")
    }
    else {
        console.log("successful write.......")
    }
})

// append method used for add text

fs.appendFile("text.txt", "line number second.....", (errr) => {
    if (errr) {
        console.log("Errorr.....")
    }
    else {
        console.log("Added the text...")
    }
})

//Rename file

fs.rename('text.txt', 'test.txt', function test(err) {
    if (err) {
        console.log("Errrrr")
    }
    else {
        console.log("Successfuly rename")
    }
})

//Delete File

fs.unlink("test.txt", function lm(errr) {
    if (errr) {
        console.log("Error")
    }
    else {
        console.log("Deleted .....")
    }
})