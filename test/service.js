const tap = require('tap');
const fastly = require('../lib/fastly.js');
const fastly_api_key =  process.env.FASTLY_API_KEY || '';

var flib = new fastly(fastly_api_key);

// service
tap.test('.service()', function(t) {
	t.type(flib.purge, 'function', 'return function')
	t.end();
});

// service => then, catch
tap.test('.service.then()', function(t) {
	flib.service()
		.then((res)=>{
			t.type(res, 'object', 'return object');
			t.end();
		})
		.catch((err)=>{
			t.fail(err);
			t.end();
		})
});