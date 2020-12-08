import React, {memo} from "react";
import { scaleQuantize } from "d3-scale";
import { geoCentroid } from "d3-geo";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation
} from "react-simple-maps";

import allStates from "../Data/statesk.json";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";
//const [content, setContent] = useState("");

const offsets = {
  VT: [50, -8],
  NH: [34, 2],
  MA: [30, -1],
  RI: [28, 2],
  CT: [35, 10],
  NJ: [34, 1],
  DE: [33, 0],
  MD: [47, 10],
  DC: [49, 21]
};

const colorScale = scaleQuantize()
  .domain([1, 10])
  .range([
    "#ffedea",
    "#ffcec5",
    "#ffad9f",
    "#ff8a75",
    "#ff5533",
    "#e2492d",
    "#be3d26",
    "#9a311f",
    "#782618"
  ]);

const MapChart = ({ setTooltipContent, setState, setRegion, colorScale, setStock, setIncome1, setIncome99, setGrade, setCoefficient}) => {
  return (
    <ComposableMap data-tip="" projection="geoAlbersUsa">
      <Geographies geography={geoUrl}>
        {({ geographies }) => (
          <>
            {geographies.map(geo => (
              <Geography
                key={geo.rsmKey}
                stroke="#FFF"
                geography={geo}
                fill={() => {
                  const curs = allStates.find(s => s.val === geo.id);
                  colorScale(curs ? curs.val : "#EEE")}}
                onClick={() => {
                    const { name } = geo.properties;
                    const curs = allStates.find(s => s.val === geo.id);
                    console.log("prop:", curs, geo.properties)
                    setState(`${(curs.state)}`) //filtered value
                    setRegion(`${(curs.division)}`)
                    setStock(`${(curs.division)}`)
                    setIncome1(`${(curs.Average_income_of_the_top_1)}`)
                    setIncome99(`${(curs.Average_income_of_the_bottom_99)}`)
                    setGrade(`${(curs.grade)}`)
                    setCoefficient(`${(curs.top_bottom_ratio)}`)
                    console.log("state", curs.grade, geo.properties, curs.Average_income_of_the_top_1)
                  }}
                  onMouseEnter={() => {
                    const { name } = geo.properties;
                    const curs = allStates.find(s => s.val === geo.id);
                    console.log("prop:", curs, geo.properties)
                    setTooltipContent(`${curs.grade} - ${(curs.state)}`); //tooltip variable
                    console.log("state", curs.grade, geo.properties)
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: "grey",
                      outline: "none"
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
              />
            ))}
            {geographies.map(geo => {
              const centroid = geoCentroid(geo);
              const cur = allStates.find(s => s.val === geo.id);
              return (
                <g key={geo.rsmKey + "-name"}>
                  {cur &&
                    centroid[0] > -160 &&
                    centroid[0] < -67 &&
                    (Object.keys(offsets).indexOf(cur.id) === -1 ? (
                      <Marker coordinates={centroid}>
                        <text y="2" fontSize={14} textAnchor="middle">
                          {cur.id}
                        </text>

                      </Marker>
                    ) : (
                      <Annotation
                        subject={centroid}
                        dx={offsets[cur.id][0]}
                        dy={offsets[cur.id][1]}
                      >
                        <text x={4} fontSize={14} alignmentBaseline="middle">
                          {cur.id}
                        </text>
                      </Annotation>
                    ))}
                </g>
              );
            })}
          </>
        )}
      </Geographies>
    </ComposableMap>
  );
};

export default memo(MapChart);
