
$("#createEntryBtn").on("click", function(event) {
  event.preventDefault();

  var login = {
    username: $("#username").val().trim(),
  };
console.log("I'm working " + login.username);

  if (!(login.username)) {
    alert("You must enter a username");
    return;
  }

  $("#username").val("");
  window.location.href = "/entry";

});


$("#viewProfileBtn").on("click", function(event) {
  event.preventDefault();

  var login = {
    username: $("#username").val().trim(),
  };
console.log("I'm working " + login.username);

  if (!(login.username)) {
    alert("You must enter a username");
    return;
  }

  $("#username").val("");
  window.location.href = "/user";

});