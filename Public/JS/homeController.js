angular.module('storyTelling')
	.controller('homeController', ['$scope', '$http', '$rootScope', homeController])

		console.log("Home controller is working")

		function homeController($scope, $http, $rootScope){
			console.log('Here is a story')

			$scope.likes = 0
		
				$rootScope.nav = $rootScope.nav || {show:true}
				$rootScope.nav.show = true
				$scope.nav = $rootScope.nav 

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

			//Responsive Voice 

			$scope.talkMethod = function(story){
				responsiveVoice.speak(story.body, "UK English Male")
			}



	}