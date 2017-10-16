# fastly-lib
Dependencies-free client to interface with the Fastly API.

[![NPM](https://nodei.co/npm/fastly-lib.png)](https://nodei.co/npm/fastly-lib/)


[![Build Status](https://travis-ci.org/luisan00/fastly-lib.svg?branch=master)](https://travis-ci.org/luisan00/fastly-lib)

### Requirements
Node.js >= 4.8.4

### Installing
The simplest method is to use npm in your source code folder
```bash
npm install fastly-lib
```
### Usage

Firstly and before to use the client, i strongly recommend reading the documentation about the <a target="_blank" href="https://docs.fastly.com/api/">Fastly API</a> and our <a href="https://github.com/luisan00/fastly-lib/wiki">WiKi</a> for a detailed description of each library method.

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
#### Extras
<table>
	<tr>
		<th>Method</th>
		<th>Params</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>.list_domains()</td>
		<td>None</td>
		<td>List of all domains associated with a Fastly account <a href="https://github.com/luisan00/fastly-lib/wiki/Extras#list_domains">[more]</a>.</td>
	</tr>
</table>

#### Fastly API
**fastly-lib** also provides access to Fastly API functions through the following methods.

<table>
	<tr>
		<th>Method</th>
		<th>Params</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>.domains(service_id, version)</td>
		<td>service_id: String, version: Number</td>
		<td><a href="">link</a></td>
	</tr>
	<tr>
		<td>.service()</td>
		<td>None</td>
		<td><a href="">link</a></td>
	</tr>
	<tr>
		<td>.versions(service_id)</td>
		<td>service_id: String</td>
		<td><a href="https://docs.fastly.com/api/config#version_dfde9093f4eb0aa2497bbfd1d9415987">link</a></td>
	</tr>
</table>

**Purging**

<table>
	<tr>
		<td>.purge(URL)</td>
		<td>URL: String</td>
		<td>Purge an individual URL <a href="https://docs.fastly.com/api/purge#purge_3aa1d66ee81dbfed0b03deed0fa16a9a">[more]</a>.</td>
	</tr>
	<tr>
		<td>.purge_all(service_id)</td>
		<td>service_id: String</td>
		<td><a href="https://docs.fastly.com/api/purge#purge_bee5ed1a0cfd541e8b9f970a44718546">link</a></td>
	</tr>
	<tr>
		<td>.purge_by_key(service_id, key)</td>
		<td>service_id: String, key: String</td>
		<td><a href="https://docs.fastly.com/api/purge#purge_d8b8e8be84c350dd92492453a3df3230">link</a></td>
	</tr>
	<tr>
		<td>.purge_multiple(service_id, keys)</td>
		<td>service_id: String, keys: Array of Strings</td>
		<td><a href="https://docs.fastly.com/api/purge#purge_db35b293f8a724717fcf25628d713583">link</a></td>
	</tr>
	<tr>
		<td>.softpurge(url)</td>
		<td>url: String</td>
		<td><a href="https://docs.fastly.com/api/purge#soft_purge_0c4f56f3d68e9bed44fb8b638b78ea36">link</a></td>
	</tr>
	<tr>
		<td>.softpurge_by_key(service_id, key)</td>
		<td>service_id: String, key: String</td>
		<td><a href="https://docs.fastly.com/api/purge#soft_purge_2e4d29085640127739f8467f27a5b549">link</a></td>
	</tr>
</table>

**Utilities**

<table>
	<tr>
		<td>.content(URL)</td>
		<td>URL: String</td>
		<td><a href="https://docs.fastly.com/api/tools#content_4d2d4548b29c7661e17ebe7098872d6d">[?]</a></td>
	</tr>
	<tr>
		<td>.datacenters()</td>
		<td>None</td>
		<td><a href="https://docs.fastly.com/api/tools#datacenter_1c8d3b9dd035e301155b44eae05e0554">[?]</a></td>
	</tr>
	<tr>
		<td>.docs()</td>
		<td>None</td>
		<td>Gets all the Fastly API documentation. <a href="https://docs.fastly.com/api/tools#docs_79aecbf210c8163e20e2222a5c646453">[?]</a></td>
	</tr>
	<tr>
		<td>.public_ip_list()</td>
		<td>None</td>
		<td>Return the list of public IP addresses for the Fastly network. <a href="https://docs.fastly.com/api/tools#public_ip_list_ef2e9900a1c9522b58f5abed92ec785e">[?]</a></td>
	</tr>

</table>

### Contributing
 I'll be happy to hear your ideas or fix some bug. Please feel free to send me a message or create a new <a href="https://github.com/luisan00/fastly-lib/issues">issue</a>


### License

fastly-lib is licensed under the <a href="LICENSE">MIT License</a> © 2017 luisan00
