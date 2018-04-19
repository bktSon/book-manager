const express = require('express');
const app = express();

const port = process.env.port || 3000;

app.get('/', (req, res) => {
    // console.log(process.env);
    let ip = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        (req.connection.socket ? req.connection.socket.remoteAddress : null);
    console.log('IP', ip, 'Port', port);
    res.send('Ip address: ' + ip);
});

app.get('/books', (req, res) => {
    res.json(
        [
            {
                id: 1,
                name: 'knight',
                author: 'sonbkt'
            },
            {
                id: 2,
                name: 'dragon',
                author: 'achiliku'
            },
        ]
    )
});

app.get('/books/:id', (req, res) => {
    res.json(
        {
            id: 1,
            name: 'knight',
            author: 'sonbkt'
        }
    )
});

app.listen(port, () => {
    console.log('App is listen at port', port);
});