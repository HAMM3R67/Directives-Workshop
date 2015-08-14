var app = angular.module('myDirectives', []);

app.directive('pending', function(){
	return {
		restrict: 'AE',
		scope: '&',
		link: function(scope, elem, attrs){
			console.log(scope, elem, attrs)
		}
	}
})