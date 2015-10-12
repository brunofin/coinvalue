(function(angular) {
    var app = angular.module('History', ['Providers', 'Exchange', 'chart.js']);
    
    app.directive('coinHistory', ['ProvidersDAO', 'CurrencyExchange', function(ProvidersDAO, CurrencyExchange) {
	return {
	    templateUrl: '/partials/coin-history.tmpl.html',
	    link: function($scope) {
		var provider1id = 1,
		    provider2id = 3,
		    provider1,
		    provider2,
		    data1 = [],
		    data2 = [];

		$scope.labels = [];
		$scope.series = ['Mercado Bitcoin BUY', 'Bitstamp SELL'];
		
		$scope.data = [
		    data1, data2
		];
		
		$scope.onClick = function (points, evt) {
		    console.log(points, evt);
		};
		
		$scope.loadData = function() {
		    ProvidersDAO.getHistory(provider1id).success(function(data) {
			provider1 = data;
			
			ProvidersDAO.getHistory(provider2id).success(function(data) {
			    provider2 = data;
			    
			    var l = (provider1.lenght > provider2.length ? provider1.length : provider2.length);
			    
			    for (var i = 0; i < l; i++) {
				var date = new Date(provider1[i].date * 1000),
				    format = function(value) {
				        return parseInt(value) < 10 ? '0' + value : value + '';
				    },
				    day = format(date.getUTCDate()),
				    month = format(date.getUTCMonth()),
				    year = format(date.getUTCFullYear()),
				    hour = format(date.getUTCHours()),
				    minute = format(date.getUTCMinutes()),
				    second = format(date.getUTCSeconds()),
				    string = day + '/' + month + '/' + year + ' ' + hour + ':' + minute + ':' + second + ' UTC';
				
				$scope.labels.push(string);
				data1.push(CurrencyExchange.convert(provider1[i].buy, provider1[i].currency, 'USD', 2));
				data2.push(CurrencyExchange.convert(provider2[i].sell, provider2[i].currency, 'USD', 2));
			    }
			    
			});
		    });
		}
		
		$scope.loadData();
	    }
	}
    }]);
    
})(window.angular)