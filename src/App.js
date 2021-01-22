import React, { useState} from "react"
import Iframe from 'react-iframe'
import worthdata from "./Data/statechart.json"
import incomedata from "./Data/income-debt.json"
import raceregion from "./Data/race_region.json"
import datatable from "./Data/datatable.json"
import inequality from "./Data/statesk.json"
import BarChartCus from "./Components/BarChartCus.js"
import Linechart from "./Components/Linechart.js"
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
          sectiontitle={<div><a href="https://github.com/kathiavf16/fin_app" target="_blank">GitHub Repo</a></div>}

          placeholder={<div>
            <p>It turns out many Americans aren’t financially literate. And they’re stressed about it.

In fact, a 2018 FINRA study found financial capability, stability, and confidence aren’t improving. Over 53% of adults say thinking about their financial situation makes them anxious.
Forty-four percent say discussing their finances is stressful.</p>
  <p>Younger Americans are feeling the greatest burden. The study found persisting and widening gaps between those who are struggling and those who are prospering financially — skewing generationally.
    Those between the ages of 18 to 34 have the highest levels of financial stress (63%) and anxiety (55%).</p>
            <p>The slide show below shows 10 eye-opening financial literacy stats.</p></div>}
          title="Wealth and Financial Literacy - Important Facts You Need to Know"
          subcontent2={<div><a href="https://www.opploans.com/oppu/articles/statistics-financial-literacy/" target="_blank">Reference: 10 Eye-Opening Financial Literacy Statistics</a><br></br></div>}
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
          subcontent3={<div>The top 1% makes  {coefficient} times more than the bottom 99% in {states}</div>}
          content={<div>
          <MapChart setTooltipContent={setContent} setState={setState} setRegion={setRegion} setStock={setStock} setIncome1={setIncome1} setIncome99={setIncome99} setGrade={setGrade} setCoefficient={setCoefficient}  colorScale={"red"}/>
          <ReactTooltip place="top" type="dark" effect="float">{tcontent}</ReactTooltip>
          </div>}
          subcontent={<div>
            <p> Income inequality has risen in every state since the 1970s and, in most states, it has grown in the post–Great Recession era. From 2009 to 2015, the incomes of the top 1 percent grew faster than the incomes of the bottom 99 percent in 43 states and the District of Columbia. The top 1 percent captured half or more of all income growth in nine states. In 2015, a family in the top 1 percent nationally received, on average, 26.3 times as much income as a family in the bottom 99 percent.</p>
            <p>Wealth is highly concentrated among the richest members of each state. Because of rising
              inequality throughout the economy, the very wealthy have amassed enormous stockpiles of treasure, leaving little for everyone else.</p>
          </div>}
          subcontent2={<div><a href="https://www.epi.org/publication/the-new-gilded-age-income-inequality-in-the-u-s-by-state-metropolitan-area-and-county/" target="_blank">Reference: The new gilded age</a></div>}
          dark={false}
          id="section2"
        />
        <Section
          sectiontitle={"Generational Wealth Gap"}
          title="The Growing Generational Wealth Gap "
          titlecontent={"Wealth by generation - % distribution"}
          content={<Linechart/>}
          content2={<div><p>Note: Distributions by generation are defined by birth year as follows: Silent and Earlier=born before 1946,
            Baby Boomer=born 1946-1964, Gen X=born 1965-1980, and Millennial=born 1981-1996.</p></div>}
          text={<div><p>As young generations usher into adulthood, they inevitably begin to accumulate and inherit wealth, a trend that has broadly remained consistent.
                But what has changed recently is the rate of accumulation.</p>
              <p>In the U.S., household wealth has traditionally seen a relatively even distribution across different age groups. However, over the last 30 years,
                the U.S. Federal Reserve shows that older generations have been amassing wealth at a far greater rate than their younger cohorts.
                As the visual below shows, the older have been getting richer, and the younger have been starting further back than ever before.</p></div>}
          dark={true}
          subcontent2={<div><a href="https://www.washingtonpost.com/business/2019/12/03/precariousness-modern-young-adulthood-one-chart/" target="_blank">Reference: The staggering millennial wealth deficit, in one chart</a><br></br></div>}
          id="section3"
        />
        <Section
          sectiontitle={"Cost of Retirement by State "}
          title="How Much You Need to Retire Comfortably in Each State?"
          content={<ReactFlexyTable className="Flex-table" data={datatable} sortable filterable pageSize={52} pageSizeOptions={[52]} previousText={""} nextText={""} />}
          text={<div><p>Having enough savings to afford a comfortable retirement has been an issue for a long time now. In fact, some economists have
            recently estimated that millennials will face even a harder challenge and should save almost half of their income if they wish to retire at
            65. However, the good news is that some parts of the country are friendlier on the wallet than others when it comes to retirement.</p>
            <ul>
              <li>The average retirement age in the U.S. is 64 years old. At the state level, the average retirement age varies from 61 years old in Alaska and West Virginia to 67 years old in Washington, D.C.</li>
              <li>The average life expectancy nationwide is 78.6. Among the states, Mississippi has the lowest life expectancy at 74.5, and Hawaii has the highest life expectancy at 81.5.</li>
              <li>Nationwide, the average yearly expenses for someone over the age of 65 is $51,624. Mississippi has the lowest annual expenses at $44,758, while Hawaii has the highest annual expenses at $99,170.</li>
            </ul>

    </div>}
          placeholder={"SEARCH STATES USING THE SEARCH BAR"}
          titlecontent={"Savings Required to Retire by State"}
          subcontent={<BarChartCus
          data={worthdata}
          yAxis={"State"}
          key1={"Savings Required"}
                          />}
          dark={false}
          subcontent2={<div><a href="https://howmuch.net/articles/cost-comfortable-retirement-america" target="_blank">Reference: Mapped: How Much Money do You Need to Retire Comfortably in Each State?</a><br></br></div>}
          id="section4"
        />
        <Section
          sectiontitle={"Steps to Prepare for Retirement"}
          title="Steps to Prepare for Retirement"
          text={<div>
          <h3>Start saving, keep saving, and stick to your goals</h3>
          <p>Make saving for retirement a priority. Devise a plan, stick to it, and set goals. Remember, it’s
             never too early or too late to start saving. Retirement is expensive. Experts estimate that you
             will need 70 to 90 percent of your preretirement income to maintain your standard of living when you
             stop working. Take charge of your financial future.</p>

           <p>The key to a secure retirement is to plan ahead. Use the Retirement calculator below to
           estimate how much your money can grow over time.</p>

          </div>}
          content={
            <Iframe width="80%"
              height="855"
              url="https://observablehq.com/embed/@kathiavf16/tvmchart?cell=viewof+salary&cell=viewof+employeePercentage&cell=viewof+employerPercentage&cell=viewof+interest&cell=viewof+yearsInvestment&cell=chart"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"/>}

          subtitle={"Steps to Financial Wellbeing"}
          subcontent2={<div><a href="https://www.youtube.com/watch?v=O0YEHweIESg&ab_channel=PhilTown%27sRule%231Investing" target="_blank">5 Common Mistakes People Make While Planning for Retirement| Phil Town</a><br></br>
          <a href="https://www.dol.gov/sites/dolgov/files/ebsa/about-ebsa/our-activities/resource-center/publications/top-10-ways-to-prepare-for-retirement.pdf" target="_blank">Reference: Top 10 Ways to Prepare for Retirement</a><br></br></div>}
          dark={true}
          id="section5"
        />
        <Section
          sectiontitle={"About the Data"}
          title="About the Data"
          other={<div><p>"This visualization was created putting together findings from many different sources to bring
            awareness about the importance of financial literacy, and other concerns Americans are facing now when thinking about the outlook of their
            financial future"</p>
            </div>}
          placeholder={<div>

          <p>The data was collected using relevant information from the articles listed below:</p>
            <p>It’s important to note that a majority of these studies were conducted prior to the coronavirus pandemic.</p>
            <h2>References</h2>
          <a href="https://www.opploans.com/oppu/articles/statistics-financial-literacy/" target="_blank">10 Eye-Opening Financial Literacy Statistics:</a><br></br>
          <a href="https://www.visualcapitalist.com/charting-the-growing-generational-wealth-gap/" target="_blank">Charting The Growing Generational Wealth Gap</a><br></br>
          <a href="https://www.washingtonpost.com/business/2019/12/03/precariousness-modern-young-adulthood-one-chart/" target="_blank">The staggering millennial wealth deficit, in one chart</a><br></br>
          <a href="https://howmuch.net/articles/cost-comfortable-retirement-america" target="_blank">Mapped: How Much Money do You Need to Retire Comfortably in Each State?</a><br></br>
          <a href="https://www.dol.gov/sites/dolgov/files/ebsa/about-ebsa/our-activities/resource-center/publications/top-10-ways-to-prepare-for-retirement.pdf" target="_blank">Top 10 Ways to
Prepare for
Retirement</a><br></br>
          <a href="https://www.epi.org/publication/the-new-gilded-age-income-inequality-in-the-u-s-by-state-metropolitan-area-and-county/" target="_blank">The new gilded age</a><br></br>
          </div>}
          dark={false}
          id="section6"
        />
      </div>
    );
}
export default App;
