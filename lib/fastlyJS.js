'use strict;'
/**
 * fastly-js 
 * Node.js client to interface with the API fastly
 * @author luisan00
 * @copyright (c) 2017 luisan00 
 */

const https = require('https');
const {
    URL,
    URLSearchParams
} = require('url');
const querystring = require('querystring');

var fastly = function(API_Key) {
    this.options = {
        method: 'GET',
        hostname: 'api.fastly.com',
        path: '/',
        headers: {
            'Fastly-Key': API_Key,
            'Accept': 'application/json'
        }
    };
};

fastly.prototype.request = function(method, path, params) {
    var self = this;
    if (method && path) {
        try {
            this.options.method = method;
            this.options.path = path + '?' + querystring.stringify(params) || path;
        } catch (e) {
            return Promise.reject(e)
        }
    }
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
            try {
                req.write(self.body)
                req.end();
            } catch (e) {
                req.end();
                reject({
                    'error': e.message
                });
            }
        }
        req.end();
    });
};

// purging section
fastly.prototype.purge = function(element) {
    this.options.method = 'PURGE'
    try {
        this.options.path = '/';
        this.body = JSON.stringify({
            '*': element
        })
        this.options.headers['Content-Type'] = 'application/json';
        this.options.headers['Content-Length'] = Buffer.byteLength(this.body);
        return this.request();
    } catch (e) {
        return Promise.reject(e)
    }
};
// Stats section

fastly.prototype.stats = function(params) {
    this.options.method = 'GET';
    try {
        this.options.path = '/stats' + '?' + querystring.stringify(params) || '/stats';
        return this.request()
    } catch (e) {
        return Promise.reject(e)
    }
};

// Utils section

/**
 * Retrieve headers and MD5 hash of the content
 * for a particular URL from each Fastly edge server
 * @param  {String} url Full URL to check on all nodes.
 * @return {Object}     
 */
fastly.prototype.content = function(url) {
    this.options.method = 'GET';
    var query = {
        url: url
    }
    try {
        this.options.path = '/content/edge_check' + '?' + querystring.stringify(query);
        return this.request()
    } catch (e) {
        return Promise.reject(e)
    }
};

/**
 * Get a list of all Fastly datacenters.
 * @return {Object} 
 */
fastly.prototype.datacenters = function(){
    this.options.method = 'GET';
    this.options.path = '/datacenters'
    return this.request()
};

module.exports = fastly;

