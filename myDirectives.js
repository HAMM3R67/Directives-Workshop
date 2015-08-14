var app = angular.module('directiveWorkshop', []);

app.directive('pending', function(){
	return {
		restrict: 'AE',
		scope: '&',
		link: function(scope, element, attr){
			console.log(scope, element, attr)
		}
	}
})