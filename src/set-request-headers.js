'use strict';

/**
 * must be set after open, but before send
 *
 * @param {XMLHttpRequest} xhr
 * @param {Object} options
 */
module.exports = function setRequestHeaders( xhr, options ) {
  xhr.setRequestHeader( 'Content-Type', options[ 'content-type' ] );
};
