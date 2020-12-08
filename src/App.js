import React, { useState, useEffect } from "react"
import Iframe from 'react-iframe'
import worthdata from "./Data/raceData.json"
import incomedata from "./Data/income-debt.json"
import raceregion from "./Data/race_region.json"
import datatable from "./Data/datatable.json"
import inequality from "./Data/statesk.json"
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
const [avgincome1, setIncome1] = useState("$2,202,480")
const [avgincome99, setIncome99] = useState("$49,617")
const [grade, setGrade] = useState("B")
const [coefficient, setCoefficient] = useState("44.4")


const filteredata = worthdata.filter(state => state.State === states);
const income = incomedata.filter(state => state.State === states);
const sregion = raceregion.filter(select => select.DIVISION === region)
const incomes = inequality.filter(selected => selected.Average_income_of_the_top_1 === avgincome1)
const incomes99 = inequality.filter(selected => selected.Average_income_of_the_bottom_99 === avgincome99)
const grades = inequality.filter(select => select.grade === grade)
const coefficients = inequality.filter(select => select.top_bottom_ratio=== coefficient)

console.log("region", sregion, region, "ine", incomes, avgincome99, grade, coefficient)
    return (

      <div className="App">
        <Navbar />
        <Section
          sectiontitle={"Introduction"}
          subcontent3={<div><p>"This visualization was created putting together findings from many different sources to bring
            awareness about the importance of financial literacy, and other concerns Americans are facing now when thinking about the outlook of their
            financial future"</p>
            </div>}
          placeholder={<div><p>The slide show below shows 10 eye-opening financial literacy stats. These stats represent the main issues Americans
          struggle with nowadays, and action needs to be taken to achieve a comfortable retirement.</p></div>}
          title="Wealth and Financial Literacy - Are Gen Z and Millenials Ready For The Future?"
          subcontent={"After learning about the main financial concerns of American lets learn about income inequality..."}
          subcontent2={""}
          content={<Carousel showArrows={true} showThumbs={false}>
            <Card
              url={"https://i.ibb.co/GWgj1cx/intro.png"}
              legend="INTRO"/>
            <Card
              url="https://i.ibb.co/vdnK6mP/Screen-Shot-2020-12-07-at-4-43-30-PM.png"
              legend="FACT NO.1"/>
            <Card
              url="https://i.ibb.co/MsTD5Cq/two.png"
              legend="FACT NO.2"/>
            <Card
              url="https://i.ibb.co/wsBd4zY/Screen-Shot-2020-12-07-at-6-44-49-PM.png"
              legend="FACT NO.3"/>
            <Card
              url="https://i.ibb.co/SxyKGHt/Screen-Shot-2020-12-07-at-6-53-07-PM.png"
              legend="FACT NO.4"/>
            <Card
              url="https://i.ibb.co/QNtCXJ0/Screen-Shot-2020-12-07-at-6-56-59-PM.png"
              legend="FACT NO.5"/>
            <Card
              url="https://i.ibb.co/0KR9LbX/six.png"
              legend="FACT NO.6"/>
            <Card
              url="https://i.ibb.co/rx8WV7G/seven.png"
              legend="FACT NO.7"/>
            <Card
              url="https://i.ibb.co/TK0X2sy/eight.png"
              legend="FACT NO.8"/>
            <Card
              url="https://i.ibb.co/cw1bv79/nine.png"
              legend="FACT NO.9"/>
            <Card
              url="https://i.ibb.co/k1B31xF/ten.png"
              legend="FACT NO.10"/>
          </Carousel>}
          dark={true}
          id="section1"
        />
      <Section
          sectiontitle={<div>Overview of {states}</div>}
          title="Income Inequality by State"
          subtitle={"enter text here"}
          other={<div>
            <p>Average Income of bottom 99%: {avgincome99} </p>
            <p>Ratio of top 1% to bottom 99%: {coefficient}x</p>
          </div>}
          other2={<div>
            <p>Average Income of Top 1%: {avgincome1}</p>
            <p>Financial Literacy Grade: {grade}</p>
          </div>}
          subcontent3={<div>The top 1% make  {coefficient} times more than the bottom 99% in {states}</div>}
          content={<div>
          <MapChart setTooltipContent={setContent} setState={setState} setRegion={setRegion} setStock={setStock} setIncome1={setIncome1} setIncome99={setIncome99} setGrade={setGrade} setCoefficient={setCoefficient}  colorScale={"red"}/>
          <ReactTooltip place="top" type="dark" effect="float">{tcontent}</ReactTooltip>
          <p>Wealth is highly concentrated among the richest members of each state. Because of rising
            inequality throughout the economy, the very wealthy have amassed enormous stockpiles of treasure, leaving little for everyone else.</p>
          </div>}
          dark={false}
          id="section2"
        />
        <Section
          sectiontitle={"Generational Wealth Gap"}
          title="The Growing Generational Wealth Gap "
          subtitle={"OVERALL CONSUMERS REPORT:"}
          content={<Linechart/>}
          content2={<div><p>Note: Distributions by generation are defined by birth year as follows: Silent and Earlier=born before 1946,
            Baby Boomer=born 1946-1964, Gen X=born 1965-1980, and Millennial=born 1981-1996.</p></div>}
          text={<div><p>As young generations usher into adulthood, they inevitably begin to accumulate and inherit wealth, a trend that has broadly remained consistent.
                But what has changed recently is the rate of accumulation.</p>
              <p>In the U.S., household wealth has traditionally seen a relatively even distribution across different age groups. However, over the last 30 years,
                the U.S. Federal Reserve shows that older generations have been amassing wealth at a far greater rate than their younger cohorts.
                As the visual below shows, the older have been getting richer, and the younger have been starting further back than ever before.</p></div>}
          dark={true}
          id="section3"
        />
        <Section
          sectiontitle={"Cost of Retirement by State "}
          title="How Much You Need to Retire Comfortably in Each State?"
          content={<ReactFlexyTable className="Flex-table" data={datatable} sortable filterable
          nonFilterCols={["Avg. Debt of Graduate", "Avg. Debt Rank", "% of Graduates with Debt", "% with Debt Rank", "Fall enrollment - Undergrads total","Tuition and Fees (in-district/in-state)","Total Cost of Attendance (on-campus)"]} pageSize={6} />}
          text={<div><p>Having enough savings to afford a comfortable retirement has been an issue for a long time now. In fact, some economists have
            recently estimated that millennials will face even a harder challenge and should save almost half of their income if they wish to retire at
            65. However, the good news is that some parts of the country are friendlier on the wallet than others when it comes to retirement.</p></div>}
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
