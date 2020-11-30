import React, { useState, useEffect } from "react";


function Dropdown(){

  const [demographic, setDemographic] = useState("");
  const [demographics, setDemographics] = useState([]);

  const handleSubmitCourse = event => {
    alert("Your selected value is: " + demographic);
    event.preventDefault();
  };

  const handleChangeCourse = event => {
     setDemographic(event.target.value);
   };

   const getUnique = (arr, comp) => {
    const unique = arr
      //store the comparison values in array
      .map(e => e[comp])
      // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)
      // eliminate the dead keys & store unique objects
      .filter(e => arr[e])
      .map(e => arr[e]);

    return unique;
  };

  useEffect(() => {
      const demographics = require("../Data/raceData.json");
      setDemographics(demographics);
    }, []);

    const uniqueDemographics = getUnique(demographics, "race");

      const filterDropdown = demographics.filter(function(result) {
        return result.race === demographic;
      });

  return (
    <form onSubmit={handleSubmitCourse}>
        <br />
        <br />
        <label>
          Select Race
          <select value={demographic} onChange={handleChangeCourse}>
            {uniqueDemographics.map(demographic => (
              <option key={demographic.id} value={demographic.race}>
                {demographic.race}
              </option>
            ))}
          </select>
        </label>
        <input type="submit" value="Submit" />
        <div>
          {filterDropdown.map(demographic => (
            <div key={demographic.id} style={{ margin: "10px" }}>
              {console.log(demographic)}
              <br />
            </div>
          ))}
        </div>
      </form>
  );
}
 export default Dropdown;












































// import React, { useState, useEffect } from "react"
// //import data from "../Data/jstates.json"
// //import worthdata from "../Data/raceData.json"
//
// function Dropdown({title, items, data, selection, setSelection}){
//
//
//   //[selection, setSelection] = useState("Latino");
//
//   const handleSubmit = event => {
//       alert("Your selected value is: " + selection);
//       event.preventDefault();
//     };
//
//   const handleChange = event => {
//     setSelection(event.target.value);
//   };
//
//     useEffect(() => {
//       setSelection(data);
//     }, [selection])
//
//
// //const mydata = data.filter(item => item.race === selection);
//
//     //console.log("worth: ", selection, mydata)
//
//     return (
//       <form onSubmit={handleSubmit}>
//         <label>
//           <p className="dd-header__title--bold">{title}</p>
//           <select
//            value={selection}
//            onChange={handleChange}
//           >
//           {items.map(item => (
//             <option key={item.id} value={item.value}>
//             {item.value}
//             </option>
//           ))}
//           </select>
//         </label>
//        <input type="submit" value="Submit" />
//       </form>
//     );
//   }
//
// export default Dropdown;
