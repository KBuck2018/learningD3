var data = [300, 86, 120, 210, 504, 900];

var x = d3.scale
  .linear()
  .domain([0, d3.max(data)])
  .range([0, 420]);

d3
  .select(".chart")
  .selectAll("div")
  .data(data)
  .enter()
  .append("div")
  .style("width", function(d) {
    //place the function of the d3.scale  before the data parameter so that it returns the scaled data
    return x(d) + "px";
  })
  .text(function(d) {
    return "$ " + d;
  });
