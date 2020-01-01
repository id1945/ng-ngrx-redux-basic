'use strict';
var util = require('util');

module.exports = {
    error400: error400,
    error401: error401
};

function error400(req, res) {
    res.status(400);
    res.json({
        status: 'fail',
        data: {
            file: 'ERROR00001'
        }
    });
    res.end();
}

function error401(req, res) {
    res.status(401);
    res.json({
        status: 'error',
        message: 'ERROR00002'
    });
    res.end();
}
