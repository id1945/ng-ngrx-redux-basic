'use strict';
var util = require('util');

module.exports = {
    permissionmatrix: permissionmatrix
};
const matrix = {
    SCREEN_1000: {
        1: 1,
        2: 1,
        9: 1
    }
}

function permissionmatrix(req, res) {
    const data = JSON.stringify(matrix);
    res.json({
        status: 'success',
        data: data
    });
    res.end();
}
