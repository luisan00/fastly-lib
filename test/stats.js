const tap = require('tap');
const fastly = require('../lib/fastly.js');
const fastly_api_key =  process.env.FASTLY_API_KEY || '';

var flib = new fastly(fastly_api_key);

// --> .stats() no params
tap.test('.stats()', function(t) {
	t.type(flib.stats, 'function', 'return function')
	t.end();
});
tap.test('.stats.then()', function(t) {
	flib.stats()
		.then((res)=>{
			t.type(res, 'object', 'return object');
			t.end();
		})
		.catch((err)=>{
			t.fail(err);
			t.end();
		})
});
