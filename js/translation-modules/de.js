angular.module('gettext').run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
    gettextCatalog.setStrings('de', {"English":"Englisch","French":"Französisch","German":"Deutsche","Hello {{myCtrl.name}}!":"Hallo {{myCtrl.name}}!","There is only {{$count}} boat.":["Es gibt nur {{$count}} Boot.","Es gibt {{$count}} Boote."],"We're testing translations today.":"Wir testen Übersetzungen heute."});
/* jshint +W100 */
}]);