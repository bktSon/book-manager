'use strict';
import express from 'express';
import {router} from './src/shared/router';
import connection from './src/shared/provider/mongodb.provider';
import responseFormatMiddleWare from './src/shared/middleware/app/response-format.middleware';
import bodyParser from 'body-parser';
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(connection);
app.use(responseFormatMiddleWare);
app.use(router);

// app.get('/', (req, res) => {
//     // console.log(process.env);
//     let ip = req.headers['x-forwarded-for'] ||
//         req.connection.remoteAddress ||
//         req.socket.remoteAddress ||
//         (req.connection.socket ? req.connection.socket.remoteAddress : null);
//     console.log('IP', ip, 'Port', port);
//     res.send('Ip address: ' + ip);
// });

//

app.get('/models', (req, res) => {
    res.send('111');
});

app.get('/',  (req, res) => {
    res.json({message: 'hello world'});
});

app.get('/1', (req, res) => {
    res.send('now you see me !');
});

app.use(function (err, req, res, next) {
    if(err) {
        console.log(err);
        err.message = (err.message) ? (err.message) : 'OOps something wrong !';
        err.status = (err.status) ? (err.status) : 'failed';
        err.code = (err.code) ? (err.code) : 400;
        res.send(err);
    } else {
        res.status(500).send({code: 500, message: 'Something broke!'});
    }
    next();
});

export default app;