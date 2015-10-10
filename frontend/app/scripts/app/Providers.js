(function(angular) {
    var app = angular.module('Providers', []);
    
    app.service('ProvidersDAO', ['$http', function($http) {
	var ProvidersDAO = {
	    list: function() {
		return $http({
		    method: 'GET',
		    url: '/api/providers'
		});
	    },
	    
	    get: function(id) {
		return $http({
		    method: 'GET',
		    url: '/api/providers/' + api
		});
	    }
	}
	
	return ProvidersDAO;
    }]);
    
})(window.angular);