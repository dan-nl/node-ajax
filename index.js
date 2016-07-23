'use strict';

/**
 * module variables
 */
var ajax;

/**
 * variable assignments
 */
ajax = {};

ajax.get = require( './src/get' );
ajax.getXhrResponse = require( './src/get-xhr-response' );
ajax.post = require( './src/post' );

module.exports = ajax;
