angular.module('storyTelling')
	.controller('homeController', ['$scope', homeController])

		console.log("Home controller is working")

		function homeController($scope){
		console.log('Here is a story')


		$scope.text ="hello"
		$scope.stories = []
		$scope.users = []

		}