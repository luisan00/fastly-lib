const tap = require('tap');
const fastly = require('../lib/fastly.js');
const fastly_api_key =  process.env.FASTLY_API_KEY || '';
const service_id = process.env.SERVICE_ID || '';

var flib = new fastly(fastly_api_key);

// --> .versions()
tap.test('.versions()', function(t) {
	t.type(flib.versions, 'function', 'return function')
	t.end();
});
tap.test('.versions.then()', function(t) {
	flib.versions(service_id)
		.then((res) => {
			t.type(res, 'object', 'return object');
			t.end();
		})
		.catch((err)=>{
			t.fail(err);
			t.end();
		})
});
