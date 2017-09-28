const tap = require('tap');
const fastly = require('../lib/fastly.js');
const fastly_api_key =  process.env.FASTLY_API_KEY || ''

var flib = new fastly(fastly_api_key);

tap.test('fastly constructor', function(t){
	t.type(flib.request, 'object', 'request => object');
	t.type(flib.request.options, 'object', '.options => object');
	t.match(flib.request.options, {
		method: 'GET',
		hostname: 'api.fastly.com',
		path: '/',
		headers: {
			'Fastly-Key': fastly_api_key,
			'Accept': 'application/json'
		}
	}, 'options => match the initial pattern');
	t.type(flib.request.send, 'function', '..send => is function');
	t.type(flib.request.get, 'function', '..get => is function');
	t.type(flib.request.post, 'function', '..post => is function');
	t.type(flib.request.purge, 'function', '..purge => is function');
	t.end();
})

tap.test('utilities', function(t) {
	t.type(flib.content, 'function', '.content() => is function')
		.then((res)=>{
			t.type(res, 'function', '.content().then => return function done.')
		})
		.catch((err)=>{
			t.type(res, 'function', '.content().catch => return function error.')
		})

	t.type(flib.datacenters, 'function', 'datacenters() => is function');
	t.type(flib.docs, 'function', 'docs() => is function');
	t.type(flib.public_ip_list, 'function', 'public_ip_list() => is function');
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
