import React from "react";

export default function Section({ content2, placeholder, regionselection, other,other2, sectiontitle, title, titlecontent,titlesubcontent, content,titlesubcontent2, subcontent, subcontent2, subcontent3, dark, id, selection, text }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div class="title">
          <p>{sectiontitle} {selection} {regionselection}</p>
      </div>
      <br></br>


        <div className="section-content" id={id}>
        <h1>{title}</h1>
        <br></br><br></br>
        <div>{text}</div>
        <div className="subcontent3" id={id}>{subcontent3}</div>
        <div className="other" id={id}>{other}</div>
        <div className="other2" id={id}>{other2}</div>
        <br></br>
        <div className="placeholder" id={id}>{placeholder}</div>
        <br></br><br></br><br></br>
        <div className="content" id={id}><p>{titlecontent}</p>{content}</div>
        <br></br><br></br>
        <div className="content2" id={id}><p>{titlecontent}</p>{content2}</div>
        <br></br><br></br>
        <div className="subcontent" id={id}><p className="pa">{titlesubcontent}</p>{subcontent}</div>
        <div className="subcontent2" id={id}><p className="pa">{titlesubcontent2}</p>{subcontent2}</div>
      </div>
    </div>
  );
}
