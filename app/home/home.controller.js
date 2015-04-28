(function () {
	'use strict';

	angular
		.module('app.controllers')
		.controller('HomeController', HomeController);

	function HomeController () {
		/*jshint validthis: true*/
		var vm = this;
		vm.title = 'Home Controller Content';
	}

})();