/**
 * fastly-lib
 * Node.js client to interface with the API fastly
 * @author luisan00
 * @copyright (c) 2017 luisan00 
 */

const https = require('https');
const querystring = require('querystring');

/**
 * request
 * @param  {String} api_key
 */
var request = function(api_key) {
    this.options = {};
    this.options.method = 'GET';
    this.options.hostname = 'api.fastly.com';
    this.options.path = '/';
    this.options.timeout = 6000;
    this.options.headers = {
        'Fastly-Key': api_key,
        'Accept': 'application/json'
    };
}

/**
 * send is the base method for all requests.
 * @return {Object}
 */
request.prototype.send = function() {
    var self = this;
    return new Promise(function(resolve, reject) {
        var data = '';
        const req = https.request(self.options, (res) => {
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                if (
                    res.headers['content-type'] === 'application/json;charset=utf-8' ||
                    res.headers['content-type'] === 'application/json'
                ) {
                    resolve(JSON.parse(data));
                } else {
                    resolve(data);
                }
            });
        });
        req.on('error', (err) => {
            reject(err);
        });
        if (self.body) {
            req.write(self.body, 'utf8', () => {
                req.end();
            });
        } else {
            req.end();
        }

    });
};

/**
 * request by GET method
 * @param  {String} path
 * @return {function}
 */
request.prototype.get = function(path) {
    this.options.method = 'GET';
    this.options.path = path;
    return this.send();
};

/**
 * request by POST method
 * @param  {[type]} path
 * @param  {Object} body
 * @return {function}
 */
request.prototype.post = function(path, body) {
    this.body = body || '';
    this.options.method = 'POST';
    this.options.path = path || '/';
    this.options.headers['Content-Type'] = 'application/json';
    this.options.headers['Content-Length'] = Buffer.byteLength(this.body);
    return this.send();
};

/**
 * request by PURGE method
 * @param  {String} path
 * @param  {Object} body
 * @return {function}
 */
request.prototype.purge = function(path, body) {
    this.body = body || '';
    this.options.method = 'PURGE';
    this.options.path = path || '/';
    this.options.headers['Content-Type'] = 'application/json';
    this.options.headers['Content-Length'] = Buffer.byteLength(this.body);
    this.send();
    return this.send();
};

module.exports = request;