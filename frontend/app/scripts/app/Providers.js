(function(angular) {
    var app = angular.module('Providers', []);
    
    app.service('ProvidersDAO', ['$http', function($http) {
	var base = 'http://localhost:8000';
	
	var ProvidersDAO = {
	    list: function() {
		return $http({
		    method: 'GET',
		    url: base + '/api/providers'
		});
	    },
	    
	    get: function(id) {
		return $http({
		    method: 'GET',
		    url: base + '/api/providers/' + api
		});
	    },
	    
	    getHistory: function(providerId, historyId) {
		if (historyId != null || historyId != undefined) {
		    return $http({
			method: 'GET',
			url: base + '/api/providers/' + providerId + '/history/' + historyId
		    });
		} else {
		    return $http({
			method: 'GET',
			url: base + '/api/providers/' + providerId + '/history'
		    });
		}
	    }
	}
	
	return ProvidersDAO;
    }]);
    
})(window.angular);