(function(){
	'use strict';
	angular.module("myApp").config(routeMapping);
	angular.module("myApp").config(defaultRoute);

	routeMapping.$inject = ["$stateProvider"];
	defaultRoute.$inject = ["$stateProvider","$urlRouterProvider"];

	function routeMapping($stateProvider){
		$stateProvider.state("mainView",{
			url : "/mainView",
			views : {
				"masterTemplate01" :{
					templateUrl : "/nestedView02/pages/mainTemplate01.html",
					controller : "mainCntrl",
					controllerAs : "vm"
				},
				"childTemplate01" :{
					template : "<div ui-view='tmp1'></div>"
				},
				"childTemplate02" : {
					template : "<div ui-view='tmp2'></div>"					
				},
				"tmp1@mainView" : {
					templateUrl : "/nestedView02/pages/childTemplate01.html",
					controller : "childCntrl",
					controllerAs : "vm"
				},
				"tmp2@mainView" : {
					templateUrl : "/nestedView02/pages/childTemplate02.html",
					controller : "childCntrl",
					controllerAs : "vm"
				}			
			} // end of views
		}).state("mainView.tmp012",{
			url : "/tmp012",
			views : {
				"tmp1@mainView" : {
					templateUrl : "/nestedView02/pages/childTemplate012.html",
					controller : "childCntrl",
					controllerAs : "vm"
				}
			}
		}).state("mainView.tmp01",{
			url : "/tmp01",			
			parent : "mainView",
			views : {
				"tmp1@mainView" : {
					templateUrl : "/nestedView02/pages/childTemplate01.html",
					controller : "childCntrl",
					controllerAs : "vm"
				}
			}
		}).state("mainView.tmp022",{
			url : "/tmp022",
			views : {
				"tmp2@mainView" : {
					templateUrl : "/nestedView02/pages/childTemplate022.html",
					controller : "childCntrl",
					controllerAs : "vm"
				}
			}
		}).state("mainView.tmp02",{
			url : "/tmp02",			
			parent : "mainView",
			views : {
				"tmp2@mainView" : {
					templateUrl : "/nestedView02/pages/childTemplate02.html",
					controller : "childCntrl",
					controllerAs : "vm"
				}
			}
		});
	} // end of routeMapping

	function defaultRoute($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise('/mainView');
	} // end of defaultRoute
})();