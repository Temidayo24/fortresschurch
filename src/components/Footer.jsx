import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="fortress_footer">
        <Link to="/" className="logo_header">
          <img src="/Fortress-Logo.png" alt="logo" width={80} height={80} />
          <div className="church_title">
            <span>The Fortress</span>
            <span>Int&#39;l Church</span>
          </div>
        </Link>
        <div className="logoText">
          The Fortress International Church has the mandate of training,
          equipping, and mobilising men to Discover, Develop and Deploy their
          graces to fulfill God&#39;s agenda for their lives. Everyone who
          becomes a member of our church joins a mobile train en route their
          prophetic destiny.
        </div>
      </div>
      <div className="locate_map">
        <div className="map">
          <span>Locate Us on the Map</span>
          <img src="" alt="" />
        </div>
        <div className="quicklinks">
          <h5>Quick links</h5>
          <div className="footer_links">
            <Link to="/about" className="">
              Who We Are
            </Link>
            <Link to="/home/#services" className="">
              Our Services
            </Link>
            <Link to="/resources" className="">
              Resources
            </Link>
            <Link to="/fellowships" className="">
              Our Fellowships
            </Link>
            <Link to="" className="">
              Elixir of Life
            </Link>
            <Link to="/contact" className="">
              Contact Us
            </Link>
            <Link to="/give" className="">
              Give
            </Link>
          </div>
        </div>
        <div className="footer_socials">
          <span className="follow">Follow us on social media</span>
          <div className="socials_container">
            <div className="socials">
              <span>Instagram</span>
              <img
                src="/icons/insta-pink.svg"
                alt="Instagram"
                width={30}
                height={30}
              />
            </div>
            <div className="socials">
              <span>YouTube</span>
              <img
                src="/icons/youtube-pink.svg"
                alt="Youtube"
                width={30}
                height={30}
              />
            </div>
            <div className="socials">
              <span>Mixlr</span>
              <img src="/icons/mixlr.png" alt="Mixlr" width={30} height={30} />
            </div>
            <div className="socials">
              <span>Facebook</span>
              <img
                src="/icons/facebook-pink.svg"
                alt="Facebook"
                width={30}
                height={30}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
