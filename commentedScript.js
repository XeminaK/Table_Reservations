"use strict";
$(document).ready(function() { //on load the following happens within the brackets
    
//only allow click if the circle has the "available" class
$(document).on("click", ".circle.available", function(e) { //when you click any of the circle divs the following happens
    let seatNumber = $(e.target); //create a seatNumber variable to be set to whatever you clicked on
    let seatId = seatNumber.text(); //grabs the text from the circle you clicked on
    // console.log(seatNumber);
    $(".reservation").css("display", "block"); //display the reservation form
    $(".tableNum").append(`Table Number: ${seatId}`) //created the Table Number: # layout to display


//when you click the close icon, it will close out on your form
$(".closeButton").on("click", function(e) {
    $(".tableNum").empty(); //this clears the previous string you created with append
    $(".reservation").css("display", "none"); 
});  //end click on closeButton method


//when you click the save button, it will change the class
$(".saveButton").on("click", function(e) {
    $(seatNumber).removeClass("available").addClass("reserved"); //change circle from class available to class reserved
    $(".tableNum").empty(); //clears string if you save
    $(".reservation").css("display", "none"); //display reservation form to none
    console.log(seatNumber); //console log to test

    //create attributes onto the circle that you created
        $(seatNumber) //circle class that you originally clicked to open the form
          .attr("name", $(".name").val()) //add attribute to your name input/class
        //   .attr("phone", $(".phone").val()) //add attribute to your phone input
          .attr("party", $(".partySize").val()) //add the attribute to your partySize class 
        $("input").each(function() { //clears the form
          $(this).val("");
        }); //end  the each function

      //when you hover over your reserved class, the following should happen  
      $(document).on("mouseenter", ".reserved", function(e) { 
        if ($(e.target).attr("name") && $(e.target).attr("party")) { //changed attricbute to what you changed
          $(e.target).append(`
          <section class="tooltip">
            Name: ${$(e.target).attr("name")} 
            Party Size: ${$(e.target).attr("party")}
          </section>
          `);  //append the values that you input in the form to your circle
        }  //if statement
      }); //ends the event mouse function

      $(document).on("mouseleave", ".reserved", (event) => {
        $(".tooltip").remove();
      }); //removes the tooltip class when you mouse off the reserved class
    }); //end of on save button click

    }); //end of on click function for circles


//start on mouse enter and mouse leave hover
$(document).on("mouseenter", ".available", function(e) { //if you mouseover the circles, you can see if they are available or not
        $(e.target).toggleClass("hover"); //this switches the class to hover

//then use mouse leave method to change color back
    $(document).on("mouseleave", ".available", function(e) {
        $(e.target).removeClass("hover"); //toggle the class to hover
    }) //end leave method

}); //end hover function

}); //end ready function