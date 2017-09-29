const tap = require('tap');
const fastly = require('../lib/fastly.js');
const fastly_api_key =  process.env.FASTLY_API_KEY || '';
const service_id = process.env.SERVICE_ID || '';
const key_id = process.env.KEY_ID || '';
const key_id2 = process.env.KEY_ID2 || '';

var flib = new fastly(fastly_api_key);

// --> .purge_multiple()
tap.test('.purge_multiple()', function(t) {
	t.type(flib.purge_multiple, 'function', 'return function')
	t.end();
});
tap.test('.purge_multiple.then()', function(t) {
	t.comment('Waiting a response through .then()...')
	flib.purge_multiple(service_id, [key_id, key_id2])
		.then((res)=>{
			t.type(res, 'object', 'return object');
			t.end();
		})
		.catch((err)=>{
			t.fail(err);
			t.end();
		})
});
