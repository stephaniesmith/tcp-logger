const app = require('../lib/app');
const net = require('net');
const assert = require('assert');

describe('E2E', () => {

    const PORT = 15677;

    beforeEach(done => {
        app.listen(PORT, done);
    });

    let client1 = null;
    beforeEach(done => {
        client = net.connect(PORT, () => {
            client.setEncoding('utf8');
            done();
        });
    });

    afterEach(() => {
        app.close();
    });

    afterEach(() => {
        client.destroy();
    });

    it('connection test', done => {
        const message = 'hello world!';

        client.on('data', received => {
            assert(received, message);
            done();
        });

        client.write(message);
    });
});