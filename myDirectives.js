var app = angular.module('myDirectives', []);

app.directive('pending', function($q){
	return {
		restrict: 'AE',
		scope: '&',
		link: function(scope, elem, attrs){
			console.log(scope, elem, attrs)
			var deferred = $q.defer();
			
			var toggle = function (){
			deferred.resolve(scope.isVisible === true)
    		scope.toggle = function(){
        	scope.isVisible = !scope.isVisible;	
			}
			
    	}
	  }
	}
});