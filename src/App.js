import React, { useState, useEffect } from "react"
import Iframe from 'react-iframe'
import worthdata from "./Data/raceData.json"
import incomedata from "./Data/income-debt.json"
import raceregion from "./Data/race_region.json"
import datatable from "./Data/datatable.json"
import stockregion from "./Data/stock_region.json";
import BarChartCus from "./Components/BarChartCus.js"
import Linechart from "./Components/Linechart.js"
import CustomBar from "./Components/CustomBar.js"
import CustomBar2 from "./Components/CustomBar2.js"
//import StackedBar from "./Components/StackedBar.js"
import Piech from "./Components/Piech.js"
import ReactTooltip from 'react-tooltip'
import "./App.css"
import Navbar from "./Components/Navbar"
import Section from "./Components/Section"
//import Sectionmap from "./Components/Sectionmap"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'
import Card from "./Components/Card"
import MapChart from "./Components/MapChart"
import ReactFlexyTable from 'react-flexy-table'
import 'react-flexy-table/dist/index.css'
//import Dropdown from "./Components/Dropdown"



function App() {

  // const [colorScale, SetColorScale] = d3.scaleThreshold()
  //   .domain([100000, 1000000, 10000000, 30000000, 100000000, 500000000])
  //   .range(d3.schemeBlues[7]);

const [tcontent, setContent] = useState("New York") //tooltip
const [states, setState] = useState("New York") //filteredata
const [region, setRegion] = useState("Pacific") //filteredata
const [stock, setStock] = useState("Pacific") //filteredata


const filteredata = worthdata.filter(state => state.State === states);
const income = incomedata.filter(state => state.State === states);
const sregion = raceregion.filter(select => select.DIVISION === region)
const stocks = stockregion.filter(selected => selected.DIVISION === region)

console.log("region", filteredata, income, raceregion, sregion, region, stock)
    return (

      <div className="App">
        <Navbar />
        <Section
          sectiontitle={"Introduction"}
          subcontent3={"Financial Literacy survey reveals some good news about savings and consumer debt levels but yields some unsettling details regarding access to home ownership and the barriers faced by a significant number of aspirational home owners."}
          title="Wealth and Finanacial Literacy - Are Gen Z and Millenials Ready For The Future?"
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
          sectiontitle={"Demographics of "}
          regionselection={region}
          title="Financial Strength by State"
          subtitle={"enter text here"}
          text={<div>Overview of {states}</div>}
          subcontent3={<div>
            <p>Average Income of Top 1%</p>
            <p>Average Income of bottom 99%</p>
            <p>Gini Coefficient</p>
            <p>Financial Literacy Grade</p>
            <br></br>
          </div>}
          content={<div>
          <MapChart setTooltipContent={setContent} setState={setState} setRegion={setRegion} setStock={setStock}  colorScale={"red"}/>
          <ReactTooltip place="top" type="dark" effect="float">{tcontent}</ReactTooltip>
          </div>}
          dark={false}
          id="section2"
        />
        <Section
          sectiontitle={"Demographics of "}
          selection={states}
          title="Socioeconomic Indicators: "
          subtitle={"OVERALL CONSUMERS REPORT:"}
          content={<Linechart/>}
          text={"access to home ownership and the barriers faced by a significant number of aspirational home owners."}
          dark={true}
          id="section3"
        />
        <Section
          sectiontitle={"Cost of Living by State "}
          title="How Much You Need to Retire Comfortably in Each State?"
          content={<ReactFlexyTable className="Flex-table" data={datatable} sortable filterable
          nonFilterCols={["Avg. Debt of Graduate", "Avg. Debt Rank", "% of Graduates with Debt", "% with Debt Rank", "Fall enrollment - Undergrads total","Tuition and Fees (in-district/in-state)","Total Cost of Attendance (on-campus)"]} pageSize={6} />}
          titlesubcontent={"Best 5 States for Retirement"}
          subcontent={<CustomBar/>}
          titlesubcontent2={"Worst 5 States for Retirement"}
          subcontent2={<CustomBar2/>}
          dark={false}
          id="section4"
        />
        <Section
          sectiontitle={"Steps for Financial Wellness"}
          title="Steps for Financial Wellness"

          content={
            <Iframe width="80%"
              height="855"
              url="https://observablehq.com/embed/@kathiavf16/tvmchart?cell=viewof+salary&cell=viewof+employeePercentage&cell=viewof+employerPercentage&cell=viewof+interest&cell=viewof+yearsInvestment&cell=chart"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"/>}

          subtitle={"Steps to Financial Wellbeing"}
          dark={true}
          id="section5"
        />
        <Section
          sectiontitle={"About the Data"}
          title="About the Data"
          subcontent={"https://www.calculatorsoup.com/calculators/financial/retirement-savings-calculator.php?src=link_copied"}
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
