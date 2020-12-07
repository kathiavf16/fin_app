import React from "react";

export default function Sectionmap({ regionselection, subcontent3, subcontent4, sectiontitle, title, subtitle, content, subcontent, subcontent2, dark, id, selection, text }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div class="title">
          <p>{sectiontitle} {selection} {regionselection}</p>
      </div>
      <br></br>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <p>{text}</p>
        <div className="Subcontent">{subcontent4}</div>
        <div className="Subcontent">{subcontent3}</div>
        <div className="Subcontent">{subcontent2}
        <div>{content}
        <div className="subcontent2">{subcontent}
        </div>
        </div>
      </div>



      </div>
    </div>
  );
}
