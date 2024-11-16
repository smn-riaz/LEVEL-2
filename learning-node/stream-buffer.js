const http = require("http");
const fs = require("fs");
const { buffer } = require("stream/consumers");

// creating a server using raw node.js
const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/read-file" && req.method === "GET") ;
const readableStream = fs.createReadStream(process.cwd()+'/texts/read.txt')

readableStream.on('data', (buffer) => {
    res.statusCode = 200
    res.write(buffer)
})

readableStream.on('end', () => {
  res.end("The streaming is over") 
})

readableStream.on('error', (error) => {
    console.log(error);
    res.end("Something went wrong")
})
 
});

server.listen((5000), () => {
  console.log(`SERVER is listening 5000`);
});
