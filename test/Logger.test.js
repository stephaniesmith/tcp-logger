const assert = require('assert');
const Logger = require('../lib/Logger');

describe('Logger', () => {

    it('takes a message and returns a formatted log', () => {
        const message = 'Hello World!';
        const logger = new Logger();
        const log = logger.log(message);

        const date = new Date();
        const expected = `${date} ** ${message} sent by the client`;
        assert.equal(expected, log);
    });

});