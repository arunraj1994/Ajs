var myApp = angular.module('simpleApp', []);

myApp.controller('formsController', function ($scope, $timeout) {
    
    var form = {};
    
    $scope.isFormNotSubmitted = true;
    
    $timeout(function(){
       form = $scope.myForm;
    }, 1000);
   
    $scope.submitForm = function(){
                
        if(form.$valid){
            $scope.isFormNotSubmitted = false;
        }
    }
 
});






