const logger = require("../../logger");

const loggerResponse = ({ type, message, res }) => {
    if (type === "error") {
        logger.error(message, res);
    } else {
        logger.info(message);
    }
}

module.exports = {
    loggerResponse
}