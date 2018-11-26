// When the document loads (when the /user/:id route is triggered), populate the chart with the user's data
$(document).ready(function() {
  // for now, this is hard-coded to pull in entries from the user with UserId=1
  $.get("/api/checkin/1", function(data) {
    console.log("user = " + data[0].UserId);

    // Load the Visualization API and the corechart package.
    google.charts.load("current", {
      packages: ["corechart"]
    });

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawChart);

    // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.
    var moodData = data;

    // This came right from Google Charts docs.
    function drawChart() {
      console.log("data " + moodData);

      // Count instances of mood types
      var glad = 0;
      var sad = 0;
      var mad = 0;
      var afrad = 0;

      // loop through the JSON object, pulling out the mood_type instances
      for (var key in moodData) {
        var mood_type = moodData[key].mood_type;
        if (mood_type === 1) {
          glad++;
        } else if (mood_type === 2) {
          sad++;
        } else if (mood_type === 3) {
          mad++;
        } else if (mood_type === 4) {
          afrad++;
        }
      }

      console.log("glad " + glad);
      console.log("sad " + sad);
      console.log("mad " + mad);
      console.log("afrad " + afrad);

      // Create the data table.
      var pie = new google.visualization.DataTable();
      pie.addColumn("string", "Mood");
      pie.addColumn("number", "Total");
      pie.addRows([
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
      chart.draw(pie, options);

      google.charts.load("current", {
        packages: ["calendar"]
      });
    }
  });
});
