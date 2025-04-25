const buildDevLogger = require('./developmentLogger');
const buildProdLogger = require('./productionLogger');

let logger;
if (process.env.NODE_ENV === 'development') {
    logger = buildDevLogger();
} else {
    logger = buildProdLogger();
}

module.exports = logger;
