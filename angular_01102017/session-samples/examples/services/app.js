var myApp = angular.module('myApp', []);



myApp.controller('serviceController', function ($scope, myService, myFactory, myProvider, myValue, myDataFactory) {


    $scope.greetMessage1 = myService.message;

    $scope.greetMessage2 = myFactory.message;

    $scope.greetMessage3 = myProvider.message;

    $scope.newValue = myValue;


    myDataFactory.getData().then(function (successResponse) {

        $scope.customerDetail = successResponse.data.detail;

        myDataFactory.setNewData($scope.customerDetail);


    }, function (error) {

    });


});

myApp.controller('serviceAgainController', function ($scope, myDataFactory) {


    $scope.$watch(function () {
        return myDataFactory.getNewData()
    }, function (newValue, oldValue) {
        $scope.anotherCustomerDetail = newValue;
    });


});

myApp.service('myService', function () {

    this.message = 'The message from Service';

});

myApp.factory('myFactory', function () {

    var obj = {};

    obj.message = 'The message from Factory';

    return obj;

});

myApp.provider('myProvider', function () {

    var text = 'The message from Provider';

    return {

        $get: function () {

            return {
                message: text
            }

        }

    }


});

myApp.value('myValue', 'The value from some value service');


myApp.factory('myDataFactory', function ($http, $q) {

    var obj = {};

    var data = null;

    var defered = $q.defer();

    var responseData = null;

    obj.getData = function () {
        
        return $http.get('sample.json');
        
        //approach using $q service
       /* var promise = defered.promise;

        $http.get('sample.json').then(function (response) {
            responseData = response;
            defered.resolve(response);
        }, function (error) {
            responseData = error;
            defered.reject(error);
        });

        return promise;*/

    }

    obj.details = function () {
        return responseData;
    }

    obj.getNewData = function () {
        return data;
    }

    obj.setNewData = function (val) {
        data = val
        return data;
    }

    return obj;

});




/*







sampleApp.factory('myCheckerFactory', function ($http) {

    var obj = {};

    var checker = false;
    
    obj.getChecker = function(){
        return checker;
    }
    
    obj.setChecker = function(val){
        checker = val;
        return checker;
    }
    
    return obj;

});




sampleApp.controller('btnController', function($scope, myCheckerFactory){
    
    $scope.isChecked = myCheckerFactory.getChecker();
    
    $scope.getStatus = function(val){
        myCheckerFactory.setChecker(val);
    }
    
});


sampleApp.controller('statusController', function($scope, myCheckerFactory){
    
  $scope.getCheckBoxStatus = function(){
      return myCheckerFactory.getChecker();
  }
    
});



*/