module.exports = class Clients {
    constructor() {
        this.set = new Set();
    }

    add(client) {
        this.set.add(client);
    }

    remove(client) {
        this.set.delete(client);
    }

    sendMessage(client, message) {
        return client => client.write(message);
    }
};