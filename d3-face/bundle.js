(function (d3) {
  "use strict";

  var svg = d3.select("svg");

  var width = +svg.attr("width");
  var height = +svg.attr("height");

  var g = svg
    .append("g")
    .attr("transform", "translate(" + width / 2 + ", " + height / 2 + ")");

  var circle = g.append("circle");

  circle.attr("r", height / 2);
  circle.attr("fill", "yellow");
  circle.attr("stroke", "black");

  var eyeSpacing = 101;
  var eyeYOffset = -89;
  var eyeRadius = 40;
  var eyebrowWidth = 70;
  var eyebrowHeight = 20;
  var eyebrowYOffset = -70;

  var eyesG = g
    .append("g")
    .attr("transform", "translate(0, " + eyeYOffset + ")");

  var leftEye = eyesG
    .append("circle")
    .attr("r", eyeRadius)
    .attr("cx", -eyeSpacing);

  var rightEye = eyesG
    .append("circle")
    .attr("r", eyeRadius)
    .attr("cx", eyeSpacing);

  var eyebrowsG = eyesG
    .append("g")
    .attr("transform", "translate(0, " + eyebrowYOffset + ")");

  eyebrowsG
    .transition()
    .duration(2000)
    .attr("transform", "translate(0, " + (eyebrowYOffset - 50) + ")")
    .transition()
    .duration(2000)
    .attr("transform", "translate(0, " + eyebrowYOffset + ")");

  var leftEyebrow = eyebrowsG
    .append("rect")
    .attr("x", -eyeSpacing - eyebrowWidth / 2)
    .attr("width", eyebrowWidth)
    .attr("height", eyebrowHeight);

  var rightEyebrow = eyebrowsG
    .append("rect")
    .attr("x", eyeSpacing - eyebrowWidth / 2)
    .attr("width", eyebrowWidth)
    .attr("height", eyebrowHeight);

  var mouth = g.append("path").attr(
    "d",
    d3.arc()({
      innerRadius: 150,
      outerRadius: 170,
      startAngle: Math.PI / 2,
      endAngle: (Math.PI * 3) / 2,
    })
  );
})(d3);
//# sourceMappingURL=bundle.js.map
