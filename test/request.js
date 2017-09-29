const tap = require('tap');
const fastly = require('../lib/fastly.js');

const fastly_api_key = process.env.FASTLY_API_KEY || '';

var flib = new fastly(fastly_api_key);

// --> .request()
tap.test('request object', (t) => {
    t.type(flib.request, 'object', 'request => object');
    const request = new flib.request(fastly_api_key);
    t.message(request);
    t.end();

});

