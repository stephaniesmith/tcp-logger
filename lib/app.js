const net = require('net');

const server = net.createServer(client => {
    client.setEncoding('utf8');

    client.on('data', data => {

    });

    client.on('close', () => {

    });

});

module.exports = server;