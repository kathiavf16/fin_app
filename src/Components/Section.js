import React from "react";

export default function Section({ regionselection, other, sectiontitle, title, titlecontent,titlesubcontent, content,titlesubcontent2, subcontent, subcontent2, subcontent3, dark, id, selection, text }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div class="title">
          <p>{sectiontitle} {selection} {regionselection}</p>
      </div>
      <br></br>

        <div className="other" id={id}>{other}</div>
        <div className="section-content" id={id}>
        <h1>{title}</h1>
        <br></br><br></br>
        <div>{text}</div>
        <br></br><br></br>
        <div className="subcontent3" id={id}>{subcontent3}</div>
        <br></br><br></br><br></br>
        <div className="content" id={id}><p>{titlecontent}</p>{content}</div>
        <div className="subcontent" id={id}>{titlesubcontent}{subcontent}</div>
        <div className="subcontent2" id={id}>{titlesubcontent2}{subcontent2}</div>
        <br></br><br></br><br></br><br></br><br></br><br></br>
      </div>
    </div>
  );
}
