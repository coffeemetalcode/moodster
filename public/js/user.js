// Dummy data. Real data to be provided by MySQL / Sequelize as JSON object

var users = {
  "david": {
    "user_id": 1,
    "user_name": "dbstocker",
    "person_name": "David Stocker",
    "phone_number": "8043354241",
    "entries": [
      {
        "entry": 1,
        "sleep_quality": 4,
        "sleep_amount": 7,
        "mood_rating": 3,
        "mood_type": "glad",
        "diet_quality": 3,
        "stress_level": 4,
        "user_entry": "I'm tired a lot."
      },
      {
        "entry": 2,
        "sleep_quality": 3,
        "sleep_amount": 6,
        "mood_rating": 3,
        "mood_type": "glad",
        "diet_quality": 3,
        "stress_level": 4,
        "user_entry": "I'm really not sleeping enough."
      },
      {
        "entry": 3,
        "sleep_quality": 3,
        "sleep_amount": 5,
        "mood_rating": 2,
        "mood_type": "afrad",
        "diet_quality": 3,
        "stress_level": 5,
        "user_entry": "I'm concerned about this project."
      }
    ]
  }
}

console.log(users.david.entries[2].mood_type);

// Load the Visualization API and the corechart package.
google.charts.load("current", {
  packages: ["corechart"]
});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.

var entry;
var mood;

function drawChart() {
  // Set user_chart to current user
  user_entry = users.david.entries;

  // Count instances of mood types
  var glad = 0;
  var sad = 0;
  var mad = 0;
  var afrad = 0;

  // console.log("entries[0].mood_type = " + user_entry[0].mood_type);

  for (var m = 0; m < users.david.entries.length; m++) {
    if (user_entry[m].mood_type === "glad") { 
      glad++;
    } else if (user_entry[m].mood_type === "sad") {
      sad++;
    } else if (user_entry[m].mood_type === "mad") {
      mad++;
    } else if (user_entry[m].mood_type === "afrad") {
      afrad++;
    }
  }

  console.log("glad " + glad);
  console.log("sad " + sad);
  console.log("mad " + mad);
  console.log("afrad " + afrad);

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn("string", "Mood");
  data.addColumn("number", "Total");
  data.addRows(
    [
      ["Glad", glad],
      ["Sad", sad],
      ["Mad", mad],
      ["Afrad", afrad]
    ]);

  // Set chart options
  var options = {
    title: "Moods Expressed",
    is3D: false,
    width: 400,
    height: 300
  };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(
    document.getElementById("chart_div")
  );
  chart.draw(data, options);

  google.charts.load("current", {
    packages: ["calendar"]
  });
}
