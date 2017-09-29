/**
 * base request for all available methods
 */
const https = require('https');
const querystring = require('querystring');


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

request.prototype.get = function(path) {
    this.options.method = 'GET';
    this.options.path = path;
    return this.send();
};

request.prototype.post = function(path, body) {
    this.body = body || '';
    this.options.method = 'POST';
    this.options.path = path || '/';
    this.options.headers['Content-Type'] = 'application/json';
    this.options.headers['Content-Length'] = Buffer.byteLength(this.body);
    return this.send();
};

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