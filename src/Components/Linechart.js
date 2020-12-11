import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import data from "../Data/wealth_gen.json"

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
      <div style={{ width: '90%', height: 700 }}>
      <ResponsiveContainer>
      <LineChart
        width={1000}
        height={600}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Silent" stroke="#045762" activeDot={{ r: 8 }} strokeWidth={2}/>
        <Line type="monotone" dataKey="BabyBoom" stroke="#799351" strokeWidth={2} activeDot={{ r: 6 }}/>
        <Line type="monotone" dataKey="GenX" stroke="#ffa36c" strokeWidth={2} activeDot={{ r: 10 }}/>
        <Line type="monotone" dataKey="Millennial" stroke="#a20a0a" activeDot={{ r: 12 }} strokeWidth={2} />

      </LineChart>
    </ResponsiveContainer>
  </div>
    );
  }
}
