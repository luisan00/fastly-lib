const tap = require('tap');
const fastly = require('../lib/fastly.js');

const fastly_api_key =  process.env.FASTLY_API_KEY || '';
const content_url =  process.env.CONTENT_URL || '';
const service_id = process.env.SERVICE_ID || '';
const key_id = process.env.KEY_ID || '';
const key_id2 = process.env.KEY_ID2 || '';


var flib = new fastly(fastly_api_key);

// --> fastly() --
tap.test('fastly constructor', function(t) {
	t.type(flib.request, 'object', 'request => object');
	t.end();
})

// --> .purge()
tap.test('.purge()', function(t) {
	t.type(flib.purge, 'function', 'return function')
	t.end();
});
tap.test('.purge.then()', function(t) {
	t.comment('Waiting a response through .then()...')
	flib.purge(content_url)
		.then((res)=>{
			t.type(res, 'object', 'return object');
			t.end();
		})
		.catch((err)=>{
			t.fail(err);
			t.end();
		})
});

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
// --> .purge_by_key()
tap.test('.purge_by_key()', function(t) {
	t.type(flib.purge_by_key, 'function', 'return function')
	t.end();
});
tap.test('.purge_by_key.then()', function(t) {
	t.comment('Waiting a response through .then()...')
	flib.purge_by_key(service_id, key_id)
		.then((res)=>{
			t.type(res, 'object', 'return object');
			t.end();
		})
		.catch((err)=>{
			t.fail(err);
			t.end();
		})
});

// --> .purge_multiple()
tap.test('.purge_by_key()', function(t) {
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

// --> .softpurge()
tap.test('.softpurge()', function(t) {
	t.type(flib.softpurge, 'function', 'return function')
	t.end();
});
tap.test('.softpurge.then()', function(t) {
	t.comment('Waiting a response through .then()...')
	flib.softpurge(content_url, )
		.then((res)=>{
			t.type(res, 'object', 'return object');
			t.end();
		})
		.catch((err)=>{
			t.fail(err);
			t.end();
		})
});

// --> .softpurge_by_key()
tap.test('.softpurge_by_key()', function(t) {
	t.type(flib.softpurge_by_key, 'function', 'return function')
	t.end();
});
tap.test('.softpurge_by_key.then()', function(t) {
	t.comment('Waiting a response through .then()...')
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

// --> .content(url) --
tap.test('.content()', function(t) {
	t.type(flib.content, 'function', '.content() => is function')
	t.end();
});
tap.test('.content.then()', function(t) {
	t.comment('Waiting a response through .then()')
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
	t.comment('Waiting an error through .catch()')
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

// --> .datacenters() --
tap.test('.datacenters()', function(t) {
	t.type(flib.datacenters, 'function', 'return function')
	t.end();
});
tap.test('.datacenters.then()', function(t) {
	t.comment('Waiting a response through .then()')
	flib.datacenters()
		.then((res)=>{
			t.type(res, 'object', 'return object');
			t.end();
		})
		.catch((err)=>{
			t.fail(err);
			t.end();
		})
});

// --> docs() --
tap.test('.docs()', function(t) {
	t.type(flib.docs, 'function', 'return function')
	t.end();
});
tap.test('.docs.then()', function(t) {
	t.comment('Waiting a response through .then()')
	flib.docs()
		.then((res)=>{
			t.type(res, 'object', 'return object');
			t.end();
		})
		.catch((err)=>{
			t.fail(err);
			t.end();
		})
});

// --> .public_ip_list() --
tap.test('public_ip_list()', function(t) {
	t.type(flib.public_ip_list, 'function', 'return function')
	t.end();
});
tap.test('.public_ip_list.then()', function(t) {
	t.comment('Waiting a response through .then()...')
	flib.public_ip_list()
		.then((res)=>{
			t.type(res, 'object', 'return object');
			t.end();
		})
		.catch((err)=>{
			t.fail(err);
			t.end();
		})
});

