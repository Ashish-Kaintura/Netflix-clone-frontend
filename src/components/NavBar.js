import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { BiPowerOff, BiSearch } from "react-icons/bi";
import { BsFillBellFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCaretDown } from "react-icons/ai";
import "../nav.css";
function NavBar(props) {
  const [scrollPos, setScrollPos] = useState(0);
  // const API_IMG = 'https://image.tmdb.org/t/p/w500/';
  const [query, setQuery] = useState("");
  const [toggle, setToggle] = useState(false);
  const [navbarColor, setNavbarColor] = useState("#282828");
  const auth = localStorage.getItem("user");
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => setIsOpen(!isOpen);
  const closeNav = () => setIsOpen(false);
  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("Searching");
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=f29b6fd771253286db780b08d92449de&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data);
      props.setPopularMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  const navigate = useNavigate();
  //get clear data from user storage
  const logout = () => {
    localStorage.clear();
    navigate("/frontpage");
  };

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.pageYOffset;
      setScrollPos(currentScrollPos);

      if (currentScrollPos > 50) {
        setNavbarColor("transparent");
      } else {
        setNavbarColor("#282828");
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPos]);

  return (
    // className="navbar-link"
    <div>
      <nav className="navbar" style={{ backgroundColor: navbarColor }}>
        <GiHamburgerMenu className="hambartogle" onClick={toggleNav} />
        {isOpen && (
          <div className="sidenav">
            <img
              className="nav-logo-sidenav"
              src="\img\netflixlogo.png"
              alt="logo"
            />
            <div className="navbar-links-sidenav">
              <Link
                activeClass="active"
                className="navbar-link-sidenav"
                smooth
                spy
                to="home"
              >
                {" "}
                Home
              </Link>
              <Link
                activeClass="active"
                className="navbar-link-sidenav"
                smooth
                spy
                to="movies"
              >
                Movies{" "}
              </Link>
              <Link
                activeClass="active"
                className="navbar-link-sidenav"
                smooth
                spy
                to="tvshows"
              >
                {" "}
                TV Shows
              </Link>
              <Link
                activeClass="active"
                className="navbar-link-sidenav"
                smooth
                spy
                to="trending"
              >
                Trending
              </Link>
              <Link
                className="logoutbi-sidenav"
                style={{ cursor: "pointer", justifyContent: "center" }}
                onClick={logout}
                to="/logout"
              >
                <BiPowerOff style={{ color: "red", marginTop: " 40px" }} />
                <span style={{ marginRight: "5px", top: "0" }}>
                  ({JSON.parse(auth).name})
                </span>
              </Link>
            </div>
            <span className="closebtn" onClick={closeNav}>
              &times;
            </span>
          </div>
        )}
        <img
          src={require("../images/netflixlogo.png")}
          alt="logo"
          className="navbar-logo"
        />
        <div className="navbar-links">
          <Link
            activeClass="active"
            className="navbar-link"
            smooth
            spy
            to="home"
          >
            {" "}
            Home
          </Link>
          <Link
            activeClass="active"
            className="navbar-link"
            smooth
            spy
            to="movies"
          >
            Movies{" "}
          </Link>
          <Link
            activeClass="active"
            className="navbar-link"
            smooth
            spy
            to="tvshows"
          >
            {" "}
            TV Shows
          </Link>
          <Link
            activeClass="active"
            className="navbar-link"
            smooth
            spy
            to="trending"
          >
            Trending
          </Link>
        </div>
        <div className="bellicon">
          <span>
            <BsFillBellFill />
          </span>
          <div className="dropdown">
            <AiFillCaretDown />
            <div className="dropdown-option">
              <span className="span-option">Setting</span>
              <span className="span-option">Help</span>
              <span className="span-option">Policy</span>
            </div>
          </div>
        </div>
        <form className="navbar-search-form" onSubmit={searchMovie}>
          {toggle && (
            <input
              type="search"
              value={query}
              placeholder="Search"
              onChange={changeHandler}
              className="navbar-search-input"
            />
          )}
        </form>
        <button className="navbar-search-button">
          <span onClick={() => setToggle(!toggle)}>
            <BiSearch />
          </span>
        </button>
        <Link
          className="logoutbi"
          style={{ cursor: "pointer" }}
          onClick={logout}
          to="/logout"
        >
          <BiPowerOff />{" "}
          <span style={{ marginRight: "5px" }}>({JSON.parse(auth).name})</span>
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;
