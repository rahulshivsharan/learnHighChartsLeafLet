(function(){
	'use strict';
	angular.module("myApp").controller("demoCntrl",demoCntrl);
	angular.module("myApp").controller("templateCntrl",templateCntrl);

	demoCntrl.$inject = ["$scope","$templateCache","$compile"];
	templateCntrl.$inject = ["$scope","$compile","templateService"];
	
	function demoCntrl($scope,$templateCache,$compile){
		var vm = this;
		vm.init = init;
		vm.templateMain = "";
		vm.template01 = "";
		vm.template02 = "";

		vm.loadNext = loadNext;
		vm.loadPrev = loadPrev;

		var ctrlName = "Demo Controller";
		var date = new Date();
		console.log("Controller \""+ctrlName+"\" is initialised "+date.getTime());

		function init(){
			
			vm.template01 = "/templateView01/pages/childTemplate01.html";
			vm.template02 = "/templateView01/pages/childTemplate02.html";


			document.getElementById("mainTmp").innerHTML = $templateCache.get("mainTemplate");
			$compile(document.getElementById("mainTmp"))($scope);
		}

		function loadNext(templateName){
			
		} 

		function loadPrev(templateName){
				
		} 

	} // end of demoCntrl

	function templateCntrl($scope,$compile,templateService){
		var vm = this;
		

		vm.init = init;
		vm.templateMain = "";
		vm.template01 = "";
		vm.template02 = "";
		vm.actorName = "";

		vm.loadNextActor = loadNextActor;
		vm.loadPrevActor = loadPrevActor;


		// private methods
		var loadMainTemplate = loadMainTemplate;
		var loadChildTemplate = loadChildTemplate;

		function init(){
			loadMainTemplate();
			loadChildTemplate("#tmp01","1");
			loadChildTemplate("#tmp02","2");
		}// end of init

		function loadMainTemplate(){
			var DOM_ELEMENT = angular.element("#mainTmp");

			templateService.getMainTemplate("1").then(success,error).finally(final);

			function success(templateString){ 
				angular.element(DOM_ELEMENT).append(templateString);
				vm.actorName = templateService.getNextActor();				
			}

			function error(templateString){
				angular.element(DOM_ELEMENT).append(templateString);
			}

			function final(){
				$compile(DOM_ELEMENT)($scope);
			}
		} // end of loadMainTemplate

		function loadChildTemplate(htmlElementId,templateIndex){
			var DOM_ELEMENT = angular.element(htmlElementId);

			templateService.getChildTemplate(templateIndex).then(success,error).finally(final);

			function success(templateString){ 
				angular.element(DOM_ELEMENT).append(templateString);				
			}

			function error(templateString){
				angular.element(DOM_ELEMENT).append(templateString);
			}

			function final(){
				$compile(DOM_ELEMENT)($scope);
			}
		} // end of loadChildTemplate	

		function loadNextActor(){
			vm.actorName = templateService.getNextActor();
		}	

		function loadPrevActor(){
			vm.actorName = templateService.getPrevActor();
		}

	}// end of template controller	
})();