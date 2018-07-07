// main.js traffic light

//user can do:
	//nothing

//user can see:
	//light change colors 

//user expects:
	//light to change colors

//target each light and create var for each
//red

//green

//yellow


//change opacity of red light

function changeRed(){
	$("#red").css("opacity", 1)
	$("#red").setTimeout(200)
}

//change opacity of yellow light
function changeYellow(){
	$("#yellow").css("opacity", 1)
	$("#yellow").setTimeout(200)
}

//change opacity of green light
function changeGreen(){
	$("#green").css("opacity", 1)
	$("#green").css("color", "lightgreen")
	$("#green").setTimeout(200)

}

//set intervals for green light
// let greenTurn = function(){
// 	setInterval(changeGreen, 2000);

// }

// function offGreen(){
// 	clearInterval(greenTurn)
// } 

// greenTurn()
// offGreen();

// setTimeout(clearInterval(greenTurn), 5000);

// $(".container").setInterval(function(){
	
// }, 2000)

changeGreen()
changeYellow()
changeRed()



//set interval for yellow light


//set interval for red light