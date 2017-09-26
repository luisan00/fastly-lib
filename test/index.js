const tap = require('tap');
const fastly_lib = require('../lib/fastlyJS.js') ;

tap.test('fastly-lib', function(t) {
	var flib = new fastly_lib('fastly-api-key');
	t.type(flib, 'object', 'Returns an Object');
	t.type(flib.request, 'function', 'method request');
	t.type(flib.purge, 'function', 'method purge');
	t.type(flib.purge, 'function', 'method purge_all');
	t.type(flib.stats, 'function', 'method stats');
	t.type(flib.content, 'function', 'method content');
	t.type(flib.datacenters, 'function', 'method datacenters');
	t.end();
});
