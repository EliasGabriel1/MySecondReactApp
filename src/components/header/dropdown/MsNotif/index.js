import React from "react";
import "./index.css";

export default function Dropdown() {
    const name ="nasa"
    const name2 ="nasa"
    const name3 ="nasa"
  return (
    <ul>
    <li> 
        <img className="notif" src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg"/>
        <a>Published by: {name}</a>
    </li>
    <li> 
        <img className="notif" src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg"/>
        <a>Published by: {name2}</a>
    </li>
    <li>
        <img className="notif" src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg"/> 
        <a>Published by: {name3}</a>
    </li>
  </ul>
  );
}
