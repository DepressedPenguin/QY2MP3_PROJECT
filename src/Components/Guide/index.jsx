import React from "react";
import "./style.css";

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
              <div className="pic_guide"></div>
            </div>
            <div className="box_show"></div>
            <div className="box_show"></div>
          </div>
        </div>
        <div className="social_media"></div>
      </div>
    </>
  );
}
