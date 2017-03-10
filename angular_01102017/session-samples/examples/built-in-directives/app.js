var myApp = angular.module('simpleApp', []);

myApp.controller('builtController', function ($scope) {

    $scope.isShown = false;

    $scope.showDiv = function () {
        $scope.isShown = true;
        $scope.isDivShown = true;
    }

    $scope.update = function () {
        $scope.isChecked = !$scope.isChecked;
    }

    $scope.places = ['Bangalore', 'Chennai', 'Mumbai', 'Delhi'];

    $scope.userDetails = [
        {
            'id': 05,
            'name': 'Steve'
   }, {
            'id': 06,
            'name': 'Martin'
   }, {
            'id': 01,
            'name': 'John'
   }, {
            'id': 02,
            'name': 'Mathew'
   }];


    $scope.selectedData = $scope.userDetails[1];

    $scope.isBoxShown = true;

    $scope.updateDiv = function () {
        $scope.isBoxShown = true;
    }

    $scope.status = [{
        'message': 'This is invalid',
        'type': 'invalid'
    }, {
        'message': 'Please enter 1000 characters',
        'type': 'warning'
    }, {
        'message': 'Request Processed',
        'type': 'success'
    }];


    $scope.customerDetails = [
        {
            "name": "Osborn Yang",
            "gender": "male",
            "company": "COMCUBINE",
            "email": "osbornyang@comcubine.com",
            "phone": "+1 (847) 452-3276",
            "address": "392 Losee Terrace, Blairstown, Maine, 6640"
  },
        {
            "name": "Madge Bishop",
            "gender": "female",
            "company": "ENVIRE",
            "email": "madgebishop@envire.com",
            "phone": "+1 (970) 582-2016",
            "address": "168 Dahl Court, Lookingglass, Illinois, 6528"
  },
        {
            "name": "Valencia Finley",
            "gender": "male",
            "company": "PYRAMAX",
            "email": "valenciafinley@pyramax.com",
            "phone": "+1 (903) 408-2915",
            "address": "777 Herkimer Place, Winfred, Mississippi, 6856"
  },
        {
            "name": "Caitlin Ford",
            "gender": "female",
            "company": "ZOLAVO",
            "email": "caitlinford@zolavo.com",
            "phone": "+1 (815) 457-2703",
            "address": "997 Dare Court, Cassel, Nebraska, 9097"
  },
        {
            "name": "Robert Henson",
            "gender": "female",
            "company": "MOREGANIC",
            "email": "roberthenson@moreganic.com",
            "phone": "+1 (978) 571-2921",
            "address": "123 Union Street, Belfair, Rhode Island, 1804"
  },
        {
            "name": "Walton Le",
            "gender": "male",
            "company": "UNQ",
            "email": "waltonle@unq.com",
            "phone": "+1 (892) 464-3142",
            "address": "863 Harway Avenue, Sabillasville, Oregon, 7962"
  },
        {
            "name": "James Bowen",
            "gender": "female",
            "company": "EXOPLODE",
            "email": "jamesbowen@exoplode.com",
            "phone": "+1 (855) 407-2379",
            "address": "779 Bayview Place, Churchill, Alaska, 5876"
  },
        {
            "name": "Tamara Holden",
            "gender": "female",
            "company": "CEDWARD",
            "email": "tamaraholden@cedward.com",
            "phone": "+1 (920) 598-3037",
            "address": "941 Portland Avenue, Dodge, Nevada, 4926"
  },
        {
            "name": "Cash Oliver",
            "gender": "male",
            "company": "PUSHCART",
            "email": "casholiver@pushcart.com",
            "phone": "+1 (857) 512-3210",
            "address": "161 Osborn Street, Croom, North Carolina, 3243"
  },
        {
            "name": "Britney Stafford",
            "gender": "female",
            "company": "STEELTAB",
            "email": "britneystafford@steeltab.com",
            "phone": "+1 (838) 466-3447",
            "address": "825 Truxton Street, Fidelis, New Hampshire, 6512"
  },
        {
            "name": "Constance Tran",
            "gender": "female",
            "company": "CABLAM",
            "email": "constancetran@cablam.com",
            "phone": "+1 (917) 479-2641",
            "address": "191 Hyman Court, Bawcomville, Colorado, 8368"
  },
        {
            "name": "Carole Duran",
            "gender": "female",
            "company": "VIAGREAT",
            "email": "caroleduran@viagreat.com",
            "phone": "+1 (893) 461-3522",
            "address": "691 Bergen Court, Eastvale, Northern Mariana Islands, 9600"
  },
        {
            "name": "Judith Roy",
            "gender": "female",
            "company": "XELEGYL",
            "email": "judithroy@xelegyl.com",
            "phone": "+1 (828) 505-3939",
            "address": "573 Ash Street, Leming, Minnesota, 8407"
  },
        {
            "name": "Lena Townsend",
            "gender": "female",
            "company": "OPTICALL",
            "email": "lenatownsend@opticall.com",
            "phone": "+1 (956) 416-2940",
            "address": "622 Jackson Street, Bancroft, Wyoming, 3293"
  },
        {
            "name": "Lea Coffey",
            "gender": "female",
            "company": "HAWKSTER",
            "email": "leacoffey@hawkster.com",
            "phone": "+1 (984) 505-2619",
            "address": "186 Eckford Street, Rosedale, Puerto Rico, 996"
  },
        {
            "name": "Olive Carney",
            "gender": "female",
            "company": "PAWNAGRA",
            "email": "olivecarney@pawnagra.com",
            "phone": "+1 (815) 589-3201",
            "address": "666 Bowery Street, Ypsilanti, South Carolina, 1237"
  },
        {
            "name": "Janis Vaughan",
            "gender": "female",
            "company": "ONTALITY",
            "email": "janisvaughan@ontality.com",
            "phone": "+1 (809) 595-2337",
            "address": "756 Cook Street, Nettie, Massachusetts, 7157"
  },
        {
            "name": "Nicole Forbes",
            "gender": "female",
            "company": "GEOFARM",
            "email": "nicoleforbes@geofarm.com",
            "phone": "+1 (966) 589-3287",
            "address": "786 Fleet Place, Cade, Virgin Islands, 8174"
  },
        {
            "name": "Kathy Rasmussen",
            "gender": "female",
            "company": "INVENTURE",
            "email": "kathyrasmussen@inventure.com",
            "phone": "+1 (867) 422-3198",
            "address": "566 Will Place, Statenville, Wisconsin, 9179"
  }
];

    $scope.isRowOdd = function (val) {
        if (val) {
            return 'odd';
        } else {
            return 'even';
        }
    }

    $scope.employee = {
        'id': '01',
        name: 'Martin'
    };




    $scope.doCopy = function () {
        $scope.newEmployee = {};
        $scope.newEmployee = angular.copy($scope.employee);
        $scope.employee.id = '02';
        console.log(JSON.stringify($scope.employee));
        console.log(JSON.stringify($scope.newEmployee));

    }

    $scope.doExtend = function () {
        $scope.newEmployee = {};
        angular.extend($scope.newEmployee, $scope.employee);
        $scope.employee.id = '02';
        console.log(JSON.stringify($scope.employee));
        console.log(JSON.stringify($scope.newEmployee));

    }

    $scope.doMerge = function () {
        $scope.newEmployee = {};
        $scope.newEmployeeAgain = {
            'email': 's@s.com'
        };
        angular.merge($scope.newEmployee, $scope.newEmployeeAgain, $scope.employee);
        $scope.employee.id = '02';
        console.log(JSON.stringify($scope.employee));
        console.log(JSON.stringify($scope.newEmployee));

    }


    $scope.isDisabled = true;

    $scope.getValue = function (val) {
        if (val == '')
            $scope.isDisabled = true;
        else
            $scope.isDisabled = false;

    }

    $scope.Status = 'Can be accessed';

    $scope.isChecked = false;


    //watch method
    $scope.$watch(function () {
       // console.log('watching');
        return $scope.isChecked
    }, function (newValue, oldValue) {
        if (newValue) {
            console.log(newValue);
            console.log(oldValue);
        }

    });

    /* digest and apply code */
    $scope.count = 0;
    $scope.UpdateCount = function () {

        setTimeout(function () {
            $scope.count++;
            //$scope.$apply();
            $scope.$digest();
            console.log('count Updated');
            console.log('Count:'+$scope.count);
        }, 1000);

    }

    $scope.anotherCount = 0;
    $scope.UpdateAnotherCount = function () {

        setTimeout(function () {
            $scope.anotherCount++;
            console.log('Another count Updated');
            console.log('Another Count:' + $scope.anotherCount);
           // $scope.$apply();
            //$scope.$digest();
        }, 1000);

    }

});

myApp.controller('testController', function ($scope) {

    $scope.testCount = 0;
    $scope.UpdatetestCount = function () {

        setTimeout(function () {
            $scope.testCount++;
            //$scope.$apply();
            console.log('Test count Updated');
        }, 1000);

    }

    /* digest and apply code */

});