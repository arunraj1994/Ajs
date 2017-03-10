var myApp = angular.module('simpleApp', []);

myApp.controller('customDirectiveController', function ($scope, $timeout) {
    
    
    $scope.places = ['Bangalore','Chennai', 'Mumbai'];
    
 
});


myApp.directive('myDirective', function(){
   
    return {
        
        restrict:'EACM',
        template:'<h3>This is my first directive</h3>'
        
    }
    
});

myApp.directive('myTemplateDirective', function(){
   
    return {
        
        restrict:'A',
        templateUrl:'partials/sample.html'
        
    }
    
});

myApp.directive('myDynamicTemplateDirective', function(){
   
    return {
        
        restrict:'A',
        templateUrl: function(element, attrs){
            return attrs.templateUrl;
        }
        
    }
    
});


myApp.directive('placesDirective', function(){
   
    return {
        
        restrict:'A',
        templateUrl:'partials/places.html'
        
    }
    
});

myApp.directive('placesDynamicDirective', function(){
   
    return {
        
        restrict:'A',
        templateUrl:'partials/placesDynamic.html',
        scope:{
            getPlaces:'=',
            getGreet:'@'
        },
        link: function(scope, element, attrs){
         
            scope.click = function(){
                console.log(scope.getPlaces);
            }
            
        }
    }
    
});

myApp.controller('testController', function($scope){
   
    $scope.newPlaces = ['Bangalore','Chennai','Mumbai','Delhi'];
    
    
    
});


