'use strict';

angular.module('myApp.controllers', [])
    .controller('MainCtrl', ['$scope', '$rootScope', '$window', '$location', function ($scope, $rootScope, $window, $location) {
        $scope.slide = '';
        $rootScope.back = function() {
          $scope.slide = 'slide-right';
          $window.history.back();
        }
        $rootScope.go = function(path){
          $scope.slide = 'slide-left';
          $location.url(path);
        }
    }])
    .controller('ShowListCtrl', ['$scope', 'Show', function ($scope, Show) {
        $scope.shows = Show.query();
    }])
    .controller('SessionListCtrl', ['$scope', '$routeParams', 'Session', function ($scope, $routeParams, Session) {
        $scope.sessions = Session.query({showId: $routeParams.showId});
        $scope.showId = $routeParams.showId; // for passing the param easily so no need to query db for the relation
    }])
    .controller('RegistrantListCtrl', ['$scope', '$routeParams', 'Registrant', function ($scope, $routeParams, Registrant) {
        $scope.registrants = Registrant.query({sessionId: $routeParams.sessionId});
        $scope.showId = $routeParams.showId;
    }])
    .controller('RegistrantDetailCtrl', ['$scope', '$routeParams', 'Registrant', function ($scope, $routeParams, Registrant) {
        $scope.registrant = Registrant.get({registrantId: $routeParams.registrantId});
    }]);
