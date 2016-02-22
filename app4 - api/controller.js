angular.module('apiApp').controller('apiCtrl', function($scope, apiService) {

	$scope.getPokemon = function() {
		apiService.getMorePokemon().then(function(response) {
			// console.log(response);
			$scope.pokemon = response;
		});
	}

})