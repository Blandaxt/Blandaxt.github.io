// user enters the Horoscope sign in input field
document.getElementsByTagName("button")[0].onclick = findHoro
// user press a button that what is my Horoscope
function findHoro(){
 var month = document.getElementsByTagName("select")[0].value
// get value of day
var day = document.getElementsByTagName("select")[1].value

// Aquarius..................        ........
// function of the day
if( (month ==1 && day >=1) || (month == 2 && day <=20)){
  //var horo = document.getElementById("aquarius").value
// get the element by tag name and display it
  document.getElementsByTagName("p")[10].style.display = "block";
// shows activity in the log
  console.log(aquarius);

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

  document.getElementsByTagName("p")[11].style.display = "block";

  console.log(pisces);

}

// Aries............

else if ( (month ==3 && day >=21) || (month ==4 && day <=20) ){

  document.getElementsByTagName("p")[1].style.display = "block";

  console.log(aries);
}

// taurus.........................

else if ( (month ==4 && day >=21) || (month ==5 && day <=21) ){

  document.getElementsByTagName("p")[0].style.display = "block";

  console.log(taurus);
}

// gemini... ..  . . . . . . . ..    ..

else if ( (month ==5 && day >=22) || (month ==6 && day <=21) ){

  document.getElementsByTagName("p")[2].style.display = "block";

  console.log(gemini);
}

// cancer      .   . .   . . . . ..  . .

else if ( (month ==6 && day >=22) || (month ==7 && day <=22) ){

  document.getElementsByTagName("p")[3].style.display = "block";

  console.log(cancer);
}

// leo.. ... ..    . . . . ....

else if ( (month ==7 && day >=23) || (month ==8 && day <=21) ){

  document.getElementsByTagName("p")[4].style.display = "block";

  console.log(leo);
}

// virgo...... ..    ..  . . ..

else if ( (month ==8 && day >=22) || (month ==9 && day <=23) ){

  document.getElementsByTagName("p")[5].style.display = "block";

  console.log(virgo);
}

// libra.... ..  . ..  . . . . ..

else if ( (month ==9 && day >=24) || (month ==10 && day <=23) ){

  document.getElementsByTagName("p")[6].style.display = "block";

  console.log(libra);
}

// scorpio.... ..  . ..  . . ..

else if ( (month ==10 && day >=24) || (month ==11 && day <=22) ){

  document.getElementsByTagName("p")[7].style.display = "block";

  console.log(scorpio);
}

// sagittarius...  . . . . . . . . . . ....

else if ( (month ==11 && day >=23) || (month ==12 && day <=22) ){

  document.getElementsByTagName("p")[8].style.display = "block";

  console.log(sagittarius);
}

// capricorn... . . . . . . . . . . .

else if ( (month ==12 && day >=23) || (month ==1 && day <=20) ){

  document.getElementsByTagName("p")[9].style.display = "block";

  console.log(capricorn);
}

}
// a function will allign the paragraph to that user's Horoscope

// an alert will display that user's horsope name

// a function will display that user's Horoscope
