import React, { useState } from "react";
import "./style.css";
import moon from "../dark_mode_icons/moon.png";
import logo_dark from "../dark_mode_icons/white_mode.png";
import logo_light from "../dark_mode_icons/dark_mode.png";

export default function Navbar() {
  // TRY DARK MODE IN NAVBAR
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    console.log("Changing theme:", theme);
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <>
      <div className={`navbar_header ${theme}`}>
        <div className="sub_navbar">
          <div className="left_home_element">
            <ul className="ul_list">
              <li>Home</li>
              <li>FAQ</li>
              <li>Changelog</li>
              <li>Guide</li>
              <li>Donation</li>
            </ul>
          </div>
          <div className="dark_mode_lang_icons">
            <div className="dark_mode_ico">
              <img src={moon}></img>
            </div>
            <div id="split_border">|</div>
            {/* OPTIONS LANGAUGES */}
            <div className="langs">
              <select id="languages_select">
                <option className="option">EN</option>
                <option className="option">AR</option>
                <option className="option">ES</option>
                <option className="option">RU</option>
                <option className="option">AL</option>
              </select>
            </div>
          </div>
        </div>
        {/* LOGO PLACE */}
        <div className="logo">
          {theme === "light" ? (
            <img src={logo_dark} onClick={changeTheme}></img>
          ) : (
            <img src={logo_dark} onClick={changeTheme}></img>
          )}
        </div>
      </div>
    </>
  );
}
