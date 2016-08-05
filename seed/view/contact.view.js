'use strict';

angular.module('myApp.contacts', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  	$routeProvider.when('/view/all', {
    	templateUrl: 'view/contact.view.html',
    	controller: 'ContactCtrl'
  	});
}])

.controller('ContactCtrl', [function() {
	console.log('contact view called');
}]);