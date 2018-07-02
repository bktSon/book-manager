'use strict';

import boot from './boot';
import app from './app';
import config from './config';

boot(app).then(() => {
    app.listen(config.port, function () {
        console.log(process.env.NODE_ENV);
        console.log('App listen at port :', config.port);
    });
}).catch((err) => {
    console.log(err);
});