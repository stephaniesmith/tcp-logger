const net = require('net');
const Logger = require('./Logger');

const server = net.createServer(client => {

    client.on('data', data => {
        // 12/4/2018 Tasha: I said some stuff!
        //Logger.createLog(data)
        const logger = new Logger();

        const log = logger.log(data);
        client.write(log);
    });

    // clinet.on('close', () => {
    //write the new log to a txt file.
    // })
});

module.exports = server;