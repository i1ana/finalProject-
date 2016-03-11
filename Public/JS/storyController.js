angular.module('storyTelling')
	.controller('storyController', ['$scope', '$http', 'storyController', function($scope, $http, storyController){
			console.log('Testing')

			function storyController($scope){
			console.log('Dis where you enter stury')


			$scope.date = 0


			$scope.storySubmit=function(){

				$http.post('/api/stories', $scope.user)
					.then(function(dataFromServer){
					$scope.stories = dataFromServer.data
					$scope.newStory = {}
				})
	
			}	

			$scope.date = function() {
				var d = new Date()
				d.getFullYear()
				return d
			}


		}
	}])

