var myApp = angular.module('simpleApp', []);



myApp.controller('simpleController', function ($scope, $rootScope, $timeout) {

    $scope.greet = "Hello All, Happy New Year";
    console.log($scope.greet);

});


myApp.controller('secondController', function ($scope, $rootScope) {

    $scope.greet = "Hello All";
    console.log($scope.greet);
    
    
});



