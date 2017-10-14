(function() {

	'use strict';

	//	loading library dependencies
	require('../lib/js/jquery.js');
	require('../lib/js/moment.js');
	require('angular');
	require('../lib/js/angular-animate.js');
	require('../lib/js/angular-aria.js');	//missing
	require('../lib/js/angular-material.js');
	require('../lib/js/angular-cookies.js');
	require('../lib/js/angular-file-save.js');
	require('../lib/js/angular-file-save.bundle.js');	//missing
	require('../lib/js/calendar.js');
	require('../lib/js/fullcalendar.js');
	require('../lib/js/gcal.js');
	require('../lib/js/angular-ui-router.js');
	require('../lib/js/ui-bootstrap-tpls.js');
	require('../lib/js/jquery.maskedinput.js');


	//	loading resource
	var angularResourceUtil = require('webpack-angular-resource-plugin');

	// loading configurations
	var stateRouteConfig = require('../config/stateRouteConfig.js');
	var httpConfig = require('../config/httpConfig.js');
	var appRunConfig = require('../config/appRunConfig.js');

	//Defining all project sub-modules


/*******************************************************
*  services.ajaxService module: 
*	
*	this module will contain service for: 1. GET
*										  2. POST
*										  3. PUT
*										  4. DELETE 
****/
	angular.module('services.ajaxService', []);


/****************************************************************
*  services.cookies module: 
*	
*	this module will contain service for: 1. get cookies
*										  2. remove cookies
***/
	angular.module('services.cookies', [
		'ngCookies']);



/********************************************************************
*	
*	this module will contain service for: 1. Sign In Modal
*										  2. Sign Up Modal
* 										  3. Add Program Modal											 
****/
	angular.module('services.modalService', []);	//name should be changed to factory



/***********************************************************************************
*  services.toastFactory module: 
*	
*	this module will contain service for: 1. successRegistration
*	  									  2. successLogin
*	  									  3. signOut,
*	  									  4. promoEmail: promoEmail,
*	 								      5. successAdd: successAdd,
*	  									  6. sucessEdit: successEdit,
*	  								      7. sucessDelete: sucessDelete,
*	  									  8. thankYouMessage: thankYouMessage,
*	 									  9 .errorToast: errorToast										  										 
***/
	angular.module('services.toastFactory', [
		'ngMaterial']);




/***************************************************************
*  services.AuthenticationFactory module: 
*	
*	this module will contain service for: 1. Sign Out
*										  2. Sign Up
* 										  3. Log In
*										  4. Check Logged In
*										  5. CSRF Protection											 
****/
	angular.module('services.AuthenticationFactory', [
		'ui.router', 
		'services.cookies', 
		'services.ajaxService']);



/********************************************************************************************************
*  myApp.userFunctionalities module: 
*	
*	this module will contain controllers: 1. landing page control -> to flip translations of buttons	
*										  2. userSignin/Signout/Signup Modals
****/
	angular.module('myApp.userFunctionalities', [
		'services.AuthenticationFactory', 
		'services.modalService', 
		'services.toastFactory', 
		'services.cookies', 
		'ui.router']);



/*********************************************************************************************************
*  myApp.admin module: 
*	
*	this module will contain controllers: 1. search --> search and export docs	
*										  2. add --> add student to database
* 										  3. addProgramModal Instance --> add program to each student
*****/
	 angular.module('myApp.admin', [	//missing student value?
	 	'ngFileSaver', 
	 	'services.ajaxService', 
	 	'services.toastFactory', 
	 	'services.modalService']);



/****************************************************************************
*  myApp (main) module: 
*	
*	this module will contain all the configurations: 1. state route config
*													 2. http config
*													 3. app run config
****/
	angular.module('myApp', [
		'ui.bootstrap',
		'ui.router',
		'ui.calendar',
		'ngMaterial',
		'ngCookies',
		'ngFileSaver',
		'services.looksIntegrationByUIB',
		'services.AuthenticationFactory',
		'services.toastFactory',
		'services.modalService',
		'services.cookies',
		'services.ajaxService',
		'myApp.userFunctionalities',
		'myApp.admin'])
	//configuring how the application is routed, basically directly maps the webpage,
	//which its own properties, such as views security(auth) options and controllers that can have their own servcies they depend on
		.config(['$stateProvider', '$urlRouterProvider', stateRouteConfig])
		.config(['$httpProvider', httpConfig])
		.run(['$rootScope', '$state', '$timeout', '$cookies', '$http', 'AuthenticationFactory', 'modalFactory', 'toastFactory', appRunConfig]);



	//Loading Controllers ( Just one controller index file loaded, the rest will be loaded in the controller dependency index file )
	require('./js/Controllers/Admin/');
	require('./js/Controllers/Home/');
	//Loading Values
	require('./js/Services/Value/');
	//Loading Services
	require('./js/Services/Service/');	//services
	require('./js/Services/Factory/');	//factories
	// //Starting Services
	// services.cookieService();
	// services.ajaxService();
	// factories.toastFactory();
	// factories.modalFactory();
	// factories.authFactory();

}) ();