# node-ajax
a simple front-end ajax module

## ajax
### ajax.get( url, user_options )
```javascript
@param {String} url
@param {Object} [user_options]
@param {Function} [user_options.abort]
@param {String} [user_options.content-type = application/x-www-form-urlencoded]
@param {Function} [user_options.onreadystatechange]
@param {Function} [user_options.ontimeout]
@param {Function} [user_options.progress]
@param {Number} [user_options.timeout = 7000] in milliseconds
@returns {Promise}
```

### getXhrResponse( xhr )
attempts to get a response from an XMLHttpRequest
```javascript
@param {Object} xhr
@throws {Error}
@returns {String}
```

### ajax.post( url, user_options )
```javascript
@param {String} url
@param {Object} [user_options]
@param {Function} [user_options.abort]
@param {String} [user_options.content-type = application/x-www-form-urlencoded]
@param {String|Object} [user_options.data]
@param {Function} [user_options.onreadystatechange]
@param {Function} [user_options.ontimeout]
@param {Function} [user_options.progress]
@param {Number} [user_options.timeout = 7000] in milliseconds
@returns {Promise}
```
