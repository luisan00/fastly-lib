const tap = require('tap');
const fastly = require('../lib/fastly.js');
const fastly_api_key =  process.env.FASTLY_API_KEY || '';

var flib = new fastly(fastly_api_key);

// domains
tap.test('.domains()', function(t) {
	t.type(flib.domains, 'function', 'return function')
	t.end();
});
// domains => then, catch
tap.test('.datacenters.then()', function(t) {
	flib.domains()
		.then((res)=>{
			t.type(res, 'object', 'return object');
			t.end();
		})
		.catch((err)=>{
			t.fail(err);
			t.end();
		})
});
