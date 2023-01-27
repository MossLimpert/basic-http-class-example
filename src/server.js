const http = require('http');   // common js require function to import library
const fs = require('fs');       // send files, load them into memeory

// set up port
const port = process.env.PORT || process.env.NODE_PORT || 3000;  // get heroku's 
                            // assigned port for us through environment variable
const index = fs.readFileSync(`${__dirname}/../client/client.html`);

// dont just load them all

// req is everything the user asks for
// response is what we are sending back
const onRequest = (request, response) => {
    //console.log(request.url);
    // head contains metadata 
    response.writeHead(
        200,    // status code
        {       // standardized headers online
            'Content-Type': 'text/html' // value is MIME type type/subtype
        },
    );

    // body contains content
    response.write(index);
    response.end();
}


http.createServer(onRequest).listen(port, () => {
    console.log(`Server running on port ${port}`);
});