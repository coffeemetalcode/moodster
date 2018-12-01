 $(document).ready(function(){
    $('#modal').modal();
    $('#modal').modal('open'); 
    $('#modal2').modal();
    $('#modal2').modal('open'); 
    $('#modal3').modal();
    $('#modal3').modal('open'); 
 });

$("#createEntryBtn").on("click", function (event) {
  event.preventDefault();

  var login = {
    username: $("#username").val().trim(),
  };

  if (!(login.username)) {
    alert("You must enter a username");
    return;
  }
  $.get("/api/user/" + login.username, function (data) {
    console.log("User", data);
    if (!data || !data.length) {
      alert("Username does not exist. Please sign up.");
    }
    else {
      $("#username").val("");
      console.log(data[0].id);
      window.location.href = "/" + data[0].id + "/entry";
    }
  });
});


$("#viewProfileBtn").on("click", function (event) {
  event.preventDefault();
  var login = {
    username: $("#username").val().trim(),
  };
  console.log("I'm working " + login.username);
  if (!(login.username)) {
    alert("You must enter a username");
    return;
  }
  $.get("/api/user/" + login.username, function (data) {
    console.log("User", data);
    if (!data || !data.length) {
      alert("Username does not exist. Please sign up.");
    }
    else {
      $("#username").val("");
      console.log(data[0].id);
      window.location.href = "/" + data[0].id;
    }
  });
});