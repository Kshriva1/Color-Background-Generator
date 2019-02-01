var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

button.addEventListener("click",function(){

	color1.value = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    color2.value = '#'+(Math.random()*0xFFFFFF<<0).toString(16);;
    setGradient();
    css.textContent = body.style.background + ";";
})


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

setGradient();

var elementsArray = document.querySelectorAll('.color1, .color2');
elementsArray.forEach(function(elem) {
	elem.addEventListener("change",function() {
		css.textContent = body.style.background + ";";
	})
});

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);