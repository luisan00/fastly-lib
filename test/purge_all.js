const tap = require('tap');
const fastly = require('../lib/fastly.js');
const fastly_api_key =  process.env.FASTLY_API_KEY || '';
const service_id = process.env.SERVICE_ID || '';

var flib = new fastly(fastly_api_key);

// --> .purge_all()
tap.test('.purge_all()', function(t) {
	t.type(flib.purge_all, 'function', 'return function')
	t.end();
});
tap.test('.purge_all.then()', function(t) {
	t.comment('Waiting a response through .then()...')
	flib.purge_all(service_id)
		.then((res)=>{
			t.type(res, 'object', 'return object');
			t.end();
		})
		.catch((err)=>{
			t.fail(err);
			t.end();
		})
});
