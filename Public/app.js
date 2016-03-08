angular.module('storyTelling', ['ngRoute'])



angular.module('storyTelling')
	.config(function($routeProvider){


		$routeProvider
			.when('/', {
				templateUrl: '/HTML/index.html',
				controller: 'homeController'
			})
			.when('/', { 
				templateUrl: '/HTML/userPage.html',
				controller: 'userController'

			})

			
	})

angular.module('storyTelling')
	.controller('homeController', [$scope, homeController])

angular.module('storyTelling')
	.controller('userController', [$scope, userController])

function homeController($scope){
	console.log('Here is a story')
}

function userController($scope){
	console.log('User is working')
}

