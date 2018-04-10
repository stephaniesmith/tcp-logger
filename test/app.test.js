// const app = require('../lib/app');
const server = require('../server');
const net = require('net');
const assert = require('assert');

describe('E2E', () => {

    const PORT = 15678;

    let client = null;
    beforeEach(done => {
        client = net.connect(PORT, () => {
            client.setEncoding('utf8');
            done();
        });
    });

    afterEach(() => {
        server.close();
    });

    afterEach(() => {
        client.destroy();
    });

    it.only('test someting...', done => {
        const message = 'I said some stuff!';
        const date = new Date();
        const loggedMessage = `\n ${date} ** ${message} sent by the client`;
        client.on('data', received => {
            assert.equal(received, loggedMessage);
            done();
        });
        client.write(message);
    });
});