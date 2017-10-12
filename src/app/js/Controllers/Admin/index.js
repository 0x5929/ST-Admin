(function(){

	'use strict';
	//load library dependcies
	var angular                     = require('../../../../lib/angular.js');
	//load all controller dependencies inside admin module. 
	var adminAddCtrl                = require('./Admin.add.controller.js');
	var adminSearchCtrl             = require('./Admin.search.controller.js');
	var programAddModalInstanceCtrl = require('./Admin.programAddModalInstanceCtrl.js');
	
	

	module.exports = angular.module('myApp.admin', ['ngFileSaver', 'services.ajaxService', 'services.toastFactory', 'services.modalService'])	//missin student value?
		//Defining Controllers
		.controller('adminSearchController', ['$scope', '$state', 'FileSaver', 'Blob', 'ajaxService', 'studentValue', adminSearchCtrl])
		.controller('adminAddController', ['$scope', '$stateParams', '$filter', 'ajaxService', 'toastFactory', 'studentValue', 'modalFactory', adminAddCtrl])
		.controller('programAddModalInstanceController', programAddModalInstanceCtrl);	//no DI because of work around for angular UI modal resolve array for programs

}) ();