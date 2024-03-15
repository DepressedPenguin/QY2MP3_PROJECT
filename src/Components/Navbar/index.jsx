import React, { useRef, useState } from "react";
import "./style.css";
import moon from "../dark_mode_icons/moon.png";
import logo_dark from "../dark_mode_icons/white_modess.png";
import logo_light from "../dark_mode_icons/dark_mode.png";
import logo_sun from "../dark_mode_icons/sun.png";
import donation_icon from "../guide_imgs/donation.png";
import { Route, Routes, Link, useNavigate } from "react-router-dom";

import Guide from "../Guide";

export default function Navbar() {
  // TRY DARK MODE IN NAVBAR
  // OLD TRICK
  //USE REF TO GET THE NAV BACKGROUND
  const refbg = useRef(null);
  const elements_nav = useRef(null);
  const img_dark_logo = useRef(null);
  const change_to_sun = () => {
    refbg.current.style.backgroundColor = "white";
    elements_nav.current.style.backgroundColor = "#191919";
    elements_nav.current.style.borderRadius = "5px";
    img_dark_logo.current.src = logo_light;
  };

  // CHANGE TO MOON
  const change_to_moon = () => {
    refbg.current.style.backgroundColor = "#191919";
    elements_nav.current.style.backgroundColor = "#191919";
    elements_nav.current.style.borderRadius = "0";
    img_dark_logo.current.src = logo_dark;
  };

  // SCROOL DOWN TO THE GUIDE

  return (
    <>
      <div className="navbar_header" ref={refbg}>
        <div className="sub_navbar" ref={elements_nav}>
          <div className="left_home_element">
            <ul className="ul_list">
              <li>
                <Link className="li_remove_deco" to="/Home">
                  Home
                </Link>
              </li>
              <li>
                <Link className="li_remove_deco" to="Changelog">
                  Changelog
                </Link>
              </li>
              <li>
                <a id="tag_guide" href="#headline_guide">
                  Guide
                </a>
              </li>
              <li>
                <Link className="li_remove_deco" to="faq">
                  FAQ
                </Link>
              </li>
              <li>
                <Link className="li_remove_deco" to="Contact">
                  Contact Us
                </Link>
              </li>
              <li>
                {/* <Link className="li_remove_deco" to="Donation"> */}
                <a
                  href="https://www.paypal.com/paypalme/ZElaroussi"
                  target="_blank"
                >
                  <img id="img_don" src={donation_icon} alt="Donation Icon" />
                </a>
                {/* </Link> */}
              </li>
            </ul>
          </div>
          <div className="dark_mode_lang_icons">
            <div className="dark_mode_ico">
              <img alt="moon icon" onClick={change_to_moon} src={moon}></img>
              <img alt="sun icon" onClick={change_to_sun} src={logo_sun}></img>
            </div>
            <div id="split_border">|</div>
            {/* OPTIONS LANGAUGES */}
            {/* <div className="langs">
              <select id="languages_select">
                <option className="option">EN</option>
                <option className="option">AR</option>
                <option className="option">ES</option>
                <option className="option">RU</option>
                <option className="option">AL</option>
              </select>
            </div> */}
          </div>
        </div>
        {/* LOGO PLACE */}
        <div className="logo">
          <img alt="logo" ref={img_dark_logo} src={logo_dark}></img>
        </div>
      </div>
    </>
  );
}
