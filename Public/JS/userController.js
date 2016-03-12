angular.module('storyTelling')
	.controller('userController', ['$scope', '$http', userController])

	console.log('Testing user controller')

	function userController($scope, $http){
	console.log('User is working')

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

	