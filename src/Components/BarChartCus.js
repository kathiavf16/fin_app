import React from "react";
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

export default function BarChartCus({data, key1, key2, xAxis, yAxis}) {
  return (
    <div className="bar-cus">
    <BarChart
      width={600}
      height={300}
      data={data}
      margin={{
    top: 5, right: 30, left: 20, bottom: 5,
    }}
                  >
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey={xAxis} />
  <YAxis dataKey={yAxis}/>
  <Tooltip />
  <Legend />
  <Bar dataKey={key1} fill="#8884d8" />
  <Bar dataKey={key2} fill="#82ca9d" />

</BarChart>

    </div>
  );
}
