const tap = require('tap');
const fastly = require('../lib/fastly.js');
const content_url = process.env.CONTENT_URL || '';
const service_id = process.env.SERVICE_ID || '';
const fastly_api_key = process.env.FASTLY_API_KEY || '';

var flib = new fastly(fastly_api_key);

tap.test('request', (t) => {
    t.type(flib.request, 'object', 'it exposes an object');
    t.type(flib.request.send, 'function', 'method exists');
    t.type(flib.request.get, 'function', 'method exists');
    t.type(flib.request.post, 'function', 'method exists');
    t.type(flib.request.purge, 'function', 'method exists');
    t.type(flib.request.delete, 'function', 'method exists');
    t.end();
});
