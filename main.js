//Augmented IIFE's

/*
let Something = (function(oldSomething){
	const animals = ["cat", "dog"];

	oldSomething.niceFunction = function(){
		console.log("I'm a nice function");
	}

	return oldSomething;

})(Something || {});*/

var SolarSystem = (function(oldSolarSystem){
	const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
	const spacecraft = ["Galileo", "Cassini", "Cluster"];

	oldSolarSystem.getPlanets = function(){
		return planets;
	};

	oldSolarSystem.setPlanet = function(newPlanet){
		planets.push(newPlanet);
	};

	oldSolarSystem.getSpacecraft = function(){
		return spacecraft;
	};

	oldSolarSystem.setSpacecraft = function(newSpacecraft){
		spacecraft.push(newSpacecraft);
	};

	return oldSolarSystem;
})(SolarSystem || {});
//^if nothing exists, give me an empty object

let myPlanets = SolarSystem.getPlanets();
console.log("myPlanets", myPlanets);