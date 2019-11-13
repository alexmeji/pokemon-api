const logger = require('../../lib/logger');

const errorLogger = (req, error) => {
  logger.error('Error procesando la siguiente petición');
  logger.error({
    ip: req.ip,
    method: req.method,
    path: req.originalUrl,
  });
  logger.error(error.stack || error);
};

module.exports = errorLogger;
