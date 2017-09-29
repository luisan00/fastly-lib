const tap = require('tap');
const fastly = require('../lib/fastly.js');
const fastly_api_key =  process.env.FASTLY_API_KEY || '';

var flib = new fastly(fastly_api_key);

// --> .public_ip_list() --
tap.test('public_ip_list()', function(t) {
	t.type(flib.public_ip_list, 'function', 'return function')
	t.end();
});
tap.test('.public_ip_list.then()', function(t) {
	t.comment('Waiting a response through .then()...')
	flib.public_ip_list()
		.then((res)=>{
			t.type(res, 'object', 'return object');
			t.end();
		})
		.catch((err)=>{
			t.fail(err);
			t.end();
		})
});
