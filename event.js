canv  = document.getElementById("abcc");
function f(){
	console.log("You clicked on the canvas");
}

canv.addEventListener('click',f);

function f2(e){
	console.log("A key got pressed",e.key);
}

document.addEventListener('keyup',f2);