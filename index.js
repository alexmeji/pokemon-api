const http = require('http');
const app = require('./src/app');
const models = require('./src/database/models');

const port = 8080;
const hostname = 'localhost';

/** Create the Server */
const server = http.createServer(app);

models.sequelize.sync()
  .then(() => {
    server.listen(port, hostname, () => {
      console.log(`La aplicación esta escuchando en el puerto: ${server.address().port}`);
    });
  })
  .catch((error) => {
    console.error(error);
    process.exit(0);
  });
