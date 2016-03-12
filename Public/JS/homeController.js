angular.module('storyTelling')
	.controller('homeController', ['$scope', '$http', homeController])

		console.log("Home controller is working")

		function homeController($scope, $http){
			console.log('Here is a story')

			$scope.likes = 0
	

			$http.get('/api/stories')
		    .then(function(returnData){
		    	console.log(returnData.data)
		        if(returnData.data.stories){
		            $scope.stories = returnData.data.stories
		        }
		        else {
		            console.log('No user')
		        }
		    })

		    $scope.likes = function(index,story) {
				story.likes++
			}
	}