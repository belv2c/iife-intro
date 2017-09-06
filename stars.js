var SolarSystem = (function(oldSolarSystem){
	const aliens = ["Megan", "Bob", "Alberta", "Joseph", "Karen"];

	oldSolarSystem.getAliens = function(){
		return aliens;
	};

	oldSolarSystem.setAliens = function(newAlien){
		aliens.push(newAlien);
	};

	oldSolarSystem.shiftyAliens = function(){
		aliens.shift();
	};

	return oldSolarSystem;

})(SolarSystem || {});