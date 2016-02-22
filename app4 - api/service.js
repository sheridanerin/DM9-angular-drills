angular.module('apiApp').service('apiService', function($http, $q) {

	var baseUrl = 'http://pokeapi.co/api/v2/';

	this.getMorePokemon = function() {
		// return $http.get(baseUrl + 'pokemon/')
		// 	.then(function(response) {
		// 		return response;
		// 	})
		// 	.catch(function(err) {
		// 		console.error(err);
		// 	});

		var deferred = $q.defer();

		$http.get(baseUrl + 'pokemon/')
			.then(function(response) {
				deferred.resolve(response);
			})
			.catch(function(err) {
				console.error(err);
			})
				
		return deferred.promise;
	}


});