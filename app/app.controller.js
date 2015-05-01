/* global app */
app.controller("AppController",
	["$scope", function($scope) {
		$scope.menus = [
			{
				icon: "home icon",
				label: "Home"
			},
			{
				icon: "calendar icon",
				label: "Schedule"
			},
			{
				icon: "pie chart icon",
				label: "Statistics"
			},
			{
				icon: "sitemap icon",
				label: "Alliance"
			},
			{
				icon: "calculator icon",
				label: "OPR Calc"
			},
			{
				icon: "upload icon",
				label: "Upload Data"
			},
			{
				icon: "download icon",
				label: "Download Data"
			}
		];
}]);