import React from "react";

export default function NavElement({title}) {
  return (
    <div className="nav-element">
        <p className="nav-item">{title}</p>
    </div>
  );
}
