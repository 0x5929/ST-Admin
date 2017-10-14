(function() {
	'use strict';
	// angular.module('services.ajaxService', [])
	// 	.service('ajaxService', ['$http', '$q', ajaxServiceHandler]);

		module.exports = ajaxServiceHandler;

		function ajaxServiceHandler($http, $q) {


			//	for development purposes, call backend server api
			var backendAPI = 'http://localhost:8080';

			this.get = function(route, configObj) {
				var deferred = $q.defer();
				if (configObj){
					$http.get(backendAPI + route, configObj)
						.then(function(success) {
							deferred.resolve(success);
						}, 
						function(failure) {
							deferred.reject(failure);
						});
				}else{
					$http.get(route)
						.then(function(success) {
							deferred.resolve(success);
						}, 
						function(failure) {
							deferred.reject(failure);
						});
				}
				return deferred.promise;
			};
			
			this.post = function(route, data, configObj) {
				var deferred = $q.defer();
				
				$http.post(backendAPI + route, data, configObj)
					.then(function(success) {
						deferred.resolve(success);
					}, 
					function(failure) {	
						deferred.reject(failure);
					});
				return deferred.promise;
			};

			this.put = function(route, data) {
				var deferred = $q.defer();

				$http.put(backendAPI + route, data)
					.then(function(success) {
						deferred.resolve(success);
					}, 
					function(failure) {
						deferred.reject(failure);
					});
				return deferred.promise;
			};

			this.delete = function(route) {
				//ajax delete
				var deferred = $q.defer();

				$http.delete(backendAPI + route)
					.then(function(success) {
						deferred.resolve(success);
				}, 
					function(failure) {
						deferred.reject();
					});
				return deferred.promise;
			};
		}
}) ();