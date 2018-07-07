// user can input numbers

// user can click on buttons

// each button performs a function

// each function follows pemdas

// the user expects to see the result
// plain javascript written in the top of global scope
// so it can be accessed from anything declared below it
// uses an if statement and the isNaN method to test the value of result
// in each math operation
function numberTest (result) {
  if (isNaN(result)) {
    alert("You must enter a number!!!");
  }
}

$(document).ready(function(e){
  // stating the division variable
  // $("#division").click("insert(/)") = (division)

    $("#division").on("click", function(e){
        // stating the user input box 1
      var input1 = parseFloat( $("#userInput1").val() );
        //     stating the user input box 2
      var input2 = parseFloat( $("#userInput2").val() );
      // running the divition mathematical formula
      var result =  input1 / input2;
      // displaying the result of the formula
      $("#result").val(result);
      // test if the result equals not a numer (NaN)
      numberTest(result)
      // puting the results in the console
      console.log(result);
    });

    // Addition....... ..  . . ..

  $("#addition").on("click", function(e){
      // stating the user input box 1
      var input1 = parseFloat( $("#userInput1").val() );
      // stating the user input box 2
      var input2 = parseFloat( $("#userInput2").val() );
      // running the divition mathematical formula
      var result =  input1 + input2;
      // displaying the result of the formula
      $("#result").val(result);
      // test if the result equals not a numer (NaN)
      numberTest(result)
      // puting the results in the console
      console.log(result);
    });

    // subtraction...........  . . . ..    . ....\

  $("#subtraction").on("click", function(e){
      // stating the user input box 1
      var input1 = parseFloat( $("#userInput1").val() );
      // stating the user input box 2
      var input2 = parseFloat( $("#userInput2").val() );
      // running the divition mathematical formula
      var result =  input1 - input2;
      // displaying the result of the formula
      $("#result").val(result);
      // test if the result equals not a numer (NaN)
      numberTest(result)
      // puting the results in the console
      console.log(result);
    });

    // multiplication......  . . ..  . . . . . ..  .

    $("#multiplication").on("click", function(e){
        // stating the user input box 1
      var input1 = parseFloat( $("#userInput1").val() );
      // stating the user input box 2
      var input2 = parseFloat( $("#userInput2").val() );
      // running the divition mathematical formula
      var result =  input1 * input2;
      // displaying the result of the formula
      $("#result").val(result);
        // condition for checking if input is a number
      numberTest(result)
      // puting the results in the console
      console.log(result);
    });

    // THIS IS SOPHIA'S code
    // if (condition(met)) {
    //   DO THIS
    // }

    /*// some test code
  // $( ".target" ).click(function() {
  // alert( "Handler for .click() called." );
  // });
  // a wrong syntax
    // (division) = $("change")
*/
});
