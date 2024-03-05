import React from "react";
import "./style.css";

export default function Input() {
  return (
    <>
      <div className="input_div">
        <div className="sub_input">
          <div className="intert_url_p">
            <p>Insert a YouTube video URL :</p>
          </div>
          <div className="input_grids">
            <input type="text"></input>
            <button>Convert</button>
          </div>
          <div className="qoute_convert">
            <p>
              Fast Convert To <span id="mp3_color">MP3</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
