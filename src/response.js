const http = require('http');   // common js require function to import library
const fs = require('fs');       // send files, load them into memeory

// set up port
const port = process.env.PORT || process.env.NODE_PORT || 3000;  // get heroku's 
                            // assigned port for us through environment variable

// read client html into memory
// normally dont run sync code like this --- it slows down the server
// this runs on server start before the server is operational
const index = fs.readFileSync(`${__dirname}/../client/client.html`);
//const client2 = fs.readFileSync(`${__dirname}/../client/client.html`);

// dont just load them all

// req is everything the user asks for
// response is what we are sending back to the user
const onRequest = (request, response) => {
    //console.log(request.url)
    if (request.url === '/' ) {
        // head contains metadata 
        // must have 'Content-Type': for HTML request/responses
        response.writeHead(
            200,    // status code
            {       // standardized headers online
                'Content-Type': 'text/html' // value is MIME type type/subtype
            },
        );
        response.write(index);
        response.end()
    } else {
        response.writeHead(200, {
            'Content-Type:': 'text/html'
        });
        // body contains content
        response.write(index);
        response.end(client2);
    }
    
}

module.exports = {
    onRequest
}