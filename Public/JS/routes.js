 angular.module('storyTelling')
	.config(['$routeProvider', function($routeProvider){


		$routeProvider
			.when('/', {
				templateUrl: '/HTML/landingPage.html',
				controller: 'landingController'
			})
			.when('/index', {
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
	.controller('landingController', ['$scope', '$rootScope', landingController])


//Functions 

function landingController($scope, $rootScope){

	$rootScope.nav = $rootScope.nav || {show:false}
	$rootScope.nav.show = false
	$scope.nav = $rootScope.nav 
	console.log('The site has landed')
}


