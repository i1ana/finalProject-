angular.module('storyTelling')
	.controller('loginController', ['$scope', '$http', '$location', '$rootScope', loginController])

	function loginController($scope, $http, $location, $rootScope){
		console.log('Login is working')

		$rootScope.nav = $rootScope.nav || {show:true}
		$rootScope.nav.show = true
		$scope.nav = $rootScope.nav 
	
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