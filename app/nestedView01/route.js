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
				"actorName" :{
					templateUrl : "/nestedView01/pages/actorName.html",
					controller : "actorCntrl",
					controllerAs : "vm"
				},
				"movies" : {
					template : "<div ui-view='moviePic'></div>"					
				},
				"actorImages" :{
					template : "<div ui-view='actorPic'></div>"
				},
				"actorPic@mainView" : {
					templateUrl : "/nestedView01/pages/actorPicsTemplate.html",
					controller : "actorsPicCntrl",
					controllerAs : "vm"
				},
				"moviePic@mainView" : {
					templateUrl : "/nestedView01/pages/moviePicsTemplate.html",
					controller : "moviesCntrl",
					controllerAs : "vm"
				}			
			} // end of views
		}).state("mainView.nextPic",{
			url : "/nextPic/{picNo}",			
			parent : "mainView",
			views : {
				"actorPic@mainView" : {
					templateUrl : "/nestedView01/pages/actorPicsTemplate.html",
					controller : "actorsPicCntrl",
					controllerAs : "vm"
				}
			}
		}).state("mainView.nextMovie",{
			url : "/nextMovie/{movieNo}",			
			parent : "mainView",
			views : {
				"moviePic@mainView" : {
					templateUrl : "/nestedView01/pages/moviePicsTemplate.html",
					controller : "moviesCntrl",
					controllerAs : "vm"
				}
			}
		});
	} // end of routeMapping

	function defaultRoute($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise('/mainView');
	} // end of defaultRoute
})();