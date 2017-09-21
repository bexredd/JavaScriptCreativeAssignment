var InitialX = 0;
var InitialY = 0;
var InitialTop = 0;
var InitialLeft = 0;
var EndTop = 0;
var EndLeft = 0;

var PictureIDnum = 1;
var zIndex = 0;

var dragStart = function(event) {
  InitialX = event.clientX;
  InitialY = event.clientY;

  var photoID = event.currentTarget.id;
  var image = document.getElementById(photoID);
  var top = image.style.top;
  var left = image.style.left;
  image.style.zIndex = ++zIndex;
  
  if (top == "" && left == "") {
    InitialTop = 0;
    InitialLeft = 0;
  } else {
      InitialTop = parseFloat(top,10);
    	InitialLeft = parseFloat(left,10);
  }
  EndTop= InitialTop;
  EndLeft = InitialLeft;
}

var drag = function(event) {
  var photoID = event.currentTarget.id;
  var XtoAdd = event.clientX - InitialX + InitialLeft;
  var YtoAdd = event.clientY - InitialY + InitialTop;

	var image = document.getElementById(photoID);
  image.style.top = YtoAdd + "px";
  image.style.left = XtoAdd + "px";

  if (YtoAdd <= 100 + EndTop && YtoAdd >= EndTop - 100) {
    EndTop = YtoAdd;
    EndLeft = XtoAdd;
  }
}

var dragEnd = function(event) {
  var photoID = event.currentTarget.id;
  var image = document.getElementById(photoID);
  var top = image.style.top;
  image.style.top = EndTop + "px";
  image.style.left = EndLeft + "px";
  InitialTop = EndTop;
  InitialLeft = EndLeft;
}





var onClickInput = function() {
  document.getElementById("img_src").value = '';
}

var addImage = function() {
  PictureIDnum = PictureIDnum + 1;
  let img = '<img src="' + document.getElementById("img_src").value + '"';
  img += ' style="z-index:' + (++zIndex) + ';"';
  img += ' id = "image' + PictureIDnum + '"';
  img += 'ondragstart="dragStart(event)" onDrag="drag(event)" ondragend="dragEnd(event)"' + '/>';
  
  document.getElementById("img_window").innerHTML += img;
}
