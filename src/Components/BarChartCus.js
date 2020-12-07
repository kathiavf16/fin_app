import React from "react";
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

export default function BarChartCus({data, key1, key2, xAxis, yAxis}) {
  return (
    <div className="bar-cus">
    <BarChart
      width={600}
      layout="vertical"
      height={300}
      data={data}
      margin={{
    top: 5, right: 0, left: 55, bottom: 5,
    }}
                  >

  <CartesianGrid strokeDasharray="3 3" />
  <XAxis type="number" dataKey={xAxis} />
  <YAxis type="category" dataKey={yAxis}/>
  <Tooltip />
  <Legend />
  <Bar dataKey={key1} fill="#C34A36" />


</BarChart>

    </div>
  );
}
