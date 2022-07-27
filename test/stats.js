const tap = require('tap');
const fastly = require('../lib/fastly.js');
const fastly_api_key = process.env.FASTLY_API_KEY || '';

var flib = new fastly(fastly_api_key);

// method Wno-params: should return function
// then: should return object
tap.test('.stats.then()', function (t) {
    t.type(flib.stats, 'function', 'return function')
    flib.stats()
        .then((res) => {
            t.type(res, 'object', 'return object');
            t.end();
        })
        .catch((err) => {
            t.fail(err);
            t.end();
        })
});

// method W-params: should return function
// then: should return object
tap.test('.stats()', function (t) {
    t.type(flib.stats, 'function', 'return function')
    flib.stats({
        from: 'Yesterday',
        to: 'Today',
        by: 'Hour'
    })
        .then((res) => {
            t.type(res, 'object', 'return object');
            t.end();
        })
        .catch((err) => {
            t.fail(err);
            t.end();
        })
});
