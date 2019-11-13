const errorLogger = require('./error-logger');
const errorTransformer = require('./error-transformer');

// eslint-disable-next-line no-unused-vars
const errorHandler = () => (error, req, res, next) => {
  const { statusCode, payload } = errorTransformer(error);
  errorLogger(req, error);
  res.status(statusCode).json(payload);
};

module.exports = errorHandler;
