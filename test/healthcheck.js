const tap = require('tap');
const fastly = require('../lib/fastly.js');
const fastly_api_key = process.env.FASTLY_API_KEY || '';

var flib = new fastly(fastly_api_key);

// method: should return function
tap.test('.healthcheck()', function (t) {
    t.type(flib.healthcheck, 'function', 'return function')
    t.end();
});

// then: should return object
tap.test('.healthcheck.then()', function (t) {
    flib.healthcheck()
        .then((res) => {
            t.type(res, 'object', 'return object');
            t.end();
        })
        .catch((err) => {
            t.fail(err);
            t.end();
        })
});
