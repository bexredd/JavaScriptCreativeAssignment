
var InitialX = 0;
var InitialY = 0;
var mouseDown = false;

var mouseClicked = function(event){
	mouseDown = true;
	InitialX = event.clientX;
	InitialY = event.clientY;
  console.log(InitialX);
}

var moveImage = function(event){
	if(mouseDown)
  {
  	var photoID =  event.currentTarget.id;
  	document.getElementById(photoID).style.top="40px";
  }
}

var mouseUp = function(){
	mouseDown = false;
}

var onClickInput = function() {
	document.getElementById("img_src").value = '';
}

var addImage = function() {
  let img = '<img src="';
  img += document.getElementById("img_src").value;
  img += '"/>';
  //add code to make this image appear in the middle of the screen(?)
  document.getElementById("img_window").innerHTML += img;
}