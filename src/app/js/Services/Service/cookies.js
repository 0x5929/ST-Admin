(function() {
	
	'use strict';
	// angular.module('services.cookies', ['ngCookies'])
	// 	.service('cookieService', ['$cookies', cookieServiceHandler]);

		module.exports = cookieServiceHandler;

		function cookieServiceHandler($cookies) {
			
			this.getCookies = function(key) {
				return $cookies.get(key);
			};
			this.removeCookies = function(key) {
				return $cookies.remove(key);
			};
		}
}) ();