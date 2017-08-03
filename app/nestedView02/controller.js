(function(){
	'use strict';
	angular.module("myApp").controller("demoCntrl",demoCntrl);
	angular.module("myApp").controller("mainCntrl",mainCntrl);
	angular.module("myApp").controller("childCntrl",childCntrl);
	
	function demoCntrl($scope,$state){
		var vm = this;

		vm.loadNext = loadNext;
		vm.loadPrev = loadPrev;

		var ctrlName = "Demo Controller";
		var date = new Date();
		console.log("Controller \""+ctrlName+"\" is initialised "+date.getTime());

		function loadNext(stateName){
			$state.go(stateName);
		} 

		function loadPrev(stateName){
			$state.go(stateName);
		} 

	} // end of demoCntrl

	function mainCntrl($scope,$state){
		var vm = this;

		vm.loadNext = loadNext;
		vm.loadPrev = loadPrev;

		var ctrlName = "Main Controller";
		var date = new Date();
		console.log("Controller \""+ctrlName+"\" is initialised"+date.getTime());

		function loadNext(stateName){
			$state.go(stateName);
		} 

		function loadPrev(stateName){
			$state.go(stateName);
		}
	} // end of demoCntrl


	function childCntrl($scope,$state){
		var vm = this;
		
		vm.loadNext = loadNext;
		vm.loadPrev = loadPrev;

		var ctrlName = "Child Controller";
		var date = new Date();
		console.log("Controller \""+ctrlName+"\" is initialised"+date.getTime());

		function loadNext(stateName){
			$state.go(stateName);
		} 

		function loadPrev(stateName){
			$state.go(stateName);
		}
	} // end of demoCntrl	
})();