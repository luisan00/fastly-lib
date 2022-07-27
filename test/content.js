const tap = require('tap');
const fastly = require('../lib/fastly.js');
const fastly_api_key = process.env.FASTLY_API_KEY || '';
const content_url = process.env.CONTENT_URL || '';

var flib = new fastly(fastly_api_key);

// method: should be function
tap.test('.content()', function(t) {
    t.type(flib.content, 'function', 'is function')
    t.end();
});

// then: should return object
tap.test('if no errors', function(t) {
    flib.content(content_url)
        .then((res) => {
            t.type(res, 'object', 'return object');
            t.end();
        })
        .catch((err) => {
            t.fail(err);
            t.end();
        })
});

// then: should return
tap.test('if errors', function(t) {
    flib.content('sorry for the inconveniences, im testing a new library :(')
        .then((res) => {
            t.fail(res);
            t.end();
        })
        .catch((err) => {
            t.type(err, 'object', 'return object');
            t.end();
        })
});
