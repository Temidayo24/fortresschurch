
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const [resources, setResources] = useState(false);
  const [fellowships, setFellowships] = useState(false);

  const toggleResources = () => {
    setResources(!resources);
  };

  const toggleFellowships = () => {
    setFellowships(!fellowships);
  };

  const currentRoute = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;

      if (scrollPosition > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? "header_nav_scrolled " : ""}`}>
      <Link to="/" className="logo_header">
        <div className="logo-container">
          <img
            src="/Fortress-Logo.png"
            alt="logo"
            width={80}
            height={80}
            className="logo"
          />
        </div>
        <div className="church_title">
          <span>The Fortress</span>
          <span>Int&#39;l Church</span>
        </div>
      </Link>
      <nav className="nav_ul">
        <NavLink
          to="/"
          className={currentRoute === "/" ? "active-link" : "nav-link"}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={currentRoute === "/about" ? "active-link" : "nav-link"}
        >
          Who we are
        </NavLink>
        <NavLink
          to="/#services"
          className={currentRoute === "/services" ? "active-link" : "nav-link"}
        >
          Our Services
        </NavLink>
        <div className="dropdown_parent">
          <NavLink
            to="/resources"
            className={
              currentRoute === "/resources" ? "active-link" : "nav-link"
            }
          >
            Resources <span></span>
          </NavLink>
          <div className="dropdown">
            <Link to="/resources/#video-sermons">Video Sermons</Link>

            <Link to="/resources/#audio-sermons">Audio Sermons</Link>

            <Link to="/resources/#e-books">E-Books</Link>
          </div>
        </div>
        {/* <div className="dropdown_parent">
              <Link
                to="/fellowships"
                className={
                  currentRoute === "/fellowships" ? "active-link" : "nav-link"
                }
              >
                Our Fellowships <span></span>
              </Link>
              <div className="dropdown">
                <Link to="/men-of-valour">Men of Dominion</Link>

                 to="/daughters-of-virtue">Daughters of Virtue</Link>

                <Link to="/light-house">Light House</Link>

                <Link to="/green-house">Green House</Link>
              </div>
            </div> */}
        {/* <Link
              to="/elixir-of-life"
              className={
                currentRoute === "/elixir-of-life" ? "active-link" : "nav-link"
              }
            >
              Elixir of Life
            </Link> */}
        <NavLink
          to="/contact"
          className={currentRoute === "/contact" ? "active-link" : "nav-link"}
        >
          Contact Us
        </NavLink>
        <NavLink
          to="/give"
          // className="give"
          className={`give ${
            currentRoute === "/give" ? "active-link" : "nav-link"
          }`}
        >
          <button> Give</button>
          {/* Give */}
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
