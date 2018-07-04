import _ from 'lodash';

export default function (req, res, next) {
    
    res.sendJson = function (data) {
    
        res.status = 200;

        if(_.isEmpty(data)) {
            data = null;
        }
        
        res.json({code: 200, data: data});
    };
    
    res.sendError = function (err) {
        if(! err.code) {
            err.code = 'ERR9999';
        }
        
        if(! err.message) {
            err.message = 'message not defined';
        }
        res.json(err);
    };
    next();
}