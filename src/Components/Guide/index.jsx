import React from "react";
import "./style.css";

import img_1 from "../guide_imgs/1.png";
import img_2 from "../guide_imgs/2.png";

export default function Guide() {
  return (
    <>
      <div className="Guide">
        <div className="empty_box"></div>
        <div className="main_guide">
          <div className="headline_h1">
            <h1>How to download YouTube videos?</h1>
          </div>
          <div className="guide_imgs">
            <div className="box_show">
              <div className="title_pic">
                <p>1-BRING ANY URL FROM YOUTUBE</p>
              </div>
              <div className="pic_guide">
                <img src={img_1}></img>
              </div>
            </div>
            <div className="box_show">
              <div className="title_pic">
                <p>1-CLICK CONVERT AND WAIT A FEW SECONDS</p>
              </div>
              <div className="pic_guide">
                <img src={img_2}></img>
              </div>
            </div>
            <div className="box_show">
              <div className="title_pic">
                <p>1-CLICK CONVERT AND WAIT A FEW SECONDS</p>
              </div>
              <div className="pic_guide">{/* <img src={img_2}></img> */}</div>
            </div>
          </div>
        </div>
        <div className="social_media"></div>
      </div>
    </>
  );
}
