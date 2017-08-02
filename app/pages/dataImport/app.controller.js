(function(){
	'use strict';

	angular.module("dataConverter").controller("mainCtrl",mainCtrl);

	mainCtrl.$inject = ["$scope"];

	function mainCtrl($scope){
		var vm = this;
		vm.heading = "Data Import from xlxs";
		vm.excelFile = undefined;

	}// end of mainCtrl 
})();