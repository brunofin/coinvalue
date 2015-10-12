(function(angular) {
    var app = angular.module('Exchange', []);
    
    app.service('CurrencyExchange', [function() {
	var CurrencyExchange = {
	    convert: function(value, from, to, precision) {
		var exchangeRate = 0,
		    exchanged = 0;
		
		if (from.toUpperCase() == to.toUpperCase()) {
		    exchangeRate = 1;
		} else {
		    exchangeRate = 0.265601; // BRL to USD as of 12/10/2015. yep...
		}
		exchanged = value * exchangeRate;
		exchanged = exchanged.toFixed(precision);
		
		console.log(value +  ' in ' + from + ' is ' + exchanged + ' in ' + to + '.');
		
		return exchanged;
	    }
	};
	
	return CurrencyExchange;
    }]);
    
})(window.angular)
