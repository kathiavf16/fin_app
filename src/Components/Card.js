import React from "react"

export default function Card({ url, legend}) {
  return (
      <div className="card">
      <img src={url} alt=""/>
      <p className="legend">{legend}</p>
      </div>

  );
}
