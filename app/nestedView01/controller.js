(function(){
	'use strict';
	angular.module("myApp").controller("demoCntrl",demoCntrl);
	angular.module("myApp").controller("actorCntrl",actorCntrl);
	angular.module("myApp").controller("moviesCntrl",moviesCntrl);
	angular.module("myApp").controller("actorsPicCntrl",actorsPicCntrl);

	
	demoCntrl.$inject = ["$scope","$state","myService"];
	actorCntrl.$inject = ["$scope","$state","myService","$rootScope"];
	moviesCntrl.$inject = ["$scope","$state","myService","$location"];
	actorsPicCntrl.$inject = ["$scope","$state","myService","$location"];


	function demoCntrl($scope,$state,myService){

	} // end of demoCntrl

	function actorCntrl($scope,$state,myService,$rootScope){
		var vm = this;		
		vm.actorName = "";
		vm.loadNext = loadNext;
		vm.init = init;

		function init(){
			loadNext();
		}

		function loadNext(){
			var actorCounter = myService.getNextActor();
			$rootScope.$broadcast("NEW_ACTOR");
			actorCounter += "";
			vm.actorName = myService.getActorName(actorCounter);
			console.log(actorCounter);
		}
	} // end of actorCntrl

	function moviesCntrl($scope,$state,myService,$location){
		var vm = this;		
		vm.init = init;
		vm.loadNextMovie = loadNextMovie;
		vm.loadNext = loadNext;
		var loadPrev = loadPrev;
		vm.loadPrevMovie = loadPrevMovie;
		vm.imgUrl = "";
		vm.currentActorName = "";
		var baseUrl = "/nestedView01/images";

		function init(){
			console.log(" in movie init ");
			if(myService.movieFlag === "" || myService.movieFlag === "next"){
					loadNext();	
			}else if(myService.movieFlag === "prev"){
					loadPrev();
			}
		}// end of init

		$scope.$on("NEW_ACTOR",function(){
				baseUrl = "/nestedView01/images";
				myService.resetMovieCounter();
				loadNext();
		});

		function loadNext(){
			var currentActor = myService.getCurrentActorCounter();			
			currentActor += "";
			var actorName = myService.getActorName(currentActor);
			vm.currentActorName = actorName;
			var movieCounter = undefined;
			if(angular.isDefined(actorName)){
				movieCounter = myService.getNextMovie();
				movieCounter += "";

				if(actorName === "Jim Carrey"){
					baseUrl += "/jim_carry/movies";				
				}else if(actorName === "Arnold"){
					baseUrl += "/arnold/movies";				
				}else if(actorName === "Will Smith"){
					baseUrl += "/will/movies";				
				}

				vm.imgUrl = baseUrl + "/" + movieCounter + ".jpg";
				console.log(vm.imgUrl);
			}// end of if
			
		} // end of loadNext

		function loadPrev(){
			var currentActor = myService.getCurrentActorCounter();			
			currentActor += "";
			var actorName = myService.getActorName(currentActor);
			vm.currentActorName = actorName;
			var movieCounter = undefined;
			if(angular.isDefined(actorName)){
				movieCounter = myService.getPreviousMovie();
				movieCounter += "";

				if(actorName === "Jim Carrey"){
					baseUrl += "/jim_carry/movies";				
				}else if(actorName === "Arnold"){
					baseUrl += "/arnold/movies";				
				}else if(actorName === "Will Smith"){
					baseUrl += "/will/movies";				
				}

				vm.imgUrl = baseUrl + "/" + movieCounter + ".jpg";
			}// end of if
			
		} // end of loadPrev

		function loadNextMovie(){						
			var movieCounter = myService.getCurrentMovieCounter();
			movieCounter++;
			myService.movieFlag = "next";			
			$location.path("/mainView/nextMovie/"+movieCounter);			
		}

		function loadPrevMovie(){
			var movieCounter = myService.getCurrentMovieCounter();
			movieCounter--;
			myService.movieFlag = "prev";			
			$location.path("/mainView/nextMovie/"+movieCounter);			
		}

	} // end of moviesCntrl

	function actorsPicCntrl($scope,$state,myService,$location){
		var vm = this;		
		vm.init = init;
		vm.loadNextPic = loadNextPic;
		vm.loadNext = loadNext;
		var loadPrev = loadPrev;
		vm.loadPrevPic = loadPrevPic;
		vm.imgUrl = "";
		vm.currentActorName = "";
		var baseUrl = "/nestedView01/images";

		function init(){
			console.log(" in pic init ");
			if(myService.actorPicFlag === "" || myService.actorPicFlag === "next"){
					loadNext();	
			}else if(myService.actorPicFlag === "prev"){
					loadPrev();
			}
		}

		$scope.$on("NEW_ACTOR",function(){
				baseUrl = "/nestedView01/images";
				myService.resetPicCounter();
				loadNext();
		});

		function loadNext(){			
			var currentActor = myService.getCurrentActorCounter();			
			currentActor += "";
			var actorName = myService.getActorName(currentActor);
			var picCounter = undefined;
			vm.currentActorName = actorName;
			if(angular.isDefined(vm.currentActorName)){
				picCounter = myService.getNextPic();
				picCounter += "";

				if(actorName === "Jim Carrey"){
					baseUrl += "/jim_carry";				
				}else if(actorName === "Arnold"){
					baseUrl += "/arnold";				
				}else if(actorName === "Will Smith"){
					baseUrl += "/will";				
				}
				vm.imgUrl = baseUrl + "/" + picCounter + ".jpg";
				console.log(vm.imgUrl);
				console.log(vm.currentActorName);
			}// end of if			
		} // loadNext

		function loadPrev(){
			var currentActor = myService.getCurrentActorCounter();			
			currentActor += "";
			var actorName = myService.getActorName(currentActor);
			var picCounter = undefined;
			vm.currentActorName = actorName;
			if(angular.isDefined(vm.currentActorName)){
				picCounter = myService.getPreviousPic();
				picCounter += "";

				if(actorName === "Jim Carrey"){
					baseUrl += "/jim_carry";				
				}else if(actorName === "Arnold"){
					baseUrl += "/arnold";				
				}else if(actorName === "Will Smith"){
					baseUrl += "/will";				
				}
				vm.imgUrl = baseUrl + "/" + picCounter + ".jpg";
				console.log(vm.imgUrl);
				console.log(vm.currentActorName);
			}// end of if
		}

		function loadNextPic(){			
			var actorPicCounter = myService.getCurrentPicCounter();
			actorPicCounter++;
			myService.actorPicFlag = "next";			
			$location.path("/mainView/nextPic/"+actorPicCounter);			
		}

		function loadPrevPic(){
			var actorPicCounter = myService.getCurrentPicCounter();
			actorPicCounter--;
			myService.actorPicFlag = "prev";			
			$location.path("/mainView/nextPic/"+actorPicCounter);			
		} 
	} // end of actorsPicCntrl

})();