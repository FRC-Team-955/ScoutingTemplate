//	Define the first controller
app.controller("AppController",
//	Declare the controller's scope
	["$scope", function ($scope) {
//		Object with navbar data
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