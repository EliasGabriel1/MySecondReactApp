//* eslint-disable no-use-before-define */
import React from 'react';
import './index.css'

export default function FreeSolo() {
  return (
    <div className="Box-input">
        <div className="search">
          <input className="search__input" placeholder="O que deseja encontrar?" type="text" autoComplete="off"/>
          <button className="search__button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17.998" viewBox="0 0 18 17.998">
                      <g id="_709592" data-name="709592" transform="translate(0 0)">
                          <path id="União_1" data-name="União 1"
                              d="M16.751,17.784l-3.763-3.762a7.935,7.935,0,1,1,1.035-1.035l3.762,3.763a.731.731,0,1,1-1.034,1.034ZM1.464,7.926A6.463,6.463,0,1,0,7.927,1.463,6.47,6.47,0,0,0,1.464,7.926Z"
                              transform="translate(0 0)" fill="#222" />
                      </g>
                  </svg>
          </button>
      </div>
    </div>
  );
}