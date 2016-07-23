'use strict';

/**
 * module variables
 */
var getOptions;
var Promise;
var setRequestHeaders;
var setupXhr;

/**
 * module dependencies
 */
getOptions = require( './get-options' );
Promise = require( 'bluebird' );
setRequestHeaders = require( './set-request-headers' );
setupXhr = require( './setup-xhr' );

/**
 * @param {String} url
 *
 * @param {Object} [user_options]
 * @param {Function} [user_options.abort]
 * @param {String} [user_options.content-type = application/x-www-form-urlencoded]
 * @param {Function} [user_options.onreadystatechange]
 * @param {Function} [user_options.ontimeout]
 * @param {Function} [user_options.progress]
 * @param {Number} [user_options.timeout = 7000] in milliseconds
 *
 * @throws {Error}
 * @returns {Promise|undefined}
 */
module.exports = function get( url, user_options ) {
  var options;
  var xhr;

  if ( typeof url !== 'string' ) {
    throw new Error( 'ajax.get(): url not provided as a string' );
  }

  options = getOptions( user_options );

  return new Promise(
    /**
     * @param {Function} resolve
     * @param {Function} reject
     */
    function ( resolve, reject ) {
      xhr = setupXhr( url, options, resolve, reject );
      xhr.open( "GET", url );
      setRequestHeaders( xhr, options );
      xhr.send();
    }
  );
};