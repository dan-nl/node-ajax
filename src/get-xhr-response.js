'use strict';

/**
 * attempts to extract a response from an XMLHttpRequestProgressEvent
 *
 * @param {Object} xhr
 * @throws {Error}
 * @returns {String}
 */
module.exports = function getXhrResponse( xhr ) {
  var response;

  if ( !( xhr instanceof Object ) ) {
    throw new Error( 'ajax.extractXhrResponse(): xhr not provided as an Object' );
  }

  // make sure xhr.target exists
  if ( !xhr.target ) {
    throw new Error( 'ajax.extractXhrResponse(): xhr.target does not exist' );
  }

  // ie 9 uses responseText
  if ( xhr.target.response ) {
    response = xhr.target.response;
  } else if ( xhr.target.responseText ) {
    response = xhr.target.responseText;
  }

  // make sure xhr.response exists
  if ( !response ) {
    throw new Error( 'ajax.extractXhrResponse(): could not extract an xhr response' );
  }

  return response;
};
