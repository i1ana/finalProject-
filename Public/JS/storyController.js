angular.module('storyTelling')
	.controller('storyController', ['$scope', '$http', '$location', storyController])

			function storyController($scope, $http, $location){
			console.log('Dis where you enter stury')

			$scope.storySubmit=function(){
				console.log($scope.storyForm)
				$http({
					method: 'POST',
					url: '/api/stories',
					data: $scope.storyForm
				}).then(function(returnData){
					if( returnData.data.success) $location.url('/userPage')
				})
			}

		

			// $scope.date = function() {
			// 	var d = new Date()
			// 	d.getFullYear()
			// 	return d
			// }


		}

