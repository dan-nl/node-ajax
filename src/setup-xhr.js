'use strict';

/**
 * @param {String} url
 *
 * @param {Object} [options]
 * @param {Function} [options.abort]
 * @param {Function} [options.onreadystatechange]
 * @param {Function} [options.ontimeout]
 * @param {Function} [options.progress]
 * @param {Number} [options.timeout = 7000] in milliseconds
 *
 * @param {Function} resolve
 * @param {Function} reject
 *
 * @returns {XMLHttpRequest}
 */
module.exports = function setupXhr( url, options, resolve, reject ) {
  /**
   * @typedef {XMLHttpRequest} xhr
   */
  var xhr;

  xhr = new XMLHttpRequest();

  xhr.ontimeout = function () {
    reject( new Error( 'The request for [ ' + url + ' ] timed out.' ) );
  };

  /**
   * ie 9 doesn’t seem to have an xhr.timeout property
   */
  if ( xhr.timeout ) {
    xhr.timeout = options.timeout;
  }

  xhr.addEventListener( "load", resolve );
  xhr.addEventListener( "error", reject );

  /**
   * options
   */
  if ( !options ) {
    return xhr;
  }

  /**
   * options.onreadystatechange
   */
  if ( options.onreadystatechange instanceof Function ) {
    xhr.onreadystatechange = options.onreadystatechange;
  }

  /**
   * options.timeout
   */
  if ( typeof options.timeout === 'number' && !isNaN( options.timeout ) ) {
    xhr.timeout = options.timeout;
  }

  /**
   * options.ontimeout
   */
  if ( options.ontimeout instanceof Function ) {
    xhr.ontimeout = options.ontimeout;
  }

  /**
   * options.progress
   */
  if ( options.progress instanceof Function ) {
    xhr.addEventListener( "progress", options.progress );
  }

  /**
   * options.abort
   */
  if ( options.abort instanceof Function ) {
    xhr.addEventListener( "abort", options.abort );
  }

  return xhr;
};
