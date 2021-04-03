const http = require('http');


// Create a server with the HTTP variable
const server = http.createServer(function(req, res){
    //Header
    res.writeHead(200, { 'Content-Type': 'text/html' });

    //send back some information
    res.end(`
        <html>
            <body>
                <h1>Hi, You're welcome to my first HTML Webpage</h1>
                <p>Let's make progress!</p>
            </body>
    
        </html>
    `);
});

//create a port
server.listen(3000, '127.0.0.1');

console.log("Yes boss, you have created a server!");