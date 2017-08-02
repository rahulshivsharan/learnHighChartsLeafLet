(function(){
	'use strict';
	angular.module("testApp",["ui.router"]);
	angular.module("testApp").config(configMapping);
	angular.module("testApp").config(configFn);
	angular.module("testApp").controller("demoCntrl",demoCntrl);
	angular.module("testApp").controller("partOneCntrl",partOneCntrl);
	angular.module("testApp").controller("partTwoCntrl",partTwoCntrl);

	demoCntrl.$inject = ["$scope","$state"];
	partOneCntrl.$inject = ["$scope","$state"];
	partTwoCntrl.$inject = ["$scope","$state"];

	configMapping.$inject = ["$stateProvider"];
	configFn.$inject = ["$stateProvider","$urlRouterProvider"];

	function demoCntrl($scope,$state){
		console.log("Controller demoCntrl initialised")
		var vm = this;
		vm.init = init;

		function init(){
			console.log("init of demoCntrl");				    				
		}
	}// end of demoCntrl

	function partOneCntrl($scope,$state){
		console.log("Controller partOneCntrl initialised");
		var vm = this;	    			
		vm.loadNext = loadNext;	
		vm.goBack = goBack; 	    			

		function loadNext(){
			console.log("In PartOneCtrl loadNext");
			$state.go("masterOne.temp011");
		}

		function goBack(){
			console.log("In PartOneCtrl goBack");
			$state.go("masterOne.temp01");
		}
		
	}// end of partOneCntrl

	function partTwoCntrl($scope,$state){
		console.log("Controller partTwoCntrl initialised");
		var vm = this;
		vm.load02 = load02;
		vm.init = init;	    			

		function load02(){
			console.log("In PartOneCtrl load02");
			$state.go("tempTwo");
		}

		function init(){
			console.log(" init of PartTwoCtrl ");
			$state.go("masterOne.tempTwo");
		}	    			
	}// end of partTwoCntrl

	function configMapping($stateProvider){	
			

		$stateProvider.state("masterOne",{
			url : "/masterOne",
			views : {
	    		"stateOne" : {	    				    			
	    			template : "<div ui-view='next'></div>",
	    			controller : partOneCntrl,
	    			controllerAs : "vm"	    						
	    		},
	    		"stateTwo" : {	
	    			templateUrl : "/pages/uiRouter/template02.html",
	    			controller : partTwoCntrl,
	    			controllerAs : "vm"	    						
	    		},
	    		"next@masterOne":{
	    			templateUrl : "/pages/uiRouter/template01.html"
	    		}   					
	    	}
	    }).state("masterOne.temp011",{
	    	url : "/temp011",
	    	views : {
	    		"next" : {
	    			templateUrl : "/pages/uiRouter/template011.html",
	    			controller : partOneCntrl,
	    			controllerAs : "vm"
	    		}
	    	}
	    }).state("masterOne.temp01",{
	    	url : "/temp01",
	    	views : {
	    		"next" : {
	    			templateUrl : "/pages/uiRouter/template01.html",
	    			controller : partOneCntrl,
	    			controllerAs : "vm"
	    		}
	    	}
	    });

	    
	} // end of configMapping

	function configFn($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise('/masterOne');
	}
})();