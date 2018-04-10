const assert = require('assert');
const fs = require('fs');
const Logger = require('../lib/Logger');

describe('Logger', () => {    

    const logger = new Logger('./log.txt');

    it('takes a message and returns a formatted log', () => {
        const message = 'Hello World!';
        const log = logger.log(message);

        const date = new Date();
        const expected = `${date} ** ${message} sent by the client \n`;
        assert.equal(expected, log);
    });

    it('check the file path', () => {
        const loggedFile = fs.readFileSync(`./lib/${logger.logfile}`);

        const expected = fs.readFileSync('./lib/log.txt');
        assert.deepEqual(expected, loggedFile);
    });

});