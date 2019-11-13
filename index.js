const http = require('http');
const app = require('./src/app');
const models = require('./src/database/models');
const logger = require('./src/lib/logger');

const port = 8080;
const hostname = 'localhost';

/** Create the Server */
const server = http.createServer(app);

models.sequelize.sync()
  .then(() => {
    server.listen(port, hostname, () => {
      logger.info(`La aplicación esta escuchando en el puerto: ${server.address().port}`);
    });
  })
  .catch((error) => {
    logger.error(error);
    process.exit(0);
  });
