var app = angular.module('directiveWorkshop', ['myDirectives']);

app.controller('mainCtrl', function($scope, mainService){

$scope.getData = function () {
        return mainService.getData($scope.query).then().then(function (data) {
           console.log(data);
           return $scope.data = data;
        });  
    };
    
   $scope.pending = pending
    
    

});