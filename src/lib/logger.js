const winston = require('winston');

module.exports = winston.createLogger({
  levels: winston.config.syslog.levels,
  format: winston.format.json(),
  defaultMeta: {
    app: process.env.APP_NAME || 'pokemon-api',
  },
  silent: process.env.LOGGER_DISABLED || false,
  transports: [
    new winston.transports.Console({
      format: winston.format.json(),
      colorize: true,
    }),
  ],
});
