(function(){

	'use strict';

	//loading html templates for UI Router
	var homePage = require('../app/views/Home/Home.html');


	module.exports = stateRouteConfigurationHandler;

	function stateRouteConfigurationHandler($stateProvider, $urlRouterProvider, $locationProvider){
		//intitialize page to redirect to home
		$urlRouterProvider.otherwise('/homePage');
		$stateProvider
			.state('Home', {
				url: '/homePage',
				template: homePage
			})
			.state('Admin', {
				templateUrl: 'app/views/Admin/admin.html',
				authenticate: true
			})
			.state('Admin.Admin_Search', {
				views: {
					'AdminView@Admin': {
						templateUrl: 'app/views/Admin/Admin_Search.html'
					}
				},
				authenticate: true
			})
			.state('Admin.Admin_Add', {
				views: {
					'AdminView@Admin': {
						templateUrl: 'app/views/Admin/Admin_Add.html'
					}
				},
				params: {func: null},
				authenticate: true
			});

		//	getting rid of hash in url when using ui router
		// $locationProvider.html5Mode({
		// 	enabled    : true,
		// 	requireBase: false
		// });
	}




}) ();