(function(){
'use strict';

    angular.module('myFirstApp',[])
    .controller('MyFirstController', function($scope){
        $scope.name = "Juan";
        $scope.sayHello = function(){
            return "Hello Coursera";
        }
    });



})();