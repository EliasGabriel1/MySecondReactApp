import React from "react";
import "./index.css";

export default function loggout() {
  return (
    <div className="box-loggout">
      <div className="loggout">
        <a href="#">
          <img
            className="img-loggout"
            src="https://www.svgrepo.com/show/21304/logout.svg"
          />
          <p>Sair</p>
        </a>
      </div>
    </div>
  );
}
