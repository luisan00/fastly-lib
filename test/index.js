const tap = require('tap').test;
const fastlylib = require('../lib/fastlyJS.js') ;

tap('fastly-js', function(test) {
	var fastly = new fastlylib('fastly-api-key');

	test.type(fastly, 'object', 'Returns an Object')
});