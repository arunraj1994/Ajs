myApp.controller('productsController', function ($scope, $routeParams, $location) {
    
    $scope.data = 'This is customer page';
    
   $scope.customer = JSON.parse($routeParams.customer);
    
    $scope.backToHome = function(){
        
        $location.path('/home');
        
    }
    
});