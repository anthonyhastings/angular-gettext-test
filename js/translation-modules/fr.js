angular.module('gettext').run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
    gettextCatalog.setStrings('fr', {"English":"Anglais","French":"Français","German":"Allemand","Hello {{myCtrl.name}}!":"Bonjour {{myCtrl.name}}!","There is only {{$count}} boat.":["Il ya seulement {{$count}} bateau.","Il ya {{$count}} bateaux."],"We're testing translations today.":"Nous testons aujourd'hui traductions."});
/* jshint +W100 */
}]);