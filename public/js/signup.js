// Code here handles what happens when a new user submits their information.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

// when user clicks add-btn
$("#add-btn").on("click", function(event) {
    event.preventDefault();
  
    // make a newUser obj
    var newUser = {
      // user name from user name input
      user_name: $("#username").val().trim(),
      // name from name input
      person_name: $("#name").val().trim(),
      // phone number from mobile input
      phone_number: $("#mobile").val().trim(),
    };
  
    // send an AJAX POST-request with jQuery
    $.post("/api/user", newUser)
      // on success, run this callback
      .then(function(data) {
        // log the data we found
        console.log(data);
        // tell the user we're adding a user with an alert window
        alert("Adding user...");
        //send to an entry page that incorporates their user id into the url so it can be read there
        window.location.href = data.id + "/entry";
      });
  
    // empty each input box by replacing the value with an empty string
    $("#username").val("");
    $("#name").val("");
    $("#mobile").val("");

  });
  