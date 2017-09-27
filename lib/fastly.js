/**
 * fastly-lib
 * Node.js client to interface with the API fastly
 * @author luisan00
 * @copyright (c) 2017 luisan00 
 */

const request = require('./request');
const qs = require('querystring');

var fastly = function(api_key) {
    this.request = new request(api_key);
};

// -- Purging --
/**
 * [purge]
 * @param  {[type]} url [description]
 * @return {[type]}     [description]
 */
fastly.prototype.purge = function(url) {
    return this.request.purge('/', {
        '*': url
    });
};

/**
 * [purge_all]
 * @param  {[type]} service_id [description]
 * @return {[type]}            [description]
 */
fastly.prototype.purge_all = function(service_id) {
    return this.request.post(`/service/${service_id}/purge_all`);
};

/**
 * [purge_by_key]
 * @param  {[type]} service_id [description]
 * @param  {[type]} key        [description]
 * @return {[type]}            [description]
 */
fastly.prototype.purge_by_key = function(service_id, key) {
    return this.request.post(`/service/${service_id}/purge/${key}`);
};

/**
 * [purge_multiple]
 * @param  {[type]} service_id [description]
 * @param  {[type]} keys       [description]
 * @return {[type]}            [description]
 */
fastly.prototype.purge_multiple = function(service_id, keys) {
    return this.request.post(`/service/${service_id}/purge`, {
        'surrogate_keys': keys
    });
};

/**
 * [softpurge]
 * @param  {[type]} url [description]
 * @return {[type]}     [description]
 */
fastly.prototype.softpurge = function(url) {
    this.request.options.headers['Fastly-Soft-Purge'] = 1;
    return this.request.post('/', {
        '*': url
    })
};
/**
 * [softpurge_by_key]
 * @param  {[type]} service_id [description]
 * @param  {[type]} key        [description]
 * @return {[type]}            [description]
 */
fastly.prototype.softpurge_by_key = function(service_id, key) {
    this.request.options.headers['Fastly-Soft-Purge'] = 1;
    return this.request.post(`/service/${service_id}/purge/${key}`);
};

// -- Utilities --
/**
 * [content]
 * @param  {String} url
 * @return {Object}
 */
fastly.prototype.content = function(url) {
    return this.request.get(`/content/edge_check?url=${url}`);
};

/**
 * [datacenters]
 * @return {Object}
 */
fastly.prototype.datacenters = function() {
    return this.request.get('/datacenters')
};

/**
 * [docs]
 * @return {Object} 
 */
fastly.prototype.docs = function() {
    return this.request.get('/docs')
};

/**
 * [public_ip_list]
 * @return {Object}
 */
fastly.prototype.public_ip_list = function() {
    return this.request.get('/public-ip-list')
};

module.exports = fastly;