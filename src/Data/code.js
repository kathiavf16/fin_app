import React, { useState, useEffect } from "react"
import {csv, autoType} from "d3"
import data from "./Components/states.json"
import states from "./Components/states_obs.csv"
import "./App.css"
import Navbar from "./Components/Navbar"
import Section from "./Components/Section"
import dummyText from "./DummyText"
import GeoChart from "./Components/GeoChart"
import USAMap from "react-usa-map";


content={<ReactFlexyTable data={[]}/>}
subcontent={
  <div>
  <h2>World Map with d3-geo</h2>
  <h2>Select property to highlight</h2>
  <select
    value={data}
    onChange={event => setData(event.target.value)}>
  <option value="CENSUSAREA">Census Area</option>
  <option value="STATE">State ID</option>
  </select>
 </div>}

// const [data, setData] = useState();
//   useEffect(() => {
//     csv(states).then(data => {
//       setData(data)
//     })
//   }, []);
//console.log("datae: ", data)


function App() {

  const [data, setData] = useState();
    useEffect(() => {
      csv(states).then(data => {
        setData(data)
      })
    }, []);
  console.log("datae: ", data)


const [property, setProperty] = useState("CENSUSAREA");

    return (
      <div className="App">
        <Navbar />
        <Section
          title="Financial Literacy in The U.S."
          subtitle={"Click on the state to see financial literacy grade"}
          content={<GeoChart data={data} property={property}/>}
          subcontent={
            <div>
            <h2>World Map with d3-geo</h2>
            <h2>Select property to highlight</h2>
            <select
              value={property}
              onChange={event => setProperty(event.target.value)}>
            <option value="CENSUSAREA">Census Area</option>
            <option value="STATE">State ID</option>
            </select>
           </div>}
          dark={false}
          id="section1"
        />
        <Section
          title="Section 2"
          subtitle={"Kathia Vargas Feliz"}
          dark={false}
          id="section2"
        />
        <Section
          title="Section 3"
          subtitle={dummyText}
          dark={true}
          id="section3"
        />
        <Section
          title="Section 4"
          subtitle={dummyText}
          dark={false}
          id="section4"
        />
        <Section
          title="Section 5"
          subtitle={dummyText}
          dark={true}
          id="section5"
        />
      </div>
    );
}



export default App;
