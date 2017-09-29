const tap = require('tap');
const fastly = require('../lib/fastly.js');
const fastly_api_key =  process.env.FASTLY_API_KEY || '';
const content_url =  process.env.CONTENT_URL || '';

var flib = new fastly(fastly_api_key);

// --> .content(url) --
tap.test('.content()', function(t) {
	t.type(flib.content, 'function', '.content() => is function')
	t.end();
});
tap.test('.content.then()', function(t) {
	flib.content(content_url)
		.then((res)=>{
			t.type(res, 'object', 'return object');
			t.end();
		})
		.catch((err)=>{
			t.fail(err);
			t.end();
		})
});
tap.test('.content.catch()', function(t) {
	flib.content('sorry for the inconveniences, im testing a new library :(')
		.then((res)=> {
			t.fail(res);
			t.end();
		})
		.catch((err)=> {
			t.type(err, 'object', 'return object');
			t.end();
		})
});

