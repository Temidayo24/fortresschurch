import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer">
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
        </div>
        <div className="footer_socials">
          <div className="lets-get-in-touch">
            <span>Let's keep in touch!</span>
            <span className="follow">
              Follow us on social media to be up-to-date with our events.
            </span>
          </div>
          <div className="socials_container">
            <div className="socials">
              <img
                src="/icons/insta-pink.svg"
                alt="Instagram"
                width={30}
                height={30}
              />
            </div>
            <div className="socials">
              <img
                src="/icons/youtube-pink.svg"
                alt="Youtube"
                width={30}
                height={30}
              />
            </div>
            <div className="socials">
              <img src="/icons/mixlr.png" alt="Mixlr" width={30} height={30} />
            </div>
            <div className="socials">
              <img
                src="/icons/facebook-pink.svg"
                alt="Facebook"
                width={30}
                height={30}
              />
            </div>
            <div className="socials">
              <img
                src="/icons/facebook-pink.svg"
                alt="Facebook"
                width={30}
                height={30}
              />
            </div>
            <div className="socials">
              <img
                src="/icons/facebook-pink.svg"
                alt="Facebook"
                width={30}
                height={30}
              />
            </div>
          </div>
          <div className="footer-address">
            <span>Visit Us!</span>
            <p>
              The Fortress International Church <br />
              10 Coker Road,
              <br />
              Opposite Chicken Republic,
              <br /> Ilupeju, Lagos
              <br /> Nigeria
            </p>
          </div>
        </div>
      </div>
      <div className="copyright">
        <span>Copyright © 2024 The Fortress International Church</span>
      </div>
    </footer>
  );
};

export default Footer;
