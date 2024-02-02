import React from "react";
import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <section className="resources_section" id="resources">
      <div className="resources_banner">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/LRgr235_2Qw?si=6TMh40Ldj3lSvX3n"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="youtube-video"
        ></iframe>
      </div>
      <div className="resources_box_container">
        <Link to="" id="video-sermons">
          <img
            src="/icons/video.png"
            alt="video sermons"
            width={40}
            height={40}
            className="resource"
          />
          <div className="resource">Video Sermons</div>
          <div className="changed-bg"></div>
        </Link>
        <Link to="" id="audio-sermons">
          <img
            src="/icons/audio.png"
            alt="video sermons"
            width={40}
            height={40}
            className="resource"
          />
          <div className="resource">Audio Sermons</div>
          <div className="changed-bg"></div>
        </Link>
        <Link to="" id="e-books">
          <img
            src="/icons/book.png"
            alt="video sermons"
            width={40}
            height={40}
            className="resource"
          />
          <div className="resource">E-Books</div>
          <div className="changed-bg"></div>
        </Link>
      </div>
    </section>
  );
};

export default Resources;
