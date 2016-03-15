angular.module('storyTelling')
	.controller('storyController', ['$scope', '$http', '$location', '$rootScope', storyController])

			function storyController($scope, $http, $location, $rootScope){
			console.log('Dis where you enter stury')

			$rootScope.nav = $rootScope.nav || {show:true}
			$rootScope.nav.show = true
			$scope.nav = $rootScope.nav 

			$scope.storySubmit=function(){
				console.log("I am working", $scope.storyForm)
				$http({
					method: 'POST',
					url: '/api/stories',
					data: $scope.storyForm
				}).then(function(returnData){
					if( returnData.data.success) $location.url('/userPage')
				})
			}


		}

