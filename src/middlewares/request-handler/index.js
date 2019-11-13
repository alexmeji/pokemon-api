const requestLogger = require('./request-logger');

const requestHandler = () => (req, res, next) => {
  requestLogger(req);
  next();
};

module.exports = requestHandler;
