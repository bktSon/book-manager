'use strict';

import app from './app';
import config from './config';

try {
    app.listen(config.port, function () {
        console.log(process.env.NODE_ENV);
        console.log('App listen at port :', config.port);
    });
} catch (err) {
    console.log(err);
}