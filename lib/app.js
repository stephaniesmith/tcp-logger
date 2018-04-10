const net = require('net');
// const Clients = require('./Clients');

// const clients = new Clients();

// const server = net.createServer(client => {
//     client.setEncoding('utf8');
//     clients.add(client);

//     client.on('data', data => {
//         const message = data;
//         clients.sendMessage(clients, message);
//     });

//     client.on('close', () => {
//         clients.remove(client);
//     });

// });

module.exports = function(logFilePath /*path to where to write log file */) {
    
    // optional
    // const logger = new Logger(logFile);

    const server = net.createServer(client => {
        client.on('data', data => {
            console.log(data, logFilePath);
        });
    });

    return server;
};