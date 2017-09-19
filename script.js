var InitialX = 0;
var InitialY = 0;
var mouseDown = false;

var mouseClicked = function(event){
	
  if(mouseDown == false)
  {mouseDown = true;
	InitialX = event.clientX;
	InitialY = event.clientY;
  console.log(InitialX);}
}

var moveImage = function(event){
	if(mouseDown)
  {
  	var photoID =  event.currentTarget.id;
    
    var XtoAdd = event.clientX - InitialX;
    var YtoAdd = event.clientY - InitialY;
    //initial - current + top;
  	var imgTop = document.getElementById(photoID).style.top;
    var imgLeft = document.getElementById(photoID).style.left;
    if(imgTop=="")
    {
        console.log("if statement");
    		document.getElementById(photoID).style.top=XtoAdd +"px";
        document.getElementById(photoID).style.left=YtoAdd+"px";

    }
    else
    {
    		var top = parseInt(imgTop, 10);
        var left = parseInt(imgLeft, 10);
        XtoAdd +=top;
        YtoAdd += left;
   			console.log(XtoAdd);
        document.getElementById(photoID).style.top=XtoAdd +"px";
        document.getElementById(photoID).style.left=YtoAdd+"px";
    }
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