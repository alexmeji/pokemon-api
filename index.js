const http = require('http');
const app = require('./src/app');

const port = 8080;
const hostname = 'localhost';

/** Create the Server */
const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`La aplicación esta escuchando en el puerto: ${server.address().port}`);
});
