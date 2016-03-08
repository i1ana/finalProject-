angular.module('storyTelling', ['ngRoute'])



angular.module('storyTelling')
	.config(function($routeProvider){


		$routeProvider
			.when('/', {
				templateUrl: '/HTML/index.html',
				controller: 'homeController'
			})
	})

angular.module('storyTelling')
	.controller('homeController', [$scope, homeController])



function storyController($scope){
	console.log('Here is a story')
}