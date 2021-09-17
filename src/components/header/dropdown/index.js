import React from "react";
import "./index.css";
import MsNotif from "./MsNotif/index"

export default function Dropdown() {
  return (
    <div className="box-notification">
      <div className="notification">
          <MsNotif/>
      </div>
    </div>
  );
}
