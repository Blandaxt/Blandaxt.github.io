// what can the user do

// user can presskyboard arrow keys

//on each keypress, image will move a direction up down left and right

// each click will run a fucntion

// when the user stops clicking the immage stops or break from movement

// document.getElementById("character").onclick = move

// let objImage= null;

// document.addEventListener('keydown', (event) => {
//   const keyName = event.key;
//   // alert('keydown event\n\n' + 'key: ' + keyName);
//   if(event.keyCode==40){
//     alert("gfhghjgfj")
//     // keyDown()
//   }
// });
// function keyDown(){
//   var down -= 10
//   document.getElementById("character").style.marginTop = down + "px";
// }

// 37 left arrow

// 38 up arrow

// 39 right arrow

// 40 down arrow

var guy = document.getElementById("character");
// get image by id
// position 0
var guyTop = 0
// position 0
var guyLeft = 0
//  position 0
//  position 0
document.onkeydown = movement;
// movement of the image
function movement(e){
  if(e.keyCode == 39){
// key type
    guyLeft += 10;
    guy.style.left = guyLeft + "px";

  }else if (e.keyCode == 37){
// movement of the image
  guyLeft -= 10;
  guy.style.left = guyLeft + "px";

}else if (e.keyCode == 40){
  // movement of the image
  guyTop += 10;
  guy.style.top = guyTop + "px"

}else if (e.keyCode == 38){
  // movement of the image
  guyTop -= 10;
  guy.style.top = guyTop + "px"
}
}
window.onload = function() {
  document.getElementById("character").focus();
};
