(function() {

	'use strict';
	//load library dependencies
	var angular                 = require('../../../../lib/angular.js');
	//load all controller dependencies inside home module
	var landingPageCtrl         = require('./Home.landingPage.controller.js');
	var signInModalCtrl         = require('./Home.signInModal.controller.js');
	var signInModalInstanceCtrl = require('./Home.signInModalInstance.controller.js');
	var signOutCtrl             = require('./Home.signOut.controller.js');
	var signUpModalCtrl         = require('./Home.signUpModal.controller.js');
	var signUpModalInstanceCtrl = require('./Home.signUpModalInstance.controller.js');
	//load non-angular controller
		//jQuery
	require('./Home.backToTop.controller.js');

	//define angular controllers

	module.exports = angular.module('myApp.userFunctionalities')
		//next we define our controllers in this module
		.controller('landingPageController', ['$scope', landingPageCtrl])
		.controller('signInModalControl', ['$scope', 'modalFactory', signInModalCtrl])
		.controller('signInModalInstanceController', ['$scope', '$state', 'AuthenticationFactory', 'toastFactory', 'cookieService', signInModalInstanceCtrl])
		.controller('signOutControl', ['$rootScope', '$state', 'toastFactory', 'AuthenticationFactory', signOutCtrl])
		.controller('signUpModalControl', ['$scope', 'modalFactory', signUpModalCtrl])
		.controller('signUpModalInstanceController', ['$scope', 'AuthenticationFactory', 'toastFactory', signUpModalInstanceCtrl]);

	
}) ();