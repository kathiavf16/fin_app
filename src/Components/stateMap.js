
import React, { useRef, useEffect, useState } from "react";
import { select, geoPath, geoAlbersUsa, min, max, scaleLinear } from "d3";
import useResizeObserver from "./useResizeObserver";
import data from "./states.json"


function stateMap() {

  const path = d3.geoPath()

  const svg = d3.select(DOM.svg(975, 1000))
    .style('font', '0.8em sans-serif')
    .style('text-anchor', 'middle')
    .style('fill', '#426080')

  // Initializing graph text
  svg.append('text')
    .attr('class', 'bartext')
    .attr('x', (width / 2))
    .attr('y', 680)
    .style('font-size', '16px')
    .text('Number of tweets mentioning COVID-19 by date:');

  svg.append('text')
    .attr('class', 'bartextState')
    .attr('x', (width / 2))
    .attr('y', 705)
    .style('font-size', '16px')
    .style('font-weight', 'bold')
    .style('fill', '#CC442F')
    .text('California');

  svg.append('text')
    .attr('x', (width / 2))
    .attr('y', 730)
    .style('font-size', '16px')
    .text('State Population:');

  svg.append('text')
    .attr('class', 'bartextPop')
    .attr('x', (width / 2))
    .attr('y', 755)
    .style('font-size', '16px')
    .style('font-weight', 'bold')
    .style('fill', '#CC442F')
    .text("39512223");

  svg.append('text')
    .attr('x', (width / 2))
    .attr('y', 950)
    .style('font-size', '12px')
    .text('Date in March')

  // Adds the map
  svg.append('g')
    .selectAll('path')
    .data(topojson.feature(us, us.objects.states).features)
    .enter().append('path')
    .attr('class', 'stateShape')
    .attr('d', path)
    .style('cursor', 'pointer')
    .attr('fill', d => {
      return (d.id == "06") ? '#CC442F' : '#6eabcc'
    })
    .attr('opacity', d => {
      return (d.id == "06") ? 1 : .7
    })
    .on('click', d => {
      d3.selectAll('.stateShape')
        .attr('fill', '#6eabcc')
        .attr('opacity', .7);
      const id = d.id; // d.id is the number code for the state
      outline.attr('d', path(d));
      update(state_converter.find((d) => {
        return d.id == id
      }).stateAbr);
    });

  // Outlines the states in white
  svg.append('path')
    .datum(topojson.mesh(us, us.objects.states, (a, b) => a !== b))
    .attr('fill', 'none')
    .attr('stroke', 'white')
    .attr('stroke-linejoin', 'round')
    .attr('d', path);

  // Changes fill of clicked state
  const outline = svg.append('path')
    .attr('fill', '#CC442F')
    .attr('stroke', 'white')
    .attr('stroke-linejoin', 'round');

  // Bar chart
  svg.append('g')
    .attr('class', 'bars')
    .attr('fill', '#6eabcc')
    .selectAll('rect')
    .data(tweet_data)
    .join('rect')
    .attr('x', (d, i) => x(i))
    .attr('y', d => y(d.CA))
    .attr('height', d => y(0) - y(d.CA))
    .attr('width', x.bandwidth())
    .style('opacity', 0.7);

  svg.append('g')
    .call(xAxis);

  svg.append('g')
    .call(yAxis);

  // Updates the bar graph for the clicked state
  function update(key) {
    d3.select('.bars').selectAll('rect')
      .attr('y', y(0))
      .attr('height', 0)
      .transition() // bar graph animation
      .duration(800)
      .attr('y', (d) => {
        return y(d[key])
      })
      .attr('height', (d) => {
        return y(0) - y(d[key])
      })
      .delay((d, i) => {
        console.log(i);
        return (i * 20)
      });

    d3.selectAll('.bartextState').remove()
    d3.selectAll('.bartextPop').remove()

    let stateName = state_converter.find((d) => {
      return d.stateAbr == key
    }).stateName

    svg
      .append('text') // adds new bar graph title
      .attr('class', 'bartextState')
      .attr('x', (width / 2))
      .attr('y', 705)
      .style('font-size', '16px')
      .style('font-weight', 'bold')
      .style('fill', '#CC442F')
      .text(stateName)

    svg // adds population
      .append('text')
      .attr('class', 'bartextPop')
      .attr('x', (width / 2))
      .attr('y', 755)
      .style('font-size', '16px')
      .style('font-weight', 'bold')
      .style('fill', '#CC442F')
      .text(pop_data.find((d) => {
        return d.NAME == stateName
      }).POPESTIMATE2019);
  }

  return svg.node()



}
