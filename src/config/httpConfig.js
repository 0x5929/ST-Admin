(function() {

	'use strict';

	module.exports = httpConfiguration;

	function httpConfiguration($httpProvider) {		//	handling rejection from server b/c unauthorized, etc..
		$httpProvider.interceptors.push(function($q, $injector) {
			return {
				responseError: function(rejection) {
					if (rejection.status === 401){
						console.log('hello world from httpConfiguration', rejection);
						$injector.get('$state').transitionTo('Home');
						return $q.reject(rejection);
					}
					else
						return $q.reject(rejection);
				}
			};
		});
	}

}) ();