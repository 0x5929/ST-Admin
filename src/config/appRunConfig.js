(function() {

	'use strict';

	module.exports = appRunConfigurationHandler;

	function appRunConfigurationHandler($rootScope, $state, $timeout, $cookies, $http, AuthenticationFactory, modalFactory, toastFactory) {
		//get and set header for csrf token from server for csrf protection
		AuthenticationFactory.csrfProtection();

		AuthenticationFactory.checkLoggedIn().then(
			function(user) {
				$rootScope.currentUser = user;
			},
			function() {
				$rootScope.currentUser = undefined;
			});
	}

}) ();