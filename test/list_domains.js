const tap = require('tap');
const fastly = require('../lib/fastly.js');
const fastly_api_key = process.env.FASTLY_API_KEY || '';


var flib = new fastly(fastly_api_key);

/**
 * fastly.content() is a function
 */
tap.test('.list_domains()', function(t) {
    t.type(flib.list_domains, 'function', 'is function')
    t.end();
});

/**
 * fastly.content() if no errors
 * will return an object.
 */
tap.test('if no errors', function(t) {
    flib.list_domains()
        .then((res) => {
            t.type(res, 'object', 'is object');
            t.end();
        })
        .catch((err) => {
            t.fail(err);
            t.end();
        })
});

/**
 * fastly.content() in case of errors
 * will return an object.
 */
tap.test('if errors', function(t) {
    var flib = new fastly('wrong_key');
    flib.list_domains()
        .then((res) => {
            t.fail(res);
            t.end();
        })
        .catch((err) => {
            t.type(err, 'object', 'is object');
            t.end();
        })
});