const fs = require('fs');

module.exports = class Logger {
    constructor(fileName) {
        this.logfile = fileName;
    }

    log(message) {
        const date = new Date();
        const log = `\n ${date} ** ${message} sent by the client`;

        fs.appendFile('./lib/log.txt', log);

        return log; 
    }
};