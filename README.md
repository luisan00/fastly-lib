# fastly-lib
Dependencies-free client to interface with the API Fastly for Node.js.

[![NPM](https://nodei.co/npm/fastly-lib.png)](https://nodei.co/npm/fastly-lib/)


[![Build Status](https://travis-ci.org/luisan00/fastly-lib.svg?branch=master)](https://travis-ci.org/luisan00/fastly-lib)

### Requirements
Node.js >= 6.x.x

### Installing
The simplest method is to use npm in your source code folder
```bash
npm install fastly-lib
```
Or if you want to add it in your package.json, type:
```bash
npm install fastly-lib --save
```
### Usage

Firstly and before to use the client, i strongly recommend reading the documentation about the <a target="_blank" href="https://docs.fastly.com/api/">Fastly API</a>

```js
// constructor
const fastlyLib = require('fastly-lib');
// create an instance.
const fastly = new fastlyLib('your_api_key');
// get a list of Fastly datacenters.
fastly.datacenters()
  .then((res) => {
    // do something with the response.
    console.log(res);
  })
  .catch((err) => {
    // or something in case of errors.
    console.log(err);
  })
```

### API

	* purge
	* purge_all
	* purge_by_key
	* purge_multiple
	* softpurge
	* softpurge_by_key


### License

fastly-lib is licensed under the <a href="LICENSE">MIT License</a> © 2017 luisan00
