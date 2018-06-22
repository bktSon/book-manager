import config from '../../config';
const MongoClient = require('mongodb').MongoClient;

module.exports  = function (req, res, next) {
    MongoClient.connect(config.mongo.url, function (err, client) {
    
        /**
         * If err throw err message
         */
        if(err) {
            throw err;
        }
        
        // req.app.connection = client.db();
        req.app.set('connection', client.db());
        next();
    })
};
