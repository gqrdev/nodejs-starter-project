import http from "http";

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
	console.log(`Received request: ${req.method} ${req.url}`);
	console.log(`Request headers: ${JSON.stringify(req.headers)}`);
	res.statusCode = 200;
	res.setHeader("Content-Type", "text/plain");
	res.end("Hello, World!\n");
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
