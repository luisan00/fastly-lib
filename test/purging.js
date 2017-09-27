const tap = require('tap');
const fastly = require('../lib/fastly.js') ;
const fastly_api_key =  process.env.FASTLY_API_KEY || ''

tap.test('purge', function(t) {

	var flib = new fastly(fastly_api_key);

	t.type(flib, 'object', 'constructor');
	t.end();
});
