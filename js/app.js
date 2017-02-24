//Secret Menu Challenge
/*Add event listeners to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

var hElem = document.getElementsByClassName("name");
	//console.log (hElem.length);
for (var i=0; i<hElem.length; i++){
	hElem[i].addEventListener("click", secretMenu);
	//console.log(hElem);
}

function secretMenu(){
	var menuElem = this.querySelectorAll(".menu")[0];
		if (menuElem.style.display === "none"){
			menuElem.style.display = "block";
		}else{
			menuElem.style.display = "none";
		}

}