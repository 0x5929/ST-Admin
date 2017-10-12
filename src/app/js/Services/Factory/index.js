(function() {

	'use strict';
	//load lib
	var angular = require('angular');
	//load factory handlers
	var toastFactory = require('./toast.js');
	var modalFactory = require('./modal.js');
	var authFactory  = require('./auth.js');

	// var exposedAPI = {
	// 	toastFactory: toastFactory,
	// 	modalFactory: modalFactory,
	// 	authFactory : authFactory
	// };
	// 	function toastFactory() {
	// 		return angular.module('services.toastFactory')
	// 			.factory('toastFactory', ['$mdToast', toastFactory]);
	// 	}
	// 	function modalFactory() {
	// 		return angular.module('services.modalService')
	// 			.factory('modalFactory', ['$rootScope', '$uibModal', '$q', modalFactory]);
	// 	}
	// 	function authFactory() {
	// 		return angular.module('services.AuthenticationFactory')
	// 			.factory('AuthenticationFactory', ['$q', '$state', 'cookieService', 'ajaxService', authFactory]);
	// 	}
	// module.exports = exposedAPI;

/*
	second method where using IIFE to have all three module services defined 
	as soon as the module is exported, 
	instead of the first method where the exported api is an obj, 
	and we need to exports the obj, and call each methods for each module service
*/
	module.exports = (function() {	//defining all factory services
		angular.module('services.toastFactory')
				.factory('toastFactory', ['$mdToast', toastFactory]);
		angular.module('services.modalService')
				.factory('modalFactory', ['$rootScope', '$uibModal', '$q', modalFactory]);	
		angular.module('services.AuthenticationFactory')
				.factory('AuthenticationFactory', ['$q', '$state', 'cookieService', 'ajaxService', authFactory]);

	}) ();

}) ();