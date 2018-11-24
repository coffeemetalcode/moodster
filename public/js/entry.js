// Code here handles what happens when a user submits a new check in.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

// when user clicks add-btn
$("#add-btn").on("click", function (event) {
    event.preventDefault();

    // make a newUser obj
    var newCheckIn = {
        // user name from user name input
        // user_id: $("#username").val().trim(),
        // name from name input
        sleep_quality: $("#sleepQuality").val(),
        // phone number from mobile input
        sleep_amount: $("#sleepDuration").val().trim(),
        // user name from user name input
        mood_rating: $("#moodRating").val(),
        // name from name input
        mood_type: $("#moodType").val(),
        // phone number from mobile input
        diet_quality: $("#dietRating").val(),
        // name from name input
        stress_level: $("#stressRating").val(),
        // phone number from mobile input
        user_entry: $("#userLog").val().trim(),

    };

    // send an AJAX POST-request with jQuery
    $.post("/api/checkin", newCheckIn)
        // on success, run this callback
        .then(function (data) {
            // log the data we found
            console.log(data);
            // tell the user we're adding a user with an alert window
            alert("Adding check in...");
        });

    // empty each input box by replacing the value with an empty string
    $("#sleepQuality").val("");
    $("#sleepDuration").val("");
    $("#moodRating").val("");
    $("#moodType").val("");
    $("#dietRating").val("");
    $("#username").val("");
    $("#stressRating").val("");
    $("#userLog").val("");


});
