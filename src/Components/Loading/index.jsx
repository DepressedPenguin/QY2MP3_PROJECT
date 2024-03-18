import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import mp3_download_img from "../dark_mode_icons/mp3_icon.png";

export default function Loading({ url }) {
  // FOR TITLE
  const [title, settitle] = useState();
  // FOR author
  const [author, setauthor] = useState();
  // LINK IMG
  const [img, setimg] = useState();
  // DOWNLIAND LINK
  const [link, setlink] = useState();
  // VIDEO ID
  const [id, setid] = useState();

  function getYouTubeVideoId(url) {
    console.log(url);

    const regex =
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);

    if (match && match[1]) {
      return match[1];
    } else {
      console.error("Invalid YouTube URL");
      return null;
    }
  }

  async function fetchapi() {
    const videoId = getYouTubeVideoId(url);

    if (!videoId) {
      console.error("Failed to extract video ID");
      return;
    }

    if (!url) {
      console.error("Youtube URL is undefined", url);
      return;
    }

    const apiURL = `https://youtube-mp36.p.rapidapi.com/dl?id=${videoId}`;
    const options = {
      method: "GET",
      url: apiURL,
      headers: {
        "X-RapidAPI-Key": "a19294d6f9msh0184e27f0ecd328p1d845fjsn8875486caeaa",
        "X-RapidAPI-Host": "youtube-mp3-download1.p.rapidapi.com",
      },
    };

    console.log(apiURL);

    try {
      const response = await fetch(apiURL, options);
      const result = await response.json();
      console.log(result);
      settitle(result.title);
      setauthor(result.author);
      setimg(result.thumb);
      setlink(result.link);
      setid(result.id);
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    // when componont mount
    fetchapi();
  }, [url]); // trigger the fetchapi() function when the url prop changes

  return (
    <>
      <div>
        <div className="loading_convert">
          {/* IMG SONG */}
          <div className="img_song">
            <img alt="mp3 img" id="mp3_img" src={img} />
          </div>
          <div className="deatils_song">
            <div className="box_deatils">
              <p id="title_song_api">{title}</p>
            </div>
            <div className="box_deatils">
              <p className="author_p">Author : {author}</p>
            </div>
            <div className="box_deatils_with_btn">
              <p className="author_p">Video Id : {id}</p>
            </div>
          </div>
          <div className="download_song_button">
            <a href={link} target="blank">
              <img src={mp3_download_img} alt="Download Icon" />
            </a>
            <p>Download</p>
          </div>
        </div>
      </div>
    </>
  );
}
