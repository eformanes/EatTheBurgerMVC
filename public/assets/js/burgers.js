// Waits for the page to be loaded

$(function() {
    // Handle event click on "Eat Burger" button
    $(".eatThisBurger").on("click", function(event) {
      var id = $(this).data("id");
      var newDevouredValue = $(this).data("newdevoured");
  
      var newDevouredState = {
        devoured: newDevouredValue
      };

      console.log("*******************");
      console.log(newDevouredState);
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed devoured value to", newDevouredValue);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    // Handle even click on "Add Burger" button
    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
          name: $("#newBurgerName").val().trim(),
          devoured: true
        };
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

});