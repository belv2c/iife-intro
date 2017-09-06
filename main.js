//Augmented IIFE's

/*
let Something = (function(oldSomething){
	const animals = ["cat", "dog"];

	oldSomething.niceFunction = function(){
		console.log("I'm a nice function");
	}

	return oldSomething;

})(Something || {});*/

SolarSystem.setPlanet("Planet X");

let myPlanets = SolarSystem.getPlanets();
console.log("myPlanets", myPlanets);

let mySpacecraft = SolarSystem.getSpacecraft();
console.log("mySpacecraft", mySpacecraft);

let myAliens = SolarSystem.getAliens();
console.log("myAliens", myAliens);