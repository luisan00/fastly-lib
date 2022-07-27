const tap = require('tap');
const fastly = require('../lib/fastly.js');
const fastly_api_key =  process.env.FASTLY_API_KEY || '';

var flib = new fastly(fastly_api_key);

// method: should be function
tap.test('.datacenters()', function(t) {
	t.type(flib.datacenters, 'function', 'return function')
	t.end();
});

// then: should return object
tap.test('.datacenters.then()', function(t) {
	flib.datacenters()
		.then((res)=>{
			t.type(res, 'object', 'return object');
			t.end();
		})
		.catch((err)=>{
			t.fail(err);
			t.end();
		})
});
