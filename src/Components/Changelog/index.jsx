import React from "react";
import "./style.css";

import Navbar from "../Navbar";
// import Input from "./Input";
// import Guide from "../Guide";
import Footer from "../Footer";

export default function Changelog() {
  return (
    <>
      <div className="changelog_section">
        <div className="sub_changelog">
          <div className="title_changelog">
            <h1>Changelog</h1>
          </div>
          <div className="news_logs">
            <div className="changelog_ann">
              <p id="date_logs">2024-03-29</p>
              <p>Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
