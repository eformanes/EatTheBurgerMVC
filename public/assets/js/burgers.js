// Waits for the page to be loaded

$(function() {
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



});