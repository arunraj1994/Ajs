var myApp = angular.module('simpleApp', []);



myApp.controller('CommunicateController', function($scope){
    
});

myApp.controller('parentController', function($scope){
    
    $scope.familyExpenses = 0;
    
    $scope.AddParentExpenses = function(){
      $scope.familyExpenses = parseInt($scope.familyExpenses) + $scope.parentExpenses;
     // $scope.$broadcast('sendParentExpenses', $scope.familyExpenses);
    }
    
    /*$scope.$on('sendChildExpenses', function(evt, data){
        $scope.familyExpenses = data;
    });*/
    
});

myApp.controller('childController', function($scope){
    
    $scope.AddChildExpenses = function(){
        $scope.familyExpenses = parseInt($scope.familyExpenses) + $scope.childExpenses;
       // $scope.$emit('sendChildExpenses',$scope.familyExpenses);
    }
    
   /**$scope.$on('sendParentExpenses', function(evt, data){
        $scope.familyExpenses = data;
    });*/
    
});