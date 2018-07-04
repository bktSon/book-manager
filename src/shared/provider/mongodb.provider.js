import config from '../../../config/index';
import mongoose from 'mongoose';

export default function (req, res, next) {
    return new Promise((resolve, reject) => {
        mongoose.connect(config.mongo.url, config.mongo.options, (err, connection) => {
            if(err) {
                console.log(err);
                reject(err);
            }
            mongoose.connection = connection;
            req.connection = connection;
            resolve(mongoose);
            next();
        });
    });
}
