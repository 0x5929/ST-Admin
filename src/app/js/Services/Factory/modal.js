(function() {
	'use strict';
	// angular.module('services.modalService', ['services.looksIntegrationByUIB'])
	// 	.factory('modalFactory', ['$rootScope', '$uibModal', '$q', modalFactoryHandler]);


		//	importing all the html templates (so webpack wont complaint about it)

		var signInModalTemplate = require('../../../views/Home/signIn/signInModal.html');
		var signUpModalTemplate = require('../../../views/Home/signUp/signUpModal.html');
		var addProgramModalTemplate = require('../../../views/Admin/modalView/addProgramModal.html');

		module.exports = modalFactoryHandler

		function modalFactoryHandler($rootScope, $uibModal, $q) {
					var services = {
						signInModalService    : signInModalService,
						signUpModalService    : signUpModalService,
						addProgramModalService: addProgramModalService
					};

					function assignCurrentUser(user) {
						$rootScope.currentUser = user;
						return user;
					}

					function signInModalService () {
						var modalInstance = $uibModal.open({
							animation      : true,
							ariaLabelledBy : 'modal-title',
							ariaDescribedBy: 'modal-body',
							template       : signInModalTemplate, 
							controller     : 	'signInModalInstanceController',
							controllerAs   : 'signInModalInstanceCtrl',
							size           : 'lg'
						});

						return modalInstance.result.then(assignCurrentUser);
					}

					function signUpModalService () {
						var modalInstance = $uibModal.open({
							animation      : true,
							ariaLabelledBy : 'modal-title',
							ariaDescribedBy: 'modal-body',
							template       : signUpModalTemplate, 
							controller     : 	'signUpModalInstanceController',
							controllerAs   : 'signUpModalInstanceCtrl',
							size           : 'lg'
						});

						return modalInstance.result.then(assignCurrentUser);
					}

					function addProgramModalService(programArr) {	//added $q deferred, because the calling function needs it to return it as a promise to be chained with the modal promise
						var deferred =  $q.defer();
						var modalInstance = $uibModal.open({
							animation          : true,
							ariaLabelledBy     : 'modal-title',
							ariaDescribedBy    : 'modal-body',
							template           : addProgramModalTemplate, 
							controller         : 	'programAddModalInstanceController',
							controllerAs       : 'programAddModalInstanceCtrl',
							// bindToController: true,
							// scope           : $scope,
							backdrop           : true,
					      resolve: {
					      	program: function() {
					      		return programArr;
					      	}
					      },
					      size: 'lg'

						});
						modalInstance.result
									.then(function(successResponse) {
								//return the addprogramObj to back to the controller promise to handle
								console.log('MODAL CLOSED');
								// return successResponse;
								deferred.resolve(successResponse);	//resolves the success response
							}, function(failureResponse) {
								console.log('MODAL DISMISSED', failureResponse);
								// return;	//does not return the failure response because rejections does not get routed to the promise that calls this
								deferred.reject(failureResponse);	//rejects the failure response 
							});

						return deferred.promise;	//returning the promise to the calling controller to be handled
					}

					return services;
		}
}) ();