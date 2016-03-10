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


//Controllers 
angular.module('storyTelling')
	.controller('homeController', ['$scope', homeController])

angular.module('storyTelling')
	.controller('userController', ['$scope', userController])

angular.module('storyTelling')
	.controller('storyController', ['$scope', '$http', function($scope, $http){
			$scope.storySubmit=function(){

				$http.post('/api/stories', $scope.user)
					.then(function(dataFromServer){
					$scope.stories = dataFromServer.data
					$scope.newStory = {}
				})
	
			}	
	}])
	

angular.module('storyTelling')
	.controller('navbarController', ['$scope', navbarController])


//Functions 

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


