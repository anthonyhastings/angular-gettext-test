'use strict';

// Loading dependencies.
var angular = require('angular');

module.exports = angular.module('MyApp', [
    require('angular-gettext').name
]);

module.exports.controller('MyController', require('./controller'));
