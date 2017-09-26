const tap = require('tap');
const fastlylib = require('../lib/fastlyJS.js') ;

tap.test('fastly-lib', function(test) {
	var fastly = new fastlylib('fastly-api-key');

	test.type(fastly, 'object', 'Returns an Object');
	test.end();
});
