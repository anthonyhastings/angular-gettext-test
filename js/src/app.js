'use strict';

// Loading dependencies.
var angular = require('angular');
require('angular-gettext');

module.exports = angular.module('MyApp', [
    angular.module('gettext').name
]);

module.exports.controller('MyController', require('./controller'));
