'use strict';
import express from 'express';
import {router} from './shared/router';
import connection from './shared/provider/mongodb.provider';
const app = express();

app.use(router);
app.use(connection);

// app.get('/', (req, res) => {
//     // console.log(process.env);
//     let ip = req.headers['x-forwarded-for'] ||
//         req.connection.remoteAddress ||
//         req.socket.remoteAddress ||
//         (req.connection.socket ? req.connection.socket.remoteAddress : null);
//     console.log('IP', ip, 'Port', port);
//     res.send('Ip address: ' + ip);
// });

app.get('/',  (req, res) => {
    // let a = req.app.get('connection').collection('createIndexExample1').find({}).toArray();
    // console.log(a);
    res.send('hello world');
});

app.get('/haha', (req, res) => {
    res.send('now you see me !')
})

app.use(function (err, req, res, next) {
    if(err) {
        console.log(err);
        err.message = (err.message) ? (err.message) : "OOps something wrong !";
        err.status = (err.status) ? (err.status) : 'failed';
        err.code = (err.code) ? (err.code) : 400;
        res.send(err)
    } else {
        res.status(500).send({code: 500, message: 'Something broke!'});
    }
    next();
});

export default app;