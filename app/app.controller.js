//	Define the first controller
app.controller("AppController",
//	Declare the controller's scope
	["$scope", function ($scope) {
//		Object with navbar data
		$scope.menus = [
			{
				icon: "home icon",
				label: "Home",
				tabHandler: "homeTab"
			},
			{
				icon: "calendar icon",
				label: "Schedule",
				tabHandler: "scheduleTab"
			},
			{
				icon: "pie chart icon",
				label: "Statistics",
				tabHandler: "statisticsTab"
			},
			{
				icon: "sitemap icon",
				label: "Alliance",
				tabHandler: "allianceTab"
			},
			{
				icon: "calculator icon",
				label: "OPR Calc",
				tabHandler: "oprCalcTab"
			},
			{
				icon: "upload icon",
				label: "Upload Data",
				tabHandler: "uploadTab"
			},
			{
				icon: "download icon",
				label: "Download Data",
				tabHandler: "downloadTab"
			}
		];
}]);