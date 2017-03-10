var myApp = angular.module('simpleApp', ['ngRoute']);


myApp.config(function($routeProvider){
    
    $routeProvider.when('/home', {
       // template:'This is a home page'
        templateUrl:'partials/home.html',
        controller:'homeController'
    })
    .when('/products/:customer/', {
        //template:'This is a products page'
         templateUrl:'partials/products.html',
         controller:'productsController'
    })
    .when('/contact', {
        //template:'This is a contact page'
         templateUrl:'partials/contacts.html',
         controller:'contactsController'
    }).otherwise('/home');
    
});

myApp.controller('routeController', function($scope, $location){
    
    $scope.getPage = function(page){
        
        var currentpage = $location.path();
        
        if(page == $location.path()){
            return 'active';
        }
        
    }
    
});


