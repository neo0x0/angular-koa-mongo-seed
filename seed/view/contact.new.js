'use strict';

angular.module('myApp.new', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view/new', {
        templateUrl: 'view/contact.new.html',
        controller: 'ContactCtrl'
    });
}])

.controller('ContactCtrl', [function() {
	console.log('new contact called');
}]);