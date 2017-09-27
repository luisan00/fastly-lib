/**
 * 
 */
const request = require('./request');
const querystring = require('querystring');

var fastly = function(api_key){
	this.request = new request(api_key);
}



// --SECTION UTILITIES--

fastly.prototype.datacenters = function(){
	return this.request.get('/datacenters')
};
fastly.prototype.docs = function(){
	return this.request.get('/docs')
};


module.exports = fastly;