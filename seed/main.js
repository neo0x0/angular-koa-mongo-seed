(function() {
	'use strict';

	angular.module('myApp', ['ngRoute'])

	.config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider) {
		$locationProvider.html5Mode({
		    enabled: true
		});
		$routeProvider
            .when("/", {
                templateUrl: 'view/contact.view.html',
                controller: 'ContactCtrl'
            })
            .when("/view/new", {
                templateUrl: 'view/contact.new.html',
                controller: 'ContactCtrl',
            })
            .when("/view/edit", {
                templateUrl: 'view/contact.edit.html',
                controller: 'ContactCtrl',
            })
   	  		.otherwise({redirectTo: '/'});	    
	}])

	.controller('ContactCtrl', ['$scope', '$http', function ($scope, $http, $location) {
		$http.get('/contact/all').success(function(data) {
		    $scope.contacts = data;
		});

		$scope.openNewContact = function() {
			console.log('new called');
		}

		$scope.openEditContact = function(contact, index) {
			console.log('edit called');
			$scope.contact = contact;
			$scope.contact.pos = index;
		}

		$scope.closeContact = function() {
			console.log('close called');
			$scope.contact = {};
		}

		$scope.getContacts = function() {
			console.log('get called');
		}
		
		$scope.saveContact = function(contact, index) {
			console.log('save called');
			console.log('save check - ', $scope.formData);
			$scope.contacts.push($scope.formData);
		}
		
		$scope.deleteContact = function(contact, index) {
			console.log('delete called');
			console.log('repeat delete - ', contact);
			$scope.contacts.splice(index, 1);     
		}

		$scope.updateContact = function() {
			console.log('update called');
			console.log('update check - ', $scope.formData);
		    $scope.contacts[$scope.contact.pos] = $scope.formData;
			$scope.contact = {};
		}
	}]);
})();
