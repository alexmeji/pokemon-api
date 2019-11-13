const logger = require('../../lib/logger');

const requestLogger = (req) => {
  logger.info({
    ip: req.ip,
    method: req.method,
    path: req.originalUrl,
  });
};

module.exports = requestLogger;
