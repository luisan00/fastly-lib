const tap = require('tap');
const fastly = require('../lib/fastly.js');


const fastly_api_key =  process.env.FASTLY_API_KEY || '';
const content_url =  process.env.CONTENT_URL || '';


var flib = new fastly(fastly_api_key);

tap.test('fastly constructor', function(t){
	t.type(flib.request, 'object', 'request => object');
	t.type(flib.request.options, 'object', '.options => object');
	t.match(flib.request.options, {
		method: 'GET',
		hostname: 'api.fastly.com',
		path: '/',
		headers: {
			'Fastly-Key': fastly_api_key,
			'Accept': 'application/json'
		}
	}, 'options => match the initial pattern');
	t.type(flib.request.send, 'function', '..send => is function');
	t.type(flib.request.get, 'function', '..get => is function');
	t.type(flib.request.post, 'function', '..post => is function');
	t.type(flib.request.purge, 'function', '..purge => is function');
	t.end();
})

tap.test('function content', function(t) {
	var flib = new fastly(fastly_api_key);
	t.type(flib.content, 'function', '.content() => is function')
	t.end();
});

tap.test('...content.then()', function(t) {
	var flib = new fastly(fastly_api_key);
	//
	t.comment('Executing function: content')
	t.comment('Waiting a response through .then()...')
	flib.content(content_url)
		.then((res)=>{
			t.type(res, 'object', '..then() => is object');
			t.end();
		})
		.catch((err)=>{
			t.fail(err);
			t.end();
		})
});

tap.test('...content.catch()', function(t) {
	var flib = new fastly(fastly_api_key);
	//
	t.comment('Executing function: content')
	t.comment('Waiting an error through .catch()')
	flib.content('sorry for the inconveniences, im testing a new library :(')
		.then((res)=> {
			t.fail(res);
			t.end();
		})
		.catch((err)=> {
			t.type(err, 'object', '..catch() => is object');
			t.end();
		})
});


tap.test('purge', function(t) {

	var flib = new fastly(fastly_api_key);

	t.type(flib, 'object', 'constructor');
	t.type(flib.purge, 'function', 'purge method');
	t.type(flib.purge_all, 'function', 'purge all method');
	t.type(flib.purge_by_key, 'function', 'purge by key method');
	t.type(flib.purge_multiple, 'function', 'purge multiple method');
	t.end();
});
