angular.module('storyTelling')
	.controller('loginController', ['$scope', '$http', '$location', '$rootScope', loginController])

	function loginController($scope, $http, $location, $rootScope){
		console.log('Login is working')

		$rootScope.nav.show = true
	
		$scope.signup = function(){
			$http({
				method: 'POST',
				url: '/signup',
				data: $scope.signupForm
			}).then(function(returnData){
				console.log(returnData)
				if( returnData.data.success) $location.url('/userPage')
			})
		}

		$scope.login = function(){
			$http({
				method: 'POST',
				url: '/login',
				data: $scope.loginForm
			}).then(function(returnData){
				console.log(returnData)
				if( returnData.data.success) $location.url('/userPage')
			})
		}
	}