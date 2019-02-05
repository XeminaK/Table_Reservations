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
        $(e.target).css("backgroundColor", "#eee"); //change the target object's background to red
        $(e.target).css("color", "white");

        //then use mouse out method to change color back
        $(".circle").on("mouseout", function(e) { 
            $(e.target).css("backgroundColor", "#ccc"); //changes color back to original color
            $(e.target).css("color", "black");
         })
    }  //end if statement

});

});
