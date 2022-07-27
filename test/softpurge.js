const tap = require('tap');
const fastly = require('../lib/fastly.js');
const fastly_api_key =  process.env.FASTLY_API_KEY || '';
const content_url =  process.env.CONTENT_URL || '';

var flib = new fastly(fastly_api_key);

// softpurge
tap.test('.softpurge()', function(t) {
	t.type(flib.softpurge, 'function', 'return function');
	t.end();
});

// softpurge => then
tap.test('.softpurge.then()', function(t) {
	flib.softpurge(content_url)
		.then((res)=>{
			t.type(res, 'string', 'return string');
			t.end();
		})
		.catch((err)=>{
			t.fail(err);
			t.end();
		})
});