import React, { useState } from "react";
import "./style.css";

import github_icon from "../contact_icons/github.png";
import discord_icon from "../contact_icons/discord.png";
import linkdin_icon from "../contact_icons/linkedin.png";
import x_icon from "../contact_icons/x.png";

export default function Contact() {
  // IF CLICK SHOW DISCORD USERNAME
  const [discordname, setdiscordname] = useState(null);
  const discord_name = "depressed_penguin";
  const handOnClickDiscord = () => {
    setdiscordname(discord_name);
  };

  return (
    <>
      <div>
        <div className="Contact_Us_Section">
          <div className="contac_us_boxs">
            <a href="https://github.com/DepressedPenguin" target="blank">
              <a
                href="https://github.com/DepressedPenguin?tab=repositories"
                target="blank"
              >
                <img alt="github icon" src={github_icon}></img>
              </a>
            </a>
            <p>Github</p>
          </div>
          <div className="contac_us_boxs">
            <img
              onClick={handOnClickDiscord}
              alt="discord icon"
              src={discord_icon}
            ></img>
            <p>Discord</p>
            {discordname ? <p>{discord_name}</p> : null}
          </div>
          <div className="contac_us_boxs">
            <a
              href="https://www.linkedin.com/in/zakaria-elaroussi-609121223/"
              target="blank"
            >
              <img alt="linkedin icon" src={linkdin_icon}></img>
            </a>
            <p>LinkedIn</p>
          </div>
          <div className="contac_us_boxs">
            <a href="https://twitter.com/DP_0_PENGUIN" target="blank">
              <img alt="X icon" src={x_icon}></img>
            </a>
            <p>Twitter</p>
          </div>
        </div>
      </div>
    </>
  );
}
