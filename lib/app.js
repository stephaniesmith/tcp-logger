const net = require('net');
const Logger = require('./Logger');

module.exports = function(logFilePath) {
    const server = net.createServer(client => {
    
        client.on('data', data => {
            const logger = new Logger(logFilePath);
    
            const log = logger.log(data);
            client.write(log);
        });
    });

    return server;
};