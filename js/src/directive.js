'use strict';

/**
 * @ngInject
 */
module.exports = function() {
    return {
        restrict: 'A',
        link: function(scope, element) {
            /**
             * Clicking the element will update the hashbang
             * then force a page refresh.
             *
             * @param {Object} event - DOM Event.
             */
            element.on('click', function(event) {
                event.preventDefault();
                window.location.hash = element[0].getAttribute('href');
                window.location.reload();
            });
        }
    };
};
