angular.module('storyTelling', ['ngRoute'])



angular.module('storyTelling')
	.config(function($routeProvider){


		$routeProvider
			.when('/', {
				templateUrl: '/HTML/index.html',
				controller: 'homeController'
			})
			.when('/userPage', { 
				templateUrl: '/HTML/userPage.html',
				controller: 'userController'

			})
			.when('/storySubmit', {
				templateUrl: '/HTML/storySubmit.html',
				controller: 'storyController'
			})

			.when('/navbar', {
				templateUrl: '/HTML/navbar.html',
				controller: 'navbarController'
			})

			
	})

angular.module('storyTelling')
	.controller('homeController', ['$scope', homeController])

angular.module('storyTelling')
	.controller('userController', ['$scope', userController])

angular.module('storyTelling')
	.controller('storyController', ['$scope', storyController])

angular.module('storyTelling')
	.controller('navbarController', ['$scope', navbarController])

function homeController($scope){
	console.log('Here is a story')
}

function userController($scope){
	console.log('User is working')
}

function storyController($scope){
	console.log('Dis where you enter stury')
}

function navbarController($scope){
	console.log('Navbar nagivating')
}
