import React, { PureComponent, useState } from 'react';
import { Charts, ChartContainer, ChartRow, YAxis, LineChart } from "react-timeseries-charts"
import surveydata from "../Data/race_region.json"

const data = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },

];
const filteredata = surveydata.filter(state => state.REGION === "West")
export default class Timeseries extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/90v76x08/';

  render() {
    return (
      <ChartContainer timeRange={series1.timerange()} width={800}>
    <ChartRow height="200">
        <YAxis id="axis1" label="AUD" min={0.5} max={1.5} width="60" type="linear" format="$,.2f"/>
        <Charts>
            <LineChart axis="axis1" series={series1}/>
            <LineChart axis="axis2" series={series2}/>
        </Charts>
        <YAxis id="axis2" label="Euro" min={0.5} max={1.5} width="80" type="linear" format="$,.2f"/>
    </ChartRow>
</ChartContainer>
    );
  }
}
