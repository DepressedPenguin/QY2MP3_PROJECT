import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import moon from "../dark_mode_icons/moon.png";
import logo_dark from "../dark_mode_icons/white_modess.png";
import logo_light from "../dark_mode_icons/dark_mode.png";
import logo_sun from "../dark_mode_icons/sun.png";
import donation_icon from "../guide_imgs/donation.png";
import { Link } from "react-router-dom";

// STYLE DARK MODE
import "../DarkMode/style.scss";

export default function Navbar({ theme, darkHandler }) {
  // TRY DARK MODE IN NAVBAR

  return (
    <>
      <div className={theme}>
        <div className="navbar_header background">
          <div className="sub_navbar">
            <div className="left_home_element">
              <ul className="ul_list text">
                <li className="text">
                  <Link to="/" className="li_remove_deco text">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="li_remove_deco text" to="Changelog">
                    Changelog
                  </Link>
                </li>
                <li>
                  <a href="#headline_guide" className="li_remove_deco text">
                    Guide
                  </a>
                </li>
                <li>
                  <Link className="li_remove_deco text" to="faq">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link className="li_remove_deco text" to="Contact">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <a
                    href="https://www.paypal.com/paypalme/ZElaroussi"
                    target="_blank"
                  >
                    <img id="img_don" src={donation_icon} alt="Donation Icon" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="dark_mode_lang_icons">
              <div id="split_border">|</div>
              <div className="dark_mode_ico">
                {theme === "light" ? (
                  <img onClick={darkHandler} alt="moon icon" src={moon}></img>
                ) : (
                  <img
                    onClick={darkHandler}
                    alt="sun icon"
                    src={logo_sun}
                  ></img>
                )}
              </div>
            </div>
          </div>
          {/* LOGO PLACE */}
          <div className="logo">
            {theme === "light" ? (
              <img alt="logo" src={logo_light}></img>
            ) : (
              <img alt="logo" src={logo_dark}></img>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
