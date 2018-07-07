//user can enter a Number which represent number of sides on die
document.getElementById('press').onclick = rollNumb
// user can click on a button

// a function that will replicate a dice rolling
function rollNumb(){
  //get value out of userInput1
  var numOfDie = parseFloat(document.getElementById('userInput1').value)

  var numOfSides = parseFloat(document.getElementById('userInput2').value)
// userinput 2
   numOfDie = Math.ceil(numOfDie);
// round up number up
   numOfSides = Math.ceil(numOfSides);

   for(var count = 1; count <= numOfDie; count++){
     var rollResult = Math.ceil(Math.random() * numOfSides)


  // var rollResult = Math.ceil( (numOfDie * (numOfDie * Math.random())) * (numOfSides * Math.random()) ) //.01 to .99

    document.getElementsByTagName('h1')[0].innerHTML = rollResult

    // console.log((numOfDie * Math.random()));
    //
    // console.log((numOfSides * Math.random()));

    console.log(rollResult);
  }
}
// the dice has sides base on the number the user entered
// function rolling(){
//
//   var roll = ("userinput") = genRand() //.01 to .99
//
//       //place result in the dom
//       document.getElementsByTagName('h1')[0].innerHTML = rollResult
//
//   }
// the dom will show the result of the roll
