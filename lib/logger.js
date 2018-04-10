

module.exports = class Logger {
    constructor() {
        // this.logfile = logfile;
    }

    log(message) {
        const date = new Date();
        const log = `${date} ** ${message} sent by the client`;
        return log;
    }

};