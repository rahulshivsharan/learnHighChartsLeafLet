(function(){
	'use strict';
	angular.module("myApp").run(runFn);
	runFn.$inject = ["$templateCache","$http"];

	function runFn($templateCache,$http){
		var date = new Date();
		console.log("Application run-config is initialised "+date.getTime());

		$http.get("/templateView01/pages/mainTemplate01.html").then(function(templateString){			
			$templateCache.put("mainTemplate",templateString);
		});

		$http.get("/templateView01/pages/childTemplate01.html",{
			cache : $templateCache
		});

		$http.get("/templateView01/pages/childTemplate02.html",{
			cache : $templateCache
		});
	} // end of runFn
})();