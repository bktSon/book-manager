'use strict';

export default {
    port: 3000,
    mongo: {
        url: 'mongodb://127.0.0.1:27017/elementary',
        options: {
            reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
            reconnectInterval: 500, // Reconnect every 500ms
            poolSize: 10, // Maintain up to 10 socket connections
            // If not connected, return errors immediately rather than waiting for reconnect
            bufferMaxEntries: 0,
            autoReconnect: true,
            keepAlive: 120,
            useNewUrlParser: true
        }
    }
};