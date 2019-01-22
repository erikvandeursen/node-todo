const http = require('http');
const app = require('../src/server/app');

let server = http.createServer(app);

const port = 3000;

server.listen(port, () => {
	console.log('Server running on ' + port);
});