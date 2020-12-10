import React from "react";
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

export default function BarChartCus({data, key1, key2, xAxis, yAxis}) {
  return (
    <div className="bar-cus">
    <BarChart
      layout="vertical"
      height={1200}
      width={900}
      data={data}
      margin={{
    top: 5, right: 0, left: 100, bottom: 5,
    }}
                  >

  <CartesianGrid strokeDasharray="3 3" />
  <XAxis type="number" dataKey={xAxis} tick={false} />
  <YAxis type="category" dataKey={yAxis} />
  <Tooltip formatter={(value) => new Intl.NumberFormat('en').format(value)} />
  <Legend />
  <Bar dataKey={key1} fill="#C34A36" tickFormatter={(value) => new Intl.NumberFormat('en').format(value)}/>


</BarChart>

    </div>
  );
}
