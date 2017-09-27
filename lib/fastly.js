/**
 * fastly-lib
 * Node.js client to interface with the API fastly
 * @author luisan00
 * @copyright (c) 2017 luisan00 
 */

const request = require('./request');
const qs = require('querystring');

/**
 * [fastly]
 * @param  {String} api_key
 * @return {Object}
 */
var fastly = function(api_key) {
    this.request = new request(api_key);
};

// -- Purging --
/**
 * [purge]
 * @param  {String} url
 * @return {Function}
 */
fastly.prototype.purge = function(url) {
    return this.request.purge('/', JSON.stringify({
        '*': url
    }));
};

/**
 * [purge_all]
 * @param  {String} service_id
 * @return {Function}
 */
fastly.prototype.purge_all = function(service_id) {
    return this.request.post(`/service/${service_id}/purge_all`);
};

/**
 * [purge_by_key]
 * @param  {String} service_id
 * @param  {String} key
 * @return {Function}
 */
fastly.prototype.purge_by_key = function(service_id, key) {
    return this.request.post(`/service/${service_id}/purge/${key}`);
};

/**
 * [purge_multiple]
 * @param  {String} service_id
 * @param  {Array}  keys
 * @return {Function}
 */
fastly.prototype.purge_multiple = function(service_id, keys) {
    return this.request.post(`/service/${service_id}/purge`, JSON.stringify({
        'surrogate_keys': keys
    }));
};

/**
 * [softpurge]
 * @param  {String}
 * @return {Function}
 */
fastly.prototype.softpurge = function(url) {
    this.request.options.headers['Fastly-Soft-Purge'] = 1;
    return this.request.purge('/', JSON.stringify({
        '*': url
    }));
};
/**
 * [softpurge_by_key]
 * @param  {String} service_id
 * @param  {String} key
 * @return {Function}
 */
fastly.prototype.softpurge_by_key = function(service_id, key) {
    this.request.options.headers['Fastly-Soft-Purge'] = 1;
    return this.request.post(`/service/${service_id}/purge/${key}`);
};

// -- Utilities --
/**
 * [content]
 * @param  {String} url
 * @return {Function}
 */
fastly.prototype.content = function(url) {
    return this.request.get(`/content/edge_check?url=${url}`);
};

/**
 * [datacenters]
 * @return {Function}
 */
fastly.prototype.datacenters = function() {
    return this.request.get('/datacenters')
};

/**
 * [docs]
 * @return {Function} 
 */
fastly.prototype.docs = function() {
    return this.request.get('/docs')
};

/**
 * [public_ip_list]
 * @return {Function}
 */
fastly.prototype.public_ip_list = function() {
    return this.request.get('/public-ip-list')
};

module.exports = fastly;