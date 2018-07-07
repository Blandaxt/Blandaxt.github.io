// user can click on an image

// the image will move a random location

// the image will play a random sound

$(document).ready( function() {

  // sophia's guess?
  $("#bgm").get(0).play();

  $("#cat").on("click", function() {

      var location = Math.floor(Math.random() * 400);

      $("#cat").slideUp(500).css({top: location, left: location}).slideDown(2000);

      $("#meow").get(0).play();


  })

  $("#dinosaur").on("click", function() {

      var location = Math.floor(Math.random() * 200);

      $("#dinosaur").slideUp(600).css({top: location, left: location}).slideDown(500);

      $("#run").get(0).play();


  })

  $("#dragon").on("click", function() {

      var location = Math.floor(Math.random() * 200);

      $("#dragon").slideUp(600).css({top: location, left: location}).delay(4000).slideDown(5000);

      $("#roar").get(0).play();


  })

  $("#jelly").on("click", function() {

      var location = Math.floor(Math.random() * 200);

      $("#jelly").slideUp(600).css({top: location, left: location}).delay(300).slideDown(2000);

      $("#bloom").get(0).play();


  })

  $("#dragon2").on("click", function() {

      var location = Math.floor(Math.random() * 700);

      $("#dragon2").slideUp(200).css({top: location, left: location}).delay(190).slideDown(200);

      $("#blaze").get(0).play();


  })

  $("#leviathan").on("click", function() {

      var location = Math.floor(Math.random() * 300);

      $("#leviathan").slideUp(200).css({top: location, left: location}).delay(40).slideDown(590);

      $("#new").get(0).play();


  })

  $("#yoda").on("click", function() {

      var location = Math.floor(Math.random() * 300);

      $("#yoda").slideUp(2000).css({top: location, left: location}).delay(4000).slideDown(90);

      $("#ladder").get(0).play();


  })



  // var createIframe = function (src) {
  //         var self = this;
  //         $("iframe", {
  //             onload: function () {
  //                 self.isIframeLoaded = true;
  //                 console.log("loaded!");
  //             }
  //         }).appendTo("#iframeContainer");
  //
  //     };

})
