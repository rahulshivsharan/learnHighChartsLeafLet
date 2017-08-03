(function(){
	'use strict';
	angular.module("myApp").factory("myService",myService);

	function myService(){
		var actorMap = {};
		actorMap["1"] = "Jim Carrey";
		actorMap["2"] = "Arnold";
		actorMap["3"] = "Will Smith";

		var actorCounter = 0;
		var actorPicCounter = 0;
		var movieCounter = 0;
		var obj = {};
		
		obj.getNextActor = getNextActor;
		obj.getPreviousActor = getPreviousActor;
		obj.getCurrentActorCounter = getCurrentActorCounter;

		obj.getNextMovie = getNextMovie;
		obj.getPreviousMovie = getPreviousMovie;
		obj.getCurrentMovieCounter = getCurrentMovieCounter; 
		obj.resetMovieCounter = resetMovieCounter;

		obj.getNextPic = getNextPic;
		obj.getPreviousPic = getPreviousPic;
		obj.getCurrentPicCounter = getCurrentPicCounter; 
		obj.resetPicCounter = resetPicCounter;

		obj.getActorName = getActorName;

		obj.actorPicFlag = "";
		obj.movieFlag = "";

		return obj;

		function getCurrentMovieCounter(){
			return movieCounter;
		}

		function resetMovieCounter(){
			movieCounter = 0;
		}

		function getCurrentPicCounter(){
			return actorPicCounter;
		}

		function resetPicCounter(){
			actorPicCounter = 0;
		}

		function getCurrentActorCounter(){
			return actorCounter;
		}

		function getActorName(id){
			return actorMap[id];
		}

		function getNextActor(){
			if(actorCounter <= 2){
				actorCounter++;
			}else {
				actorCounter = 3;
			}

			return actorCounter;
		}

		function getPreviousActor(){
			if(actorCounter >= 1){
				actorCounter--;
			}else{
				actorCounter = 0;
			}

			return actorCounter;
		}

		function getNextMovie(){
			if(movieCounter <= 2){
				movieCounter++;
			}else {
				movieCounter = 3;
			}

			return movieCounter;
		}

		function getPreviousMovie(){
			if(movieCounter >= 1){
				movieCounter--;
			}else{
				movieCounter = 0;
			}

			return movieCounter;
		}

		function getNextPic(){
			if(actorPicCounter <= 2){
				actorPicCounter++;
			}else {
				actorPicCounter = 3;
			}

			return actorPicCounter;
		}

		function getPreviousPic(){
			if(actorPicCounter >= 1){
				actorPicCounter--;
			}else{
				actorPicCounter = 0;
			}

			return actorPicCounter;
		}
	}	
})();