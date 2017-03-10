var myapp;
myapp = angular.module('sample',[]);
myapp.controller('myctrl',function($scope){
	
	$scope.employees = 
	
		[
  {
    "name": "Odessa Brock",
    "gender": "female",
    "company": "FIBRODYNE",
    "email": "odessabrock@fibrodyne.com",
    "phone": "+1 (826) 550-2061",
    "id": 0
  },
  {
    "name": "Robert Baxter",
    "gender": "female",
    "company": "VORATAK",
    "email": "robertbaxter@voratak.com",
    "phone": "+1 (846) 529-3796",
    "id": 1
  },
  {
    "name": "Vargas Francis",
    "gender": "male",
    "company": "NIXELT",
    "email": "vargasfrancis@nixelt.com",
    "phone": "+1 (873) 401-3468",
    "id": 2
  },
  {
    "name": "Casey Tucker",
    "gender": "male",
    "company": "DUFLEX",
    "email": "caseytucker@duflex.com",
    "phone": "+1 (868) 402-3335",
    "id": 3
  },
  {
    "name": "Olivia Lawrence",
    "gender": "female",
    "company": "ZANYMAX",
    "email": "olivialawrence@zanymax.com",
    "phone": "+1 (856) 451-2317",
    "id": 4
  },
  {
    "name": "Witt Wallace",
    "gender": "male",
    "company": "GREEKER",
    "email": "wittwallace@greeker.com",
    "phone": "+1 (956) 587-2576",
    "id": 5
  },
  {
    "name": "Laura Salas",
    "gender": "female",
    "company": "INFOTRIPS",
    "email": "laurasalas@infotrips.com",
    "phone": "+1 (836) 526-2661",
    "id": 6
  }
]
	
	
});