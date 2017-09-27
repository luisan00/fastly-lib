const tap = require('tap');
const fastly = require('../lib/fastly.js') ;

tap.test('utilities', function(t) {

	var flib = new fastly('fastly-api-key');

	t.type(flib, 'object', 'constructor');
	t.type(flib.content, 'function', 'method content');
	t.type(flib.datacenters, 'function', 'method datacenters');
	t.type(flib.docs, 'function', 'method docs');
	t.type(flib.public_ip_list, 'function', 'method public_ip_list');
	t.end();
});
