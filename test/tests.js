const tap = require('tap');
const fastly = require('../lib/fastly.js');

const fastly_api_key = process.env.FASTLY_API_KEY || '';

var flib = new fastly(fastly_api_key);

// --> fastly()
tap.test('fastly constructor', (t) => {
    t.type(flib, 'object', 'fastly => object');
    t.end();
});

// --> fastly()
tap.test('request constructor', (t) => {
    t.type(flib.request, 'object', 'request => object');
    t.end();
});