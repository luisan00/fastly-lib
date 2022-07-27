const tap = require('tap');
const fastly = require('../lib/fastly.js');
const fastly_api_key =  process.env.FASTLY_API_KEY || '';

var flib = new fastly(fastly_api_key);

// method: should be function
tap.test('.docs()', function(t) {
	t.type(flib.docs, 'function', 'return function')
	t.end();
});
// then: should return object
tap.test('.docs.then()', function(t) {
	flib.docs()
		.then((res)=>{
			t.type(res, 'object', 'return object');
			t.end();
		})
		.catch((err)=>{
			t.fail(err);
			t.end();
		})
});
