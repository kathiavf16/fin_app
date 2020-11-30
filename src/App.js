import React, { useState, useEffect } from "react"
import BarChartCus from "./Components/BarChartCus.js"
import StackedBar from "./Components/StackedBar.js"
import Pie from "./Components/Pie.js"
//import {json, csv} from "d3";
import student_data from "./Data/student.json"
import worthdata from "./Data/raceData.json"
import datatable from "./Data/datatable.json"
import ReactTooltip from 'react-tooltip'
import "./App.css"
import Navbar from "./Components/Navbar"
import Section from "./Components/Section"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'
import Card from "./Components/Card"
import MapChart from "./Components/MapChart"
import ReactFlexyTable from 'react-flexy-table'
import 'react-flexy-table/dist/index.css'
import Dropdown from "./Components/Dropdown"



function App() {



const [tcontent, setContent] = useState("New York") //tooltip
const [data, setData] = useState([])
useEffect(() => {
  const data = require("./Data/student.json")
  setData(data);

}, []);
console.log("data", data, "set:",tcontent, setContent)

const filteredata = worthdata.filter(state => state.State === tcontent);
console.log("data", filteredata)
    return (

      <div className="App">
        <Navbar />
        <Section
          title="Importance of Financial Literacy"
          subtitle={"Overview"}
          content={<Carousel autoPlay showArrows={true} showThumbs={false}>
            <Card
              url={"https://entrepreneurship.babson.edu/wp-content/uploads/2019/08/Babson-Financial-Literacy-Project.jpg"}
              legend={"fisrt image"}
              />
            <Card
              url="https://treasurer.sc.gov/media/81532/financial-empowerment.jpg?anchor=center&mode=crop&width=670&upscale=false&rnd=132066232320000000"
              legend="second image"/>
            <Card/>
            <Card/>
            <Card/>

          </Carousel>}
          dark={true}
          id="section1"
        />
        <Section
          selection={tcontent}
          title="Is your state making the grade?"
          subtitle={"Data Table Overview"}
          content={<div>
          <MapChart setTooltipContent={setContent} />
          <ReactTooltip place="top" type="dark" effect="float">{tcontent}</ReactTooltip>
          </div>}
          dark={false}
          id="section2"
        />
        <Section
          selection={tcontent}
          title="Socioeconomic Indicators: "
          subtitle={"OVERALL CONSUMERS REPORT:"}
          content={<BarChartCus data={filteredata}/>}
          subcontent={<StackedBar/>}
          subcontent2={<Pie/>}
          text={"access to home ownership and the barriers faced by a significant number of aspirational home owners."}
          dark={true}
          id="section3"
        />
        <Section
          selection={tcontent}
          title="State Rankings"
          subcontent={<Dropdown/>}
          content={<ReactFlexyTable className="Flex-table" data={datatable} sortable filterable
          nonFilterCols={["Avg. Debt of Graduate", "Avg. Debt Rank", "% of Graduates with Debt", "% with Debt Rank", "Fall enrollment - Undergrads total","Tuition and Fees (in-district/in-state)","Total Cost of Attendance (on-campus)"]} pageSize={13} />}
          dark={false}
          id="section4"
        />
        <Section
          title="About the Data"
          subtitle={"Summary"}
          content={<div>
          <p>Financial Literacy survey reveals some
          good news about savings and consumer debt levels but yields some
          unsettling details regarding access to home ownership and the
          barriers faced by a significant number of aspirational home owners.</p>
          </div>}
          dark={true}
          id="section5"
        />
      </div>
    );
}
export default App;
