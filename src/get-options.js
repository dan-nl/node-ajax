'use strict';

/**
 * @param {Object} [user_options]
 * @param {Function} [user_options.abort]
 * @param {String} [user_options.content-type = application/x-www-form-urlencoded]
 * @param {String|Object} [user_options.data]
 * @param {Function} [user_options.onreadystatechange]
 * @param {Function} [user_options.ontimeout]
 * @param {Function} [user_options.progress]
 * @param {Number} [user_options.timeout = 7000] in milliseconds
 *
 * @throws {Error}
 */
function validateUserOptions( user_options ) {
  if ( !user_options ) {
    return {};
  }

  if ( !( user_options instanceof Object ) ) {
    throw new Error( 'ajax.getOptions.validateUserOptions(): user_options not provided as an Object' );
  }

  if ( typeof user_options[ 'content-type' ] !== 'string' ) {
    throw new Error( 'ajax.getOptions.validateUserOptions(): user_options[content-type] not provided as a String' );
  }

  if ( user_options[ 'content-type' ].indexOf( 'multipart/form-data' ) === -1 ) {
    delete user_options[ 'content-type' ];
  }

  if ( user_options[ 'content-type' ].indexOf( 'boundary' ) === -1 ) {
    delete user_options[ 'content-type' ];
  }

  if ( typeof user_options.timeout !== 'number' || isNaN( user_options.timeout ) ) {
    throw new Error( 'ajax.getOptions.validateUserOptions(): user_options.timeout not provided as a Number' );
  }

  return user_options;
}

/**
 * @param {Object} [user_options]
 * @param {Function} [user_options.abort]
 * @param {String} [user_options.content-type = application/x-www-form-urlencoded]
 * @param {String|Object} [user_options.data]
 * @param {Function} [user_options.onreadystatechange]
 * @param {Function} [user_options.ontimeout]
 * @param {Function} [user_options.progress]
 * @param {Number} [user_options.timeout = 7000] in milliseconds
 *
 * @returns {{}|*}
 */
module.exports = function getOptions( user_options ) {
  var options;

  options = {};
  user_options = validateUserOptions( user_options );

  options.abort = user_options.abort;
  options[ 'content-type' ] = user_options[ 'content-type' ] || 'application/x-www-form-urlencoded';
  options.data = user_options.data;
  options.onreadystatechange = user_options.onreadystatechange;
  options.ontimeout = user_options.ontimeout;
  options.progress = user_options.progress;
  options.timeout = user_options.timeout || ( 7 * 1000 );

  return options;
};
