var myapp;
myapp = angular.module('sample',[]);
myapp.controller('mycontroller',function(){
	
	var vm = this;
	vm.technology = [
	
	{
    "Technology": "HTML",
    "Likes": 0,
    "Dislikes": 0
  },
  {
    "Technology": "CSS",
    "Likes": 0,
    "Dislikes": 0
  },
  {
   "Technology": "Javascript",
    "Likes": 0,
    "Dislikes": 0
  },
  {
    "Technology": "Jquery",
    "Likes": 0,
    "Dislikes": 0
  },
  {
    "Technology": "Angular",
    "Likes": 0,
    "Dislikes": 0
  },
  {
    "Technology": "ReactJS",
    "Likes": 0,
    "Dislikes": 0
  },
  {
    "Technology": "Advanced javascript",
    "Likes": 0,
    "Dislikes": 0
  }

	
	]
		
	
	vm.increment = function(inc)
	{
		inc.Likes ++;
	}
	
	vm.decrement = function(dec)
	{
		dec.Dislikes ++;
	}
	
	
});