import React from "react";
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

export default function BarChartCus({data}) {
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
  <XAxis dataKey="Race" />
  <YAxis dataKey="Net Worth"/>
  <Tooltip />
  <Legend />
  <Bar dataKey="Net Worth" fill="#8884d8" />

</BarChart>

    </div>
  );
}
