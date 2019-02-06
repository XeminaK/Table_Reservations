"use strict";
$(document).ready(function() { 
let seatNumber = null;
 
//only allow click if the circle has the "available" class
$(document).on("click", ".circle.available", function(e) { 
    seatNumber = $(e.target); 
    let seatId = seatNumber.text(); 
    $(".reservation").css("display", "block"); 
    $(".tableNum").append(`Table Number: ${seatId}`) 
}); //end of on click function for circles


//when you click the close icon, it will close out on your form
$(".closeButton").on("click", function(e) {
    $(".tableNum").empty(); //this clears the previous string you created with append
    $(".reservation").css("display", "none"); 
});  //end click on closeButton method


//when you click the save button, it will change the class
$(".saveButton").on("click", function(e) {
    $(seatNumber).removeClass("available").addClass("reserved");
    $(".tableNum").empty(); 
    $(".reservation").css("display", "none"); 
    console.log(seatNumber); //console log to test

    $(seatNumber) 
        .attr("name", $(".name").val()) 
        .attr("party", $(".partySize").val()) 
        $("input").each(function() { 
          $(this).val("");
        }); //end  the each function

    }); //end of on save button click


      //when you hover over your reserved class, the following should happen  
      $(document).on("mouseenter", ".reserved", function(e) { 
        if ($(e.target).attr("name") && $(e.target).attr("party")) { 
          $(e.target).append(`
          <section class="tooltip">
            <p>Name: ${$(e.target).attr("name")}</p> 
            <p>Party Size: ${$(e.target).attr("party")}</p>
          </section>
          `);  //end append
        }  //if statement
      }); //ends the event mouse function

      $(document).on("mouseleave", ".reserved", (event) => {
        $(".tooltip").remove();
      }); //removes

//start on mouse enter and mouse leave hover
$(document).on("mouseenter", ".available", function(e) { 
        $(e.target).toggleClass("hover"); //this switches the class to hover

//then use mouse leave method to change color back
    $(document).on("mouseleave", ".available", function(e) {
        $(e.target).removeClass("hover"); 
    }) //end leave method

}); //end hover function

}); //end ready function