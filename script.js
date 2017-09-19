











var onClickInput = function() {
	document.getElementById("img_src").value = '';
}

var addImage = function() {
	let img = '<img src="';
  img += document.getElementById("img_src").value;
  img += '"/>';
  //add code to make this image appear in the middle of the screen(?)
  document.getElementById("img_pane").innerHTML += img;
}