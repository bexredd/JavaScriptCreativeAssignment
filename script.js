var InitialX = 0;
var InitialY = 0;
var InitialTop = 0;
var InitialLeft = 0;
var EndTop = 0;
var EndLeft = 0;

var PictureIDnum = 1;
var zIndex = 0;

var dragStart = function(event) {
  console.log("dragstart");
  InitialX = event.clientX;
  InitialY = event.clientY;

  var photoID = event.currentTarget.id;
  var image = document.getElementById(photoId);
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
}

var drag = function(event) {
  var photoID = event.currentTarget.id;
  var XtoAdd = event.clientX - InitialX + InitialLeft;
  var YtoAdd = event.clientY - InitialY + InitialTop;

  document.getElementById(photoID).style.top = YtoAdd + "px";
  document.getElementById(photoID).style.left = XtoAdd + "px";

  if (YtoAdd <= 100 + EndTop && YtoAdd >= EndTop - 100) {
    EndTop = YtoAdd;
    EndLeft = XtoAdd;
  }
}

var dragEnd = function(event) {
  var photoID = event.currentTarget.id;
  var top = document.getElementById(photoID).style.top;
  document.getElementById(photoID).style.top = EndTop + "px";
  document.getElementById(photoID).style.left = EndLeft + "px";
  InitialTop = EndTop;
  InitialLeft = EndLeft;

  console.log(top);
}





var onClickInput = function() {
  document.getElementById("img_src").value = '';
}

var addImage = function() {
  PictureIDnum = PictureIDnum + 1;
  console.log(PictureIDnum);
  let img = '<img src="' + document.getElementById("img_src").value + '"';
  img += ' style="z-index:' + (++zIndex) + ';"';
  img += ' id = "image' + PictureIDnum + '"';
  img += 'ondragStart="dragStart(event)" onDrag="drag(event)" ondragEnd="dragEnd(event)"' + '/>';
  
  document.getElementById("img_window").innerHTML += img;
}
