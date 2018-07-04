'use strict';
import express from 'express';
import {router} from './src/shared/router';
import connection from './src/shared/provider/mongodb.provider';
import bodyParser from 'body-parser';
import user from './src/elementary/users/user';
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(connection);
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
app.use((req, res, next) => {
    next();
});

app.get('/models', (req, res) => {
    user.create({name: '1231',age: '13', email: 'sonbkt@gmail.com'}).then((rs) => {
        
        console.log(rs);
    });
   
    // mongo().then(async (connection) => {
    //     let Tank = connection.model('Tank', { name: 'string', size: 'string' });
    //     let tank = new Tank({name: 'sonbkt', size: '123'});
    //     let a = await tank.save();
    //     console.log(a);
    // });
    
    
    
    // let Tank = mongo().model('Tank', { name: 'string', size: 'string' });
    
    // console.log(Tank);
    res.send('hello asdsaworld');
    //     let Tank = connection.model('Tank', { name: 'string', size: 'string' });
    //
    //     console.log(Tank);
    //
    //     res.send('hello world');
    //     // let tank = new Tank({name: 'sonbkt', size: '123'});
    //     //
    //     // tank.save().then((rs) => {
    //     //     res.send(rs);
    //     // });
    // });
});

app.get('/',  (req, res) => {
    // let a = req.app.get('connection').collection('createIndexExample1').find({}).toArray();
    // console.log(a);
    res.send('hello world');
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