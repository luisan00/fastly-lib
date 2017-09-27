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

keeping in mind the above structure, the only change between methods is the parameter or parameters, for example:

```js
fastly.purge('http://example.url/path/to/resource')
	// .then() and .catch() returns the result or error of the call
	...
```


### API

<table>
	<tr>
		<th>Method</th>
		<th>Params</th>
	</tr>
	<tr>
		<td>.purge(url)</td>
		<td>url: String</td>
	</tr>
	<tr>
		<td>.purge_all(service_id)</td>
		<td>service_id: String</td>
	</tr>
	<tr>
		<td>.purge_by_key(service_id, key)</td>
		<td>service_id: String, key: String</td>
	</tr>
	<tr>
		<td>.purge_multiple(service_id, keys)</td>
		<td>service_id: String, keys: Array of Strings</td>
	</tr>
	<tr>
		<td>.softpurge(url)</td>
		<td>url: String</td>
	</tr>
	<tr>
		<td>.softpurge_by_key(service_id, key)</td>
		<td>service_id: String, key: String</td>
	</tr>
	<tr>
		<td colspan="2"></td>
	</tr>
	<tr>
		<td>.content(url)</td>
		<td>url: String</td>
	</tr>
	<tr>
		<td>
			<code>.datacenters()</code>
		</td>
		<td>---</td>
	</tr>
	<tr>
		<td>
			<code>.docs()</code>
		</td>
		<td>---</td>
	</tr>
	<tr>
		<td>
			<code>.public_ip_list()<code>
		</td>
		<td></td>
	</tr>

</table>



### License

fastly-lib is licensed under the <a href="LICENSE">MIT License</a> © 2017 luisan00
