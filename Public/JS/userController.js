angular.module('storyTelling')
	.controller('userController', ['$scope', '$http', '$rootScope', userController])

	console.log('Testing user controller')

	function userController($scope, $http, $rootScope){
	console.log('User is working')

	$rootScope.nav = $rootScope.nav || {show:true}
	$rootScope.nav.show = true
	$scope.nav = $rootScope.nav 

	$scope.user = []

	// ------ CLIENT (in an angular controller/function) ------ \\
	$http.get('/api/me')
	    .then(function(returnData){
	        if(returnData.data.user){
	            $scope.users = returnData.data.user
	        }
	        else {
	            console.log('No user')
	        }
	    })

	}

	