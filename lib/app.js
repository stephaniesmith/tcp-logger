const net = require('net');

const server = net.createServer(client => {

    client.on('data', data => {
        client.write(data);
    });
});

module.exports = server;