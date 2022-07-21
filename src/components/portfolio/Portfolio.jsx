import "./portfolio.scss"
// import { useState } from "react";
// import PortfolioList from "../portfolioList/PortfolioList";

export default function Portfolio() {
  return (  
    <div className="portfolio" id="portfolio">
      <div className="one">
      <div className="first">
        <div className="about">
          <h1>ABOUT ME</h1>
          <p> Business computing frequently involves the use of management-information systems that drive logistics and
          operations, enterprise resource planning (ERP), customer relation management (CRM), office productivity, and
          business intelligence (BI). Such tools enabled more streamlined processes that led to improved. </p>
        </div>
      </div>
      <div className="second">

      </div>
      <div className="third">
        <div className="tech">
          <h1>TECHNICAL SKILLS</h1>
          <div className="flex-container">
            <div className="left">
              <p>Cpp</p>
              <p>HTML5</p>
              <p>CSS</p>
              <p>ReactJS</p>
              <p>Javascript</p>
            </div>
            <div className="right">
              <p>C</p>
              <p>Data Structures</p>
              <p>Algortithms</p>
              <p>OOPs</p>
              <p>MySQL</p>
            </div>
          </div>
        </div>
        <div className="design">
          <h1>OTHER SKILLS</h1>
          <div className="flex-container">
            <div className="left">
              <p>Communication</p>
              <p>Presentation</p>
            </div>
            <div className="right">
              <p>Designing</p>
              <p>Writing</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}