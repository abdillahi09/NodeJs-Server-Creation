const http = require('http');

const hostname = '127.0.0.1'
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.write('<h1 style="color:blue; background:lightgrey;text-align:center;margin-top:100px;font-size:3em;">Server is Up and Running! Congratulations!!</h1>');
    res.end();
})

server.listen(port, hostname, () => {
    console.log('Server started on port ' + port);
});