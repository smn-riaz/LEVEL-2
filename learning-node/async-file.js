const fs = require('fs')


//reading text asychronously

fs.readFile('./texts/read.txt','utf-8',(err,data) => {
    if(err) {
        throw Error("Error reading text")
    }
    console.log(data);

    //writting text asynchronously
    const writtenFile = fs.writeFile('./texts/read-async.txt',data,'utf-8', (err) => {
        if(err){
            throw Error("This is Error writing data")
        }
    })
})