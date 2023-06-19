const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

const server = app.listen(8000, () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log(server.address());
    console.log(`Server is rining on http://${host}:${port}`);
});



/*
const http = require('http');
const fs = require('fs').promises;

const host = 'localhost';
const port = 8000;

const requestListener = function(req, res) {
	fs.readFile(__dirname + "/index.html")
		.then(contents => {
			res.setHeader("Content-Type", "text/html");
			res.writeHead(200);
			res.end(contents);
		})
		.catch(err => {
			res.writeHead(500);
			res.end(err);
			return;
		});
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
	console.log(`Server is running on http://${host}:${port}`)
});*/
