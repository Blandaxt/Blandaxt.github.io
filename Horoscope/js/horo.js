// user enters the Horoscope sign in input field
document.getElementsByTagName("button")[0].onclick = findHoro
// user press a button that what is my Horoscope
function findHoro(){
 var month = document.getElementsByTagName("select")[0].value
// get value of day
var day = document.getElementsByTagName("select")[1].value

// Setting all of the blocks to be style.display = to none when clicked and only selecting the one that has the properdate as the picture to show.
document.getElementsByClassName("hide")[0].style.display = "none";
document.getElementsByClassName("hide")[1].style.display = "none";
document.getElementsByClassName("hide")[2].style.display = "none";
document.getElementsByClassName("hide")[3].style.display = "none";
document.getElementsByClassName("hide")[4].style.display = "none";
document.getElementsByClassName("hide")[5].style.display = "none";
document.getElementsByClassName("hide")[6].style.display = "none";
document.getElementsByClassName("hide")[7].style.display = "none";
document.getElementsByClassName("hide")[8].style.display = "none";
document.getElementsByClassName("hide")[9].style.display = "none";
document.getElementsByClassName("hide")[10].style.display = "none";
document.getElementsByClassName("hide")[11].style.display = "none";
// Another way is to use Aray.from(class goes here).forEach( element){
//element.style.display = "none"
// })}

// Aquarius..................        ........
// function of the day
if( (month ==1 && day >=1) || (month == 2 && day <=20)){
  //var horo = document.getElementById("aquarius").value
// get the element by tag name and display it
   document.getElementsByClassName("hide")[10].style.display = "block";
// shows activity in the log
  console.log("My Horoscope is: aquarius");

// elst this will disapear
}
// else if ( (month == 2 && day >=21) ){
//
//   var hide = document.getElementsByTagName("p")[10]. function ("p") elem.classList.remove("aquarius");
//
//   console.log(aquarius);
//
// }
// // Pisces..................... . . .         .   .   . . . . . .
// show the other month
else if( (month ==2 && day >=21) || (month ==3 && day <=20) ){

   // document.getElementsByTagName("p")[11].style.display = "block";

   document.getElementsByClassName("hide")[11].style.display = "block"


  console.log("My Horoscope is: pisces");

}

// Aries............

else if ( (month ==3 && day >=21) || (month ==4 && day <=20) ){

   // document.getElementsByTagName("p")[1].style.display = "block";

    document.getElementsByClassName("hide")[1].style.display = "block"

  console.log("My Horoscope is: aries");
}

// taurus.........................

else if ( (month ==4 && day >=21) || (month ==5 && day <=21) ){

  // document.getElementsByTagName("p")[0].style.display = "block";
  document.getElementsByClassName("hide")[0].style.display = "block"

  console.log("My Horoscope is: taurus");
}

// gemini... ..  . . . . . . . ..    ..

else if ( (month ==5 && day >=22) || (month ==6 && day <=21) ){

  // document.getElementsByTagName("p")[2].style.display = "block";

    document.getElementsByClassName("hide")[2].style.display = "block"

  console.log("My Horoscope is: gemini");
}

// cancer      .   . .   . . . . ..  . .

else if ( (month ==6 && day >=22) || (month ==7 && day <=22) ){

  // document.getElementsByTagName("p")[3].style.display = "block";

  document.getElementsByClassName("hide")[3].style.display = "block"


  console.log("My Horoscope is: cancer");
}

// leo.. ... ..    . . . . ....

else if ( (month ==7 && day >=23) || (month ==8 && day <=21) ){

  // document.getElementsByTagName("p")[4].style.display = "block";

  document.getElementsByClassName("hide")[4].style.display = "block"


  console.log("My Horoscope is: leo");
}

// virgo...... ..    ..  . . ..

else if ( (month ==8 && day >=22) || (month ==9 && day <=23) ){

  // document.getElementsByTagName("p")[5].style.display = "block";

  document.getElementsByClassName("hide")[5].style.display = "block"


  console.log("My Horoscope is: virgo");
}

// libra.... ..  . ..  . . . . ..

else if ( (month ==9 && day >=24) || (month ==10 && day <=23) ){

  // document.getElementsByTagName("p")[6].style.display = "block";

  document.getElementsByClassName("hide")[6].style.display = "block"


  console.log("My Horoscope is: libra");
}

// scorpio.... ..  . ..  . . ..

else if ( (month ==10 && day >=24) || (month ==11 && day <=22) ){

  // document.getElementsByTagName("p")[7].style.display = "block";

  document.getElementsByClassName("hide")[7].style.display = "block"


  console.log("My Horoscope is: scorpio");
}

// sagittarius...  . . . . . . . . . . ....

else if ( (month ==11 && day >=23) || (month ==12 && day <=22) ){

  // document.getElementsByTagName("p")[8].style.display = "block";

  document.getElementsByClassName("hide")[8].style.display = "block"


  console.log("My Horoscope is: sagittarius");
}

// capricorn... . . . . . . . . . . .

else if ( (month ==12 && day >=23) || (month ==1 && day <=20) ){

  // document.getElementsByTagName("p")[9].style.display = "block";

  document.getElementsByClassName("hide")[9].style.display = "block"


  console.log("My Horoscope is: capricorn");
}

}
// a function will allign the paragraph to that user's Horoscope

// an alert will display that user's horsope name

// a function will display that user's Horoscope
