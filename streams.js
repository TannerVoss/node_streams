// Import or require the fs, path, and http modules
const { createReadStream } = require("fs"); // create readable stream
const { join } = require("path");
const { createServer } = require("http");

const port = 8080;

const server = createServer((req, res) => { // Create a server 
    const { url, method } = req; // and destructure the url and method properties from the request object
    let filePath = "notFound.html";
    let status = 404; 
    if (url === "/" && method === "GET") { //Write a conditional statement that checks the request url for a “GET” request on  “/”
        res.setHeader("Content-Type", "text/html");
        const readStream = createReadStream(join(__dirname, "./index.html")); //If the method and url match the previous check (step c), use createReadStream to pipe the contents of an html file to the client
        readStream.pipe(res);
    } else { //If the method and url are not “/” and “GET”, use the same method to pipe the contents of a 404 not found html page
        res.setHeader("Content-Type", "text/html");
        const readStream = createReadStream(
            join(__dirname, "./notFound.html")
        );
        readStream.pipe(res);
    };
});

server.listen(port, () => console.log("Server is listening"));