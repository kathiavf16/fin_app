import React, { useState, useEffect } from "react"
import * as d3 from "d3"
import worthdata from "./Data/raceData.json"
import incomedata from "./Data/income-debt.json"
import datatable from "./Data/datatable.json"
import BarChartCus from "./Components/BarChartCus.js"
import StackedBar from "./Components/StackedBar.js"
//import Calculador from "./Components/Calculador.js"
import Pie from "./Components/Pie.js"
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

  // const [colorScale, SetColorScale] = d3.scaleThreshold()
  //   .domain([100000, 1000000, 10000000, 30000000, 100000000, 500000000])
  //   .range(d3.schemeBlues[7]);

const [tcontent, setContent] = useState("New York") //tooltip
const [states, setState] = useState("New York") //filteredata


const filteredata = worthdata.filter(state => state.State === states);
const income = incomedata.filter(state => state.State === states);
console.log("data", filteredata, income)
    return (

      <div className="App">
        <Navbar />
        <Section
          sectiontitle={"Intro"}
          title="Wealth and Finanacial Literacy - Are Gen Z and Millenials Ready For The Future?"
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
          selection={states}
          title="Financial Strength by State"
          subtitle={"Data Table Overview"}
          content={<div>
          <MapChart setTooltipContent={setContent} setState={setState} colorScale={"red"}/>
          <ReactTooltip place="top" type="dark" effect="float">{tcontent}</ReactTooltip>
          </div>}
          subcontent={<BarChartCus data={income} key1={"amount"}  xAxis={"type"} />}
          subcontent2={<Pie/>}
          dark={false}
          id="section2"
        />
        <Section
          selection={states}
          title="Socioeconomic Indicators: "
          subtitle={"OVERALL CONSUMERS REPORT:"}
          content={<BarChartCus data={filteredata} key1={"Net Worth"} xAxis={"Race"}/>}
          subcontent={<StackedBar/>}
          subcontent2={<Pie/>}
          text={"access to home ownership and the barriers faced by a significant number of aspirational home owners."}
          dark={true}
          id="section3"
        />
        <Section
          selection={states}
          title="How Much You Need to Retire Comfortably in Each State?"
          subcontent={<Dropdown/>}
          content={<ReactFlexyTable className="Flex-table" data={datatable} sortable filterable
          nonFilterCols={["Avg. Debt of Graduate", "Avg. Debt Rank", "% of Graduates with Debt", "% with Debt Rank", "Fall enrollment - Undergrads total","Tuition and Fees (in-district/in-state)","Total Cost of Attendance (on-campus)"]} pageSize={13} />}
          dark={false}
          id="section4"
        />
        <Section
          title="Steps for Financial Wellness"
          subtitle={"Steps to Financial Wellbeing"}
          dark={true}
          id="section5"
        />
        <Section
          title="About the Data"
          subtitle={"https://www.calculatorsoup.com/calculators/financial/retirement-savings-calculator.php?src=link_copied"}
          content={<div>
          <p>Financial Literacy survey reveals some
          good news about savings and consumer debt levels but yields some
          unsettling details regarding access to home ownership and the
          barriers faced by a significant number of aspirational home owners.</p>
          </div>}
          dark={true}
          id="section6"
        />
      </div>
    );
}
export default App;
