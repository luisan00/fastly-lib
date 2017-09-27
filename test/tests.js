const tap = require('tap');
const fastly = require('../lib/fastly.js');
const fastly_api_key =  process.env.FASTLY_API_KEY || ''

tap.test('utilities', function(t) {

	var flib = new fastly(fastly_api_key);

	t.type(flib, 'object', 'constructor');
	t.type(flib.content, 'function', 'method content');
	t.type(flib.datacenters, 'function', 'method datacenters');
	t.type(flib.docs, 'function', 'method docs');
	t.type(flib.public_ip_list, 'function', 'method public_ip_list');
	t.end();
});


tap.test('purge', function(t) {

	var flib = new fastly(fastly_api_key);

	t.type(flib, 'object', 'constructor');
	t.end();
});

