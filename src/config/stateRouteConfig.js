(function(){

	'use strict';

	module.exports = stateRouteConfigurationHandler;

	function stateRouteConfigurationHandler($stateProvider, $urlRouterProvider){
		//intitialize page to redirect to home
		$urlRouterProvider.otherwise('/homePage');
		$stateProvider
			.state('Home', {
				url: '/homePage',
				templateUrl: 'app/Home/view/Home.html'
			})
			.state('Admin', {
				templateUrl: 'app/Admin/view/admin.html',
				authenticate: true
			})
			.state('Admin.Admin_Search', {
				views: {
					'AdminView@Admin': {
						templateUrl: 'app/Admin/view/Admin_Search.html'
					}
				},
				authenticate: true
			})
			.state('Admin.Admin_Add', {
				views: {
					'AdminView@Admin': {
						templateUrl: 'app/Admin/view/Admin_Add.html'
					}
				},
				params: {func: null},
				authenticate: true
			});
	}




}) ();