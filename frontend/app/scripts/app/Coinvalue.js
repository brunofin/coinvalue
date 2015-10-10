(function(angular) {
    var app = angular.module('Coinvalue', ['Providers']);
    
    app.controller('teste', ['$scope', 'ProvidersDAO', function($scope, ProvidersDAO) {
	$scope.providers = null;
	
	ProvidersDAO.list().success(function(data) {
	    $scope.providers = (data);
	});
    }]);
})(window.angular);