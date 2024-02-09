import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const [resources, setResources] = useState(false);
  const [fellowships, setFellowships] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleResources = () => {
    setResources(!resources);
  };

  const toggleFellowships = () => {
    setFellowships(!fellowships);
  };

  const toggleHamburger = () => [setHamburgerOpen(!hamburgerOpen)];

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
            width={50}
            height={50}
            className="logo"
          />
        </div>
        {/* <div className="church_title">
          <span>The Fortress</span>
          <span>Int&#39;l Church</span>
        </div> */}
      </Link>
      <nav className={hamburgerOpen ? "nav_ul" : "menu"}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
        >
          Who we are
        </NavLink>
        <a href="/#services" className="nav-link">
          Our Services
        </a>
        <div className="dropdown_parent">
          <NavLink
            to="/resources"
            className={({ isActive }) =>
              isActive ? "active-link" : "nav-link"
            }
          >
            Resources
          </NavLink>
          <NavLink className="dropdown">
            <Link to="/resources/#video-sermons">Video Sermons</Link>

            <Link to="/resources/#audio-sermons">Audio Sermons</Link>

            <Link to="/resources/#e-books">E-Books</Link>
          </NavLink>
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
        <a href="/#elixir-of-life" className="nav-link">
          Elixir of Life
        </a>
        <a href="/#contact" className="nav-link">
          Contact Us
        </a>
        <a href="/#give" className="give nav-link">
          Give
        </a>
      </nav>
      <div className={`hamburger ${hamburgerOpen ? "closed" : "open"}`} onClick={toggleHamburger}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
