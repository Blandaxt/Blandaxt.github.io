// what user can do
//
// add things to list
function addToList(task){
  //append li to ul
  //be able to edit tasks on list****
  const taskHtml = ('<li>'+ "<span>" + task + "</span>" +' <a class="editAnchor ninja" href="#">' + "edit" + "</a>" + ' <a class="removeAnchor ninja" href="#">' + "remove" + "</a>"+ '</li>' )
  $("ul").append(taskHtml)
  console.log(task)
  tocount()
}

//event listeners for add
$('#add').on("submit", function(event){
  event.preventDefault()
  //make var for task input
  let newTask = $("input").val()
  addToList(newTask)
  console.log(newTask)
})

//mark tasks as complete
//click to reverse completion status
$('.doList').on("click", "li", function(){
  $(this).toggleClass('complete');
});

// counting how much is left to do on the list
function tocount(){
  var c = $("li").length;
  console.log(c);
  $("#counter").text("You Have " + c + " things to do!")

};

// tocount()
//event listener for clear All
function clearAllTasks() {
  $("li").remove()
  $(".edit").remove()
  $(".remove").remove()
}

//create clear completed tasks
//delete tasks that are completed
function clearCompletedTasks(){
  $("li.complete").remove()
  $(".edit").parent().remove()
  $(".remove").parent().remove()
  tocount()
}
// runs the clear all and clear completed task function
$("#clearDone").on("click", clearCompletedTasks);
$('#clearAll').on("click", clearAllTasks)

// removes the item from the list
$("ul").on("click", ".removeAnchor", function(){
   $(this).parent().remove();
   tocount()
  });
// edit an item on the list
$("ul").on("click", ".editAnchor", function(){
  // alert("clicked");
    let letter = $(this).parent().find("span").text()
    alert(letter);
         $(this).parent().html("<input type='text'  value='"+letter+"' class='input_edit' />" + "<button class='confirm_button'>" + "confirm" + "</button>");
         $(".confirm_button").on("click" , function(){
            let newItem = $(".input_edit").val();
            $(this).parent().html(newItem + ' <a class="editAnchor" href="#">' + "edit" + "</a>" + ' <a class="removeAnchor" href="#">' + "remove" + "</a>" +"</li>");
         })
});
// mouse enter to show the remove and edit
$("ul").on("mouseenter", "li", function() {
  $("a", this).toggleClass("ninja");
})
// on mouse leave the edit and remove dissapears
  .on("mouseleave", "li", function() {
    $("a", this).toggleClass("ninja");
  })

//what user can see
//can see things on List
//can see things being removed from List

//what they expect
//expects to add and remove tasks
//expects to click things as being completed
