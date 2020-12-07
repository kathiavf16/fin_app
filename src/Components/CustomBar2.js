import React from 'react';
import PropTypes from 'prop-types';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer,
} from 'recharts';
import { scaleOrdinal } from 'd3-scale';
import { schemeOranges} from 'd3-scale-chromatic';
import datas from "../Data/topstates.json";
const colors = scaleOrdinal(schemeOranges[5]).range();

const filteredata = datas.filter(index => index.livingindex >= 1.342 &&  index.livingindex < 100)
console.log("top",filteredata)

const getPath = (x, y, width, height) => `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
          Z`;

const TriangleBar = (props) => {
  const {
    fill, x, y, width, height,
  } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

TriangleBar.propTypes = {
  fill: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};


export default function CustomBar (){

    return (
      <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
      <BarChart
        width={400}
        height={300}
        data={filteredata}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="abbr" angle={0} />
        <YAxis />
        <Tooltip />
        <Bar dataKey="Yearly Expenses +65yo" fill="red" shape={<TriangleBar />}>
          {
            filteredata.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 10]} />
            ))
          }
        </Bar>
      </BarChart>
      </ResponsiveContainer>
      </div>

    );
  }
