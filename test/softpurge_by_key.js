const tap = require('tap');
const fastly = require('../lib/fastly.js');
const fastly_api_key =  process.env.FASTLY_API_KEY || '';
const service_id = process.env.SERVICE_ID || '';
const key_id = process.env.KEY_ID || '';


var flib = new fastly(fastly_api_key);

// --> .softpurge_by_key()
tap.test('.softpurge_by_key()', function(t) {
	t.type(flib.softpurge_by_key, 'function', 'return function')
	t.end();
});
tap.test('.softpurge_by_key.then()', function(t) {
	flib.softpurge_by_key(service_id, key_id)
		.then((res)=>{
			t.type(res, 'object', 'return object');
			t.end();
		})
		.catch((err)=>{
			t.fail(err);
			t.end();
		})
});

