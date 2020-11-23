import { select, arc } from "d3";

const svg = select("svg");

// The "unary plus" operator ("+") converts a string into a number
const width = +svg.attr("width");
const height = svg.attr("height");

const g = g
  .append("g")
  .attr("transform", `translate(${width / 2}, ${height / 2})`);

// Method chaining for the circle of the face
const circle = g
  .append("circle")
  .attr("r", height / 2)
  .attr("fill", "yellow")
  .attr("stroke", "black");

const eyeSpacing = 100;
const eyeYOffset = -70;
const eyeRadius = 40;
const eyebrowWidth = 70;
const eyebrowHeight = 15;
const eyebrowYOffset = -70;

const eyesG = g.append("g").attr("transform", `translate(0, ${eyeYOffset})`);

// Method chaining for the left eye
const leftEye = eyesG
  .append("circle")
  .attr("r", eyeRadius)
  .attr("cx", -eyeSpacing);

// Method chaining for the right eye
const rightEye = eyesG
  .append("circle")
  .attr("r", eyeRadius)
  .attr("cx", eyeSpacing);

const eyebrowsG = eyesG
  .append("g")
  .attr("transform", `translate(0, ${eyebrowYOffset})`);

eyebrowsG
  .transition()
  .duration(2000)
  .attr("transform", `translate(0, ${eyebrowYOffset - 50})`)
  .transition()
  .duration(2000)
  .attr("transform", `translate(0, ${eyebrowYOffset})`);

// Left Eyebrow
const leftEyebrow = eyebrowsG
  .append("rect")
  .attr("x", -eyeSpacing - eyebrowWidth / 2)
  .attr("width", eyebrowWidth)
  .attr("height", eyebrowHeight);

// Right Eyebrow
const rightEyebrow = eyebrowsG
  .append("rect")
  .attr("x", eyeSpacing - eyebrowWidth / 2)
  .attr("width", eyebrowWidth)
  .attr("height", eyebrowHeight);

// Method chaining for the mouth
const mouth = svg.append("path").attr(
  "d",
  arc()({
    innerRadius: 80,
    outerRadius: 100,
    startAngle: Math.PI / 2,
    endAngle: (Math.PI * 3) / 2,
  })
);
