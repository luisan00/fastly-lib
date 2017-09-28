const tap = require('tap');
const fastly = require('../lib/fastly.js');
const fastly_api_key =  process.env.FASTLY_API_KEY || ''

tap.test('request', function(t){
	var flib = new fastly(fastly_api_key);

	t.type(flib.request, 'object', 'request object');
	t.end();
})

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
	t.type(flib.purge, 'function', 'purge method');
	t.type(flib.purge_all, 'function', 'purge all method');
	t.type(flib.purge_by_key, 'function', 'purge by key method');
	t.type(flib.purge_multiple, 'function', 'purge multiple method');
	t.end();
});
