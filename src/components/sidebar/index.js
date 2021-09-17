import React from "react";
import "./index.css";
import NEWS from "./NEWS";
import Weather from './Weather/index'

export default function Aside(props) {
  return (
    <aside className="side-bar">
      <div className="Info-fact">
        <Weather/>
        <NEWS/>
      </div>
    </aside>
  );
}
