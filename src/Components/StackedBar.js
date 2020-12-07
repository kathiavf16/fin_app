import React, { PureComponent, useState } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import surveydata from "../Data/race_region.json"

const data = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },

];
const filteredata = surveydata.filter(state => state.REGION === "West")
export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/90v76x08/';

  render() {
    return (
      <BarChart
        width={800}
        height={300}
        data={filteredata}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis  dataKey="RACE"/>
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="TOTAL" stackId="a" fill="#8884d8" />
        <Bar dataKey="" stackId="a" fill="#82ca9d" />
      </BarChart>
    );
  }
}
