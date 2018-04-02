var dataset = [];

for (var i = 0; i < 35; i++) {
  var newNumber = Math.round(Math.random() * 30);
  dataset.push(newNumber);
}

d3
  .select("body")
  .selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  .attr("class", "bar")
  .style("height", function(d) {
    return d + "px";
  })
  .style("background-color", function(d) {
    if (d < 15) {
      return "green";
    } else if (d > 25) {
      return "purple";
    } else return "black";
  })
  .style("height", function(d) {
    var barHeight = d * 5; //Scale up by factor of 5
    return barHeight + "px";
  });
