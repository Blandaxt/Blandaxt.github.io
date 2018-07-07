// input amount of money starting with
// input amount of money betting with
// start button to begin game
// game images move at random

// user presses 3 buttons one for each section to stop
// images stop
// determine if they have a match
// display the results
// var input1 = $("#start_money").val();
// var input2 =
// var balance = input1 - input2
$(document).ready(function(){

var slots = ['https://images.pexels.com/photos/867349/pexels-photo-867349.jpeg?auto=compress&cs=tinysrgb&h=350',
            'https://images.pexels.com/photos/70746/strawberries-red-fruit-royalty-free-70746.jpeg?        auto=compress&cs=tinysrgb&h=350',
            'https://images.pexels.com/photos/943632/pexels-photo-943632.jpeg?auto=compress&cs=tinysrgb&h=350',
            'https://images.pexels.com/photos/209339/pexels-photo-209339.jpeg?auto=compress&cs=tinysrgb&h=350',
            'https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&h=350',
            'https://images.pexels.com/photos/59999/raspberries-fruits-fruit-berries-59999.jpeg?auto=compress&cs=tinysrgb&h=350',
            'https://images.pexels.com/photos/57426/paprika-vegetables-colorful-food-57426.jpeg?auto=compress&cs=tinysrgb&h=350',
            'https://images.pexels.com/photos/42063/background-backgrounds-food-fruit-42063.jpeg?auto=compress&cs=tinysrgb&h=350',
            'https://images.pexels.com/photos/209416/pexels-photo-209416.jpeg?auto=compress&cs=tinysrgb&h=350',
            'https://images.pexels.com/photos/68133/tomatoes-vegetables-red-delicious-68133.jpeg?auto=compress&cs=tinysrgb&h=350']

var slot1 = $('#img1');
var slot2 = $('#img2');
var slot3 = $('#img3');
var interval1;
var interval2;
var interval3;


var ableToPlay = false; //min.rings to play


 $('#betIt').on('click', function () {
   var startingBet = 0; //1000
    ///place bet

    if ($('#amountToPlay').is('input')) {
      startingBet = parseFloat($('#amountToPlay').val())
    } else {
      startingBet = parseFloat($('#amountToPlay').text())
    }
   console.log(startingBet)
   ableToPlay = true;
   var dollars = parseFloat($('#placeBet').val());
   if (startingBet < dollars) {
     alert('not enough bread');
   } else {
     var amountleft = startingBet - dollars;
     startingBet = amountleft
     var startingBetSpan = (`
       <span id="amountToPlay">${startingBet}</span>
       `)
     $('#earnings').html('You Got '+ startingBetSpan );
     $('#value').html(dollars);
     $('#placeBet').val("");
   }
 });


function spin1() {
  var choice1 = slots[Math.floor(Math.random() * slots.length)];
  $("#img1").attr("src", choice1);
  console.log(choice1)
}
function spin2() {
  var choice2 = slots[Math.floor(Math.random() * slots.length)];
  $("#img2").attr("src", choice2);
  console.log(choice2)
}
function spin3() {
  var choice3 = slots[Math.floor(Math.random() * slots.length)];
  $("#img3").attr("src", choice3);
  console.log(choice3)
}
function startSpin1(){
  interval1= setInterval(spin1,140);

}
function startSpin2(){
  interval2 = setInterval(spin2,140);
}
function startSpin3() {
  interval3 = setInterval(spin3,140);
}
function hideStart(){
  $("#start").css("display", "none")
}
function showStart(){
  $("#start").css("display", "inline")
}
function hideDisplay(){
  $("#display").css("display", "none")
}

$("#start").on("click", function(){
  startSpin1()
  startSpin2()
  startSpin3()
  hideStart()
  hideDisplay()
// $('#start').hide([10],)
});
  function stopSpin1(){
    clearInterval(interval1)
  }
  function stopSpin2(){
    clearInterval(interval2)
  }
  function stopSpin3(){
    clearInterval(interval3)
    showStart()
  }
  function showDisplay(){

    $("#display").css("display", "inline")
  }

  $("#stop1").on("click",function(){
    stopSpin1()
    console.log(stopSpin1())

  })

$("#stop2").on("click",function(){
  stopSpin2()
  console.log(stopSpin2())

  })

$("#stop3").on("click",function(){
  showDisplay()
  stopSpin3()
  console.log(stopSpin3())

  var src1 = $('#img1').attr('src')
  var src2 = $('#img2').attr('src')
  var src3 = $('#img3').attr('src')

  if (src1 == src2 == src3){
     $('#display').text('Winner Winner Vegan Dinner!!!');
   }else{
     $('#display').text('Loser Loser Loser!!!');
   }
  })
  function winnerLoser(){
    if (true) {

    }
  }
})
