'use strict';

var createError = require('errno').create;

var SUQAcoreNodeError = createError('SUQAcoreNodeError');

var RPCError = createError('RPCError', SUQAcoreNodeError);

module.exports = {
  Error: SUQAcoreNodeError,
  RPCError: RPCError
};
