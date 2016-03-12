 

angular.module('storyTelling')
	.config(['$routeProvider', function($routeProvider){


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

			.when('/login', {
				templateUrl: '/HTML/login.html',
				controller: 'loginController'
			})

			
	}])


//Controllers 

	

angular.module('storyTelling')
	.controller('navbarController', ['$scope', navbarController])


//Functions 







function navbarController($scope){
	console.log('Navbar nagivating')
}





