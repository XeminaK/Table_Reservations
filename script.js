"use strict";
$(document).ready(function() { //on load the following happens within the brackets

//only allow click if the circle has the "available" class
$(".circle.available").on("click", function(e) { //when you click any of the circle divs the following happens
    let seatNumber = $(e.target); //create a seatNumber variable to be set to whatever you clicked on
    let seatId = seatNumber.text(); //grabs the text from the circle you clicked on
    console.log(seatNumber);
    //console.log(seatId); //use this to test seat Id//
    // console.log(seatNumber.text()); //console.log the text within the seatNumber variable, to test//////
    $(".reservation").css("display", "block"); //display the reservation form
    // $(".tableNum").append(seatNumber.text()); //add on the seat number to "Table number: " //alternate way
    $(".tableNum").append(`Table Number: ${seatId}`) //created the Table Number: # layout to display


//when you click the close icon, it will close out on your form
$(".closeButton").on("click", function(e) {
    $(".tableNum").empty(); //this clears the previous string you created with append
    $(".reservation").css("display", "none"); 
});


//when you click the save button, it will change the class
$(".saveButton").on("click", function(e) {
    $(seatNumber).removeClass("available").addClass("reserved"); //change circle from class available to class reserved
    $(".tableNum").empty(); //clears string if you save
    $(".reservation").css("display", "none");
    console.log(seatNumber); //console log to test
    // console.log($(e.target)); //console log to test
});


    }); //end of click function for circles





$(".circle").on("mouseover", function(e) { //if you mouseover the circles, you can see if they are available or not

    if ($(e.target).hasClass("available")) { //if the object you are hovering over has an "available" class
        // console.log(e.target); //print it to the console to test///////
        // $(e.target).css("background-color", "#eee"); //change the target object's background to red
        // $(e.target).css("color", "white"); //changed these properties to a hover class
        $(e.target).toggleClass("hover"); //this switches the class to hover
    }  //end if statement

});

//then use mouse leave method to change color back
$(".circle").on("mouseleave", function(e) {
    $(e.target).toggleClass("hover"); //toggle the class to hover
    // $(e.target).css("background-color", "#ccc"); //changes color back to original color
    // $(e.target).css("color", "black");
 })


});

//////Adam's Example/////////

//you want to target the document because if you ever add another div with jquery, the click event will not be added to it


// let selectedTable = null
// $(document).on("click", ".available", function(e) {
//     $(".form").fadeIn(2000);
//     selectedTable = e.target;
//     console.log(seletecedTable.innerText);
// )};

// $(document).on("click", "button", function(e) {
//     $(selectedTable).removeClass("available").addClass("reserved");
// });

// //////vanilla javascript way////////
// document.addEventListener("click", function(e) {
//     if (e.target.tagName ==== "DIV") {
//         console.log("yay");
//     }
// })
