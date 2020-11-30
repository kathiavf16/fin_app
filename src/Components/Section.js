import React from "react";

export default function Section({ title, subtitle, content, subcontent, subcontent2, dark, id, selection, text }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div class="title">
          <p>{title}: {selection}</p>

      </div>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <p>{text}</p>
        <div>{content}
        <div className="subcontent2">{subcontent2}
        </div>
        </div>
        <div className="Subcontent">{subcontent}</div>


      </div>
    </div>
  );
}
