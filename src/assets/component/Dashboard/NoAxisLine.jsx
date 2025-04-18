import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const NoAxisLine = ({ data, width = 300, height = 100 }) => {
  const chartRef = useRef();

  useEffect(() => {
    d3.select(chartRef.current).selectAll("*").remove();

    const margin = { top: 10, right: 10, bottom: 20, left: 10 };

    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    const x = d3
      .scalePoint()
      .domain(data.map((d) => d.name))
      .range([margin.left, width - margin.right]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .nice()
      .range([height - margin.bottom, margin.top]);

    const line = d3
      .line()
      .x((d) => x(d.name))
      .y((d) => y(d.value));

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#3b82f6")
      .attr("stroke-width", 2)
      .attr("d", line);

    svg
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", (d) => x(d.name))
      .attr("cy", (d) => y(d.value))
      .attr("r", 3)
      .attr("fill", "#3b82f6");

    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickSize(0))
      .select(".domain")
      .remove(); // remove the line under axis
  }, [data, width, height]);

  return <div ref={chartRef}></div>;
};

export default NoAxisLine;
