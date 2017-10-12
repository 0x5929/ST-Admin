(function() {

	'use strict';
	//load lib
	var angular = require('angular');	//does this work
	//load service handlers
	var cookieService = require('./cookies.js');
	var ajaxService   = require('./ajax.js');

	//define service, and also export
	// var exposedAPI = {
	// 	cookieService: cookieService,
	// 	ajaxService  : ajaxService
	// }

	// function cookieService() {	//does this work?
	// 	return angular.module('services.cookies')	
	// 		.service('cookieService', cookieService);
	// }

	// function ajaxService() {	//or do I not need return
	// 	return angular.module('services.ajaxService')
	// 		.service('ajaxService', ['$http', '$q', ajaxService]);
	// }

	// module.exports = exposedAPI;

/*
	second method where using IIFE to have all three module services defined 
	as soon as the module is exported, 
	instead of the first method where the exported api is an obj, 
	and we need to exports the obj, and call each methods for each module service
*/
	module.exports = (function() {	//defining all factory services
		angular.module('services.cookies')	
			.service('cookieService', cookieService);
		angular.module('services.ajaxService')
			.service('ajaxService', ['$http', '$q', ajaxService]);	

	}) ();






}) ();