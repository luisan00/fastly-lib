const tap = require('tap');
const fastly = require('../lib/fastly.js');
const fastly_api_key =  process.env.FASTLY_API_KEY || '';
const content_url =  process.env.CONTENT_URL || '';

var flib = new fastly(fastly_api_key);

// --> .purge()
tap.test('.purge()', function(t) {
	t.type(flib.purge, 'function', 'return function')
	t.end();
});
tap.test('.purge.then()', function(t) {
	t.comment('Waiting a response through .then()...')
	flib.purge(content_url)
		.then((res)=>{
			t.type(res, 'object', 'return object');
			t.end();
		})
		.catch((err)=>{
			t.fail(err);
			t.end();
		})
});
