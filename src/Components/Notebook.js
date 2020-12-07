import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "f8ba838a6b24b130";

function Notebook() {
  const ref = useRef();

  useEffect(() => {
    (new Runtime()).module(notebook, name => {
      if (name === "chart") return Inspector.into(ref.current.querySelector(".chart"))();
    });
  }, []);

  return (
    <div className="Notebook" ref={ref}>
      <div className="chart"></div>
      <p>Credit: <a href="https://observablehq.com/d/f8ba838a6b24b130">Is it worth investing in a pension in the UK by Kathia Vargas</a></p>
    </div>
  );
}

export default Notebook;
