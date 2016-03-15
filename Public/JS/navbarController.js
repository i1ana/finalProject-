angular.module('storyTelling')
	.controller('navbarController', ['$scope', '$http', '$rootScope', navbarController])

	function navbarController($scope, $http, $rootScope){
	console.log('Navbar nagivating')

	$rootScope.nav = $rootScope.nav || {show:true}
	$rootScope.nav.show = true
	$scope.nav = $rootScope.nav 

	$scope.searchIt = function(){
		$http.post('/search', {
			searchTerm: $scope.search.term
		}).then(function(returnData){
			console.log(returnData)
			$scope.searchResults = returnData.data
			
		})
	}


	


}