const net = require('net');
const Logger = require('./Logger');

const server = net.createServer(client => {

    client.on('data', data => {
        const logger = new Logger('./log.txt');

        const log = logger.log(data);
        client.write(log);
    });
});

module.exports = server;