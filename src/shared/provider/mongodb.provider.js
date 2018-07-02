import config from '../../../config/index';
import {MongoClient} from 'mongodb';

export default function (req, res, next) {
    MongoClient.connect(config.mongo.url, function (err, client) {
    
        /**
         * If err throw err message
         */
        if(err) {
            console.log(err);
            throw err;
        }
        
        req.app.set('connection', client.db());
        next();
    });
}
