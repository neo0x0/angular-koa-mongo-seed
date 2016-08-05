'use strict';

angular.module('myApp.edit', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  	$routeProvider.when('/view/edit', {
  	  	templateUrl: 'view/contact.edit.html',
    	controller: 'ContactCtrl'
  	});
}])

.controller('ContactCtrl', [function() {
	console.log('edit contact called');
}]);