import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Resources = () => {
  return (
    <>
      <Header />
      <section className="resources_section" id="resources">
        <div className="resources_banner">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/e5lPvAIl0F0?si=Bv-FTFzLUCWuqn6U"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
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
      <Footer />
    </>
  );
};

export default Resources;
