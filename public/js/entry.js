var url = window.location.href;
var urlPieces = url.split("/");
userIdFromUrl = urlPieces[3];
// Code here handles what happens when a user submits a new check in.
// Effectively it takes the form inputs then sends it to the server to save in the DB.
// when user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();

    // make a newUser obj
    var newCheckIn = {
        // Reading the values from entry.html and packaging them to be read by the model
        UserId: userIdFromUrl,
        sleep_quality: $("#sleepQuality").val(),
        sleep_amount: $("#sleepDuration").val().trim(),
        mood_rating: $("#moodRating").val(),
        mood_type: $("#moodType").val(),
        diet_quality: $("#dietRating").val(),
        stress_level: $("#stressRating").val(),
        // user_entry: $("#userLog").val().trim(),

    };

    // send an AJAX POST-request with jQuery
    $.post("/api/checkin", newCheckIn)
        // on success, run this callback
        .then(function (data) {
            // log the data we found
            console.log(data);
            // tell the user we're adding a user with an alert window
            alert("Adding check in...");
            window.location.href = "/user";
        });

    // empty each input box by replacing the value with an empty string
    $("#sleepQuality").val("");
    $("#sleepDuration").val("");
    $("#moodRating").val("");
    $("#moodType").val("");
    $("#dietRating").val("");
    $("#username").val("");
    $("#stressRating").val("");
    // $("#userLog").val("");

});
