const tap = require('tap');
const fastly = require('../lib/fastly.js');
const fastly_api_key =  process.env.FASTLY_API_KEY || '';
const content_url =  process.env.CONTENT_URL || '';

var flib = new fastly(fastly_api_key);

// .purge()
tap.test('.purge()', function(t) {
	t.type(flib.purge, 'function', 'return function')
	t.end();
});

// .purge() => then()
tap.test('.purge.then()', function(t) {
	flib.purge(content_url)
		.then((res)=>{
			t.type(res, 'string', 'return string');
			t.end();
		})
		.catch((err)=>{
			t.fail(err);
			t.end();
		})
});
