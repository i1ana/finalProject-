angular.module('storyTelling')
	.controller('loginController', ['$scope', '$http', '$location', loginController])

	function loginController($scope, $http, $location){
		console.log('Login is working')
	
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