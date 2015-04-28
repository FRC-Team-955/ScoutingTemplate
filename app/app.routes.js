(function () {
	'use strict';

	angular.module('app').config(
		function ($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state('home', {
				url: '/',
				templateUrl: '/app/home/home.html',
				controller: 'HomeController',
				controllerAs: 'vm'
			})
				.state('about', {
				url: '/about',
				templateUrl: '/app/about/about.html',
				controller: 'AboutController',
				controllerAs: 'vm'
			})
				.state('contact', {
				url: '/contact',
				templateUrl: '/app/contact/contact.html',
				controller: 'ContactController',
				controllerAs: 'vm'
			})
			;
			// default path to navigate (also used as a fallback for missing urls)
			$urlRouterProvider.otherwise('/');
		}
	);

})();