(function(){
	'use strict'
	angular.module("myApp").factory("templateService",templateService);

	templateService.$inject = ["$http","$q","$templateRequest"];

	function templateService($http,$q,$templateRequest){
		var obj = {};
		var BASE_URL = "/templateView01/pages";
		var ERROR_TEMPLATE = "<h3 style='color:red'><b>Template not found</b></h3>";
		var actorNameArray = ["Jim Carrey","Arnold Schwarzenegger","Will Smith"];
		var actorIndex = 0;		

		obj.getMainTemplate = getMainTemplate; 
		obj.getChildTemplate = getChildTemplate;
		obj.getNextActor = getNextActor;
		obj.getPrevActor = getPrevActor;
		
		return obj;

		function getNextActor(){			
			var _name = "";
			
			if(angular.isDefined(actorNameArray[actorIndex])){
				_name = actorNameArray[actorIndex];
			}else{
				actorIndex = 0;
				_name = actorNameArray[actorIndex];
			}
			actorIndex++;
			return _name;
		}

		function getPrevActor(){
			var _name = "";
			actorIndex--;
			if(angular.isDefined(actorNameArray[actorIndex])){
				_name = actorNameArray[actorIndex];
			}else{
				actorIndex = 3;
				_name = actorNameArray[actorIndex];
			}
			
			return _name;
		}

		function getMainTemplate(templateIndex){
			var deferred = $q.defer();
			var url = BASE_URL + "/mainTemplate0" + templateIndex + ".html";
			
			$templateRequest(url).then(function(templateString){
				deferred.resolve(templateString);
			},function(){
				deferred.reject(ERROR_TEMPLATE)
			});

			return deferred.promise;
		} // end of getMainTemplate

		function getChildTemplate(templateIndex){
			var deferred = $q.defer();
			var url = BASE_URL + "/childTemplate0" + templateIndex + ".html";
			
			$templateRequest(url).then(function(templateString){
				deferred.resolve(templateString);
			},function(){
				deferred.reject(ERROR_TEMPLATE)
			});

			return deferred.promise;
		} // end of getMainTemplate
	}
})();