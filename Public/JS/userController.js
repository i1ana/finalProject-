angular.module('storyTelling')
	.controller('userController', ['$scope', userController])

	console.log("Testing user controller")

	function userController($scope){
	console.log('User is working')

	$scope.user = []

	}

	