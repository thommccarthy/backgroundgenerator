var _ = require('lodash');

let array1 = [1, 2, 3, 4, 5, 6, 7];
console.log('answer:', _.without(array1, 7));

var css = document.querySelector("h3"); 
var color1 = document.querySelector(".color1"); 
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("randombutton");


//Function declaration for the linear gradient css property. 


function linearGradientRight() {
	body.style.background = 
	"linear-gradient(to right, "
	+ color1.value
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}
linearGradientRight();

//

function randomColors() {
	body.style.background = 
	"linear-gradient(to right, "
	+ '#'+Math.floor(Math.random()*16777215).toString(16)
	+ ", " 
	+ '#'+Math.floor(Math.random()*16777215).toString(16) 
	+ ")";

	css.textContent = body.style.background + ";"; 

}

random.addEventListener("click", randomColors);

//Here I call the function immediately to match the background 
//with the default color input values.

 

// adds an event listener to the color input. event listeners use callback functions rather than a full call. 

color1.addEventListener("input", linearGradientRight);  

color2.addEventListener("input", linearGradientRight);

