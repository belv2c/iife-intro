var SolarSystem = (function(oldSolarSystem){
	const spacecraft = ["Galileo", "Cassini", "Cluster"];

	oldSolarSystem.getSpacecraft = function(){
		return spacecraft;
	};

	oldSolarSystem.setSpacecraft = function(newSpacecraft){
		spacecraft.push(newSpacecraft);
	};

	oldSolarSystem.wreckSpacecraft = function(){
		spacecraft.pop();
	};

	return oldSolarSystem;
})(SolarSystem || {});
//^if nothing exists, give me an empty object