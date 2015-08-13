'use strict';

// Loading dependencies.
var angular = require('angular');
var angularGettext = require('angular-gettext');

// Importing all potential languages (must come after angular-gettext is loaded).
require('../translation-modules/de');
require('../translation-modules/fr');

module.exports = angular.module('MyApp', [
    angularGettext.name
]);

module.exports.controller('MyController', require('./controller'));
module.exports.directive('forceReload', require('./directive'));

/**
 * Checking GET parameters to set a language.
 * Defaults to English if none are found.
 *
 * @ngInject
 */
module.exports.run(function(gettextCatalog, $location) {
    var defaultLanguage = 'en';
    var possibleLanguages = ['en', 'fr', 'de'];
    var searchParameters = $location.search();

    if (!searchParameters.hasOwnProperty('lang')) {
        gettextCatalog.setCurrentLanguage(defaultLanguage);
    } else {
        if (possibleLanguages.indexOf(searchParameters.lang) > -1) {
            gettextCatalog.setCurrentLanguage(searchParameters.lang);
        } else {
            gettextCatalog.setCurrentLanguage(defaultLanguage);
        }
    }
});
