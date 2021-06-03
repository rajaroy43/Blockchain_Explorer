'use strict';

var _ = require('lodash');

var ClientError = require('./clienterror');

var errors = {
  PARTNER_ALREADY_EXISTS: 'Partner already exists.',
  PARTNER_NOT_FOUND: 'Partner not found.',
  INCORRECT_PASSWORD: 'Incorrect password.',
};

var errorObjects = _.fromPairs(_.map(errors, function(msg, code) {
    return  [code, new ClientError(code, msg)];
  }));

errorObjects.codes = _.mapValues(errors, function(msg, code) {
   return code;
});

module.exports = errorObjects;
