'use strict';

angular.module('myApp', [
    'ngTouch',
    'ngRoute',
    'ngAnimate',
    'myApp.controllers',
    'myApp.memoryServices'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/shows', {templateUrl: 'partials/show-list.html', controller: 'ShowListCtrl'});
    $routeProvider.when('/shows/:showId', {templateUrl: 'partials/session-list.html', controller: 'SessionListCtrl'});
    $routeProvider.when('/shows/:showId/session/:sessionId', {templateUrl: 'partials/registrant-list.html', controller: 'RegistrantListCtrl'});
    $routeProvider.when('/shows/:showId/session/:sessionId/registrant/:registrantId', {templateUrl: 'partials/registrant-detail.html', controller: 'RegistrantDetailCtrl'});
    // xxxx maybe in registrant details can retrieve other info, like all other registered shows (by ICFIN)
    // xxx or for groups, show the master record
    $routeProvider.otherwise({redirectTo: '/shows'});
}]);

/**
 * doesnt work with ng1.5, just stick with 1.2 branch for now
 *
 */