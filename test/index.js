const tap = require('tap');
const fastlyjs = require('../lib/fastlyJS.js') ;

tap('fastly-js', function(test) {
	var fastly = new fastlyjs('fastly-api-key')
	test.type(fastly, 'Object', 'Returns an Object')
});