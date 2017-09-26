const tap = require('tap');
const fastlylib = require('../lib/fastlyJS.js') ;

tap.test('fastly-lib', function(t) {
	var fastly = new fastlylib('fastly-api-key');

	t.type(fastly, 'object', 'Returns an Object');
	t.type(fastly.request, 'function', 'method request, the base request for all methods')
	t.end();
});
