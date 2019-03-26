const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<!DOCTYPE html>
            <head>
                <title>Concha</title>
                <meta name="viewport" content="width=device-width, initial-scale=1">
            </head>
                <body style="width: 100%">
                    <img src="https://media.licdn.com/dms/image/C4D03AQHKlU6BWgG6aA/profile-displayphoto-shrink_100_100/0?e=1555545600&v=beta&t=k9Xo-qi2dwHm-DDNOVoQKKV8bDgwAW5XkyCd9fiNNco" style="width: 300px; height: 300px; display: block; margin: 10% auto" alt="" />
                    <p style="margin: 10px auto">GAY</p>
                </body>
            </html>`);
});

server.listen(port, hostname, () => {
    console.log('Server running at http://' + hostname + ':' + port + '/');
});