const makeLogServer = require('./lib/app');

const PATH = './log.txt';
const PORT = 15666;

const server = makeLogServer(PATH);

server.listen(PORT);