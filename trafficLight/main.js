// // main.js traffic light

// //user can do:
// 	//nothing

// //user can see:
// 	//light change colors

// //user expects:
// 	//light to change colors

// //target each light and create var for each
// //red

// //green

// //yellow


// //change opacity of red light

// function changeRed(){
// 	$("#red").css("opacity", 1)
// }

// //change opacity of yellow light
// function changeYellow(){
// 	$("#yellow").css("opacity", 1)
// }

// //change opacity of green light
// function changeGreen(){
// 	$("#green").css("opacity", 1)
// 	clearInterval(greenTurn, 4000)

// }

// //set intervals for green light
// let greenTurn = setInterval(changeGreen, 2000)

// let yellowTurn = function(){
// 	setInterval(changeYellow, 2000);
// 	// clearInterval(yellowTurn)
// }

// function offGreen(){
// 	clearInterval(greenTurn)
// }

// changeGreen()
// yellowTurn()
// // offGreen();

// setTimeout(clearInterval(offGreen), 5000);



//set interval for yellow light


//set interval for red light


// function greenTurn() {
//   $('#green').css('opacity', 1)
//   $('#yellow').css('opacity', 0.3)
//   $('red').css('opacity', 0.3)
//   clearInterval(first);
// };

// function yellowTurn() {
//   $('#yellow').css('opacity', 1)
//   $('#green').css('opacity', 0.3)
//   $('#red').css('opacity', 0.3)
//   clearInterval(second);
// };

// function redTurn() {
//   $('#red').css('opacity', 1)
//   $('#yellow').css('opacity', 0.3)
//   $('#green').css('opacity', 0.3)
//   clearInterval(third);
//   first = setInterval(greenTurn, 4000);
//   second = setInterval(yellowTurn, 5000);
//   third = setInterval(redTurn, 8000);
// };

// var first = setInterval(greenTurn, 5000);

// var second = setInterval(yellowTurn, 8000);

// var third = setInterval(redTurn, 10000);

function green() {
 $('#red').css('opacity', 0.2);
 $('#yellow').css('opacity', 0.2);
 $('#green').css('opacity', 1);
 $('#green').css('color', 'lightgreen')
}
function yellow() {
 $('#green').css('opacity', 0.2);
 $('#yellow').css('opacity', 1);
 clearInterval(greenLight);
}
function red() {
 $('#yellow').css('opacity', 0.2);
 $('#red').css('opacity', 1);
 clearInterval(yellowLight);
 greenLight = setInterval(green, 6000);
 yellowLight = setInterval(yellow, 10000);
}
var greenLight = setInterval(green, 3000);
var yellowLight = setInterval(yellow, 10000);
var redLight = setInterval(red, 17000);
