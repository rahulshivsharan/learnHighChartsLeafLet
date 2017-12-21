(function(){
	'use strict';

	angular.module("myApp").controller("demoCntrl",demoCntrl);

	demoCntrl.$inject = ["$scope"];

	function demoCntrl($scope){
		var vm = this;
		$scope.init = init;

		function init(){
			$(function(){
				$scope.$alpacaForm = $("#alpcaDemo").alpaca({
                    "schema": {
                        "title":"User Feedback",
                        "description":"What do you think about Alpaca?",
                        "type":"object",
                        "properties": {
                            "name": {
                                "type":"string",
                                "title":"Name"
                            },
                            "feedback": {
                                "type":"string",
                                "title":"Feedback"
                            },
                            "ranking": {
                                "type":"string",
                                "title":"Ranking",
                                "enum":['excellent','ok','so so']
                            }
                        }
                    }, // end of schema
                    "options" : {
                    	"form" : {
                    		"buttons" : {
                    			"submit" : {
                    				"click" : function(){
                    					var val = this.getValue();
                                        if (this.isValid(true)) {
                                            $scope.formData = JSON.stringify(val, null, "  ");                                            
                                            $scope.$digest();
                                            console.log($scope.formData);    
                                        } else {
                                            console.log("Invalid value: " + JSON.stringify(val, null, "  "));
                                        }
                    				} // end of click
                    			}
                    		}
                    	}
                    }
                }); // end of alpaca
			});
		} // end of init
	} // end of demoCntrl
})();