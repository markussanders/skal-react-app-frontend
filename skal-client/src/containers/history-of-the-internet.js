const http = require('http');
const port = 3000


const requestHAndler = (request, response) => {
    console.log(request.url)
    if(request.url.match("/about")) {
        response.end('This is the about page')
    } else if (request.url.match('/home')) {
        response.end('This is the home page')
    }
}

const server = http.createServer(requestHAndler);

server.listen(port, (err) => P{
    if (err) {
        return console.log('something badd happend', err)
    }
    console.log(`server is listening on ${port}`)
})