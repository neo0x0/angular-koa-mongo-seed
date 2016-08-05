(function() {

	var app = angular.module('myApp');

	app.directive('contactCard', function() {
		return {
			scope: {
				contact: '=',
				edit: '&',
				del: '&',
				index: '='
			},
			templateUrl: 'view/contact.card.html'			
		};
	});
})();