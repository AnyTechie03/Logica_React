import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";
import { UserContext } from "../../../App";
import "react-toastify/dist/ReactToastify.css";

const Nav = ({
  isProfileClicked,
  setProfileClicked,
  setEditProfile,
  setTeamInfoPage,
  setMenuClicked,
  isMenuClicked,
  isUserVerified,
  setUserVerified,
}) => {
  const [UserType, setUserType] = useState(null);
  let { state, dispatch } = useContext(UserContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const navigate = useNavigate();
  const fetchUserType = async () => {
    try {
      const res = await fetch(
        "https://angry-moon-10536.pktriot.net/fetchUserType",
        {
          method: "GET",
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
          },

          credentials: "include",
        }
      );

      if (res.status === 201) {
        const data = await res.json();
        setUserType(data.userType);
      } else {
        // Handle unauthorized access
        const error = new Error("Failed to fetch user type");
        throw error;
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUserType();
  }, [isUserVerified]);

  const RenderMenu = () => {
    var navItems;
    switch (UserType) {
      case "s": {
        navItems = [
          { onClickLink: "/", title: "Home" },
          // { onClickLink: "/Profile", title: "Profile" },
          // { onClickLink: "#Events", title: "  Events" },
          // { onClickLink: "#Schedule", title: "  Schedule" },
          // { onClickLink: "#Contact", title: "  ContactUs" },
        ];
        break;
      }
      case "a": {
        navItems = [
          { onClickLink: "/ThisisSecrete", title: " DashBoard" },
          { onClickLink: "/Quiz", title: " Quiz" },
          { onClickLink: "/TresureHunt", title: "Hunt Treasure" },
          { onClickLink: "/CodingRound", title: " Coding Round" },
        ];

        break;
      }

      default:
        navItems = "INVISIBLE";
        break;
    }

    if (navItems == "INVISIBLE" || state) {
      return (
        <>
          <div className="navbar">
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              onClick={() => navbtnToggle()}>
              <div className="navbar-logo">
                <h2>Logica</h2>
                <p>'23</p>
              </div>
            </Link>
            <div className="menu-button">
              <i
                className="fa fa-bars"
                aria-hidden="true"
                onClick={() => toggleMenu()}></i>
              <div
                className={
                  isMenuClicked ? "active navbar-items" : "navbar-items"
                }>
                <i
                  className="fa-solid fa-xmark"
                  style={{ color: "#fff" }}
                  onClick={() => toggleMenu()}></i>

                <Link
                  to="/"
                  className="docs-creator"
                  onClick={() => {
                    scrollToTop();
                    navbtnToggle();
                  }}>
                  Home
                </Link>
                <a
                  href="/#About"
                  className="docs-creator"
                  onClick={() => {
                    navbtnToggle();
                  }}>
                  About
                </a>
                <a
                  href="/#Events"
                  className="docs-creator"
                  onClick={() => {
                    navbtnToggle();
                  }}>
                  Events
                </a>
                <a
                  href="/#Schedule"
                  className="docs-creator"
                  onClick={() => {
                    navbtnToggle();
                  }}>
                  Schedule
                </a>
                <a
                  href="/#Guidelines"
                  className="docs-creator"
                  onClick={() => {
                    navbtnToggle();
                  }}>
                  Guidelines
                </a>
                <a
                  href="/#Contact"
                  className="docs-creator"
                  onClick={() => {
                    navbtnToggle();
                  }}>
                  Contact
                </a>

                <Link
                  to="/login"
                  className="login-signup-btn docs-creator"
                  onClick={() => {
                    navbtnToggle();
                  }}>
                  <div className="d-flex">Login/SignUp</div>
                </Link>
              </div>
            </div>
            <div className="navbar-items">
              <Link
                to="/"
                className="docs-creator"
                onClick={() => scrollToTop()}>
                Home
              </Link>
              <a
                href="/#About"
                className="docs-creator"
                onClick={() => navbtnToggle()}>
                About
              </a>
              <a
                href="/#Events"
                className="docs-creator"
                onClick={() => {
                  navbtnToggle();
                }}>
                Events
              </a>
              <a
                href="/#Schedule"
                className="docs-creator"
                onClick={() => {
                  navbtnToggle();
                }}>
                Schedule
              </a>
              <a
                href="/#Guidelines"
                className="docs-creator"
                onClick={() => {
                  navbtnToggle();
                }}>
                Guidelines
              </a>
              <a
                href="/#Contact"
                className="docs-creator"
                onClick={() => {
                  navbtnToggle();
                }}>
                Contact
              </a>

              <Link
                to="/login"
                className="login-signup-btn docs-creator"
                onClick={() => {
                  setMenuClicked(!isMenuClicked);
                }}>
                <div className="d-flex">Login/SignUp</div>
              </Link>
            </div>
            <div className="toast-container-div">
              <div className="Toastify"></div>
            </div>
          </div>
        </>
      );
    }
    return (
      <div className="navbar">
        <Link
          to="/"
          style={{ textDecoration: "none" }}
          onClick={() => {
            navbtnToggle();
          }}>
          <div className="navbar-logo">
            <h2>Logica</h2>
            <p>'23</p>
          </div>
        </Link>
        <div className="menu-button">
          <i
            className="fa fa-bars"
            aria-hidden="true"
            onClick={() => toggleMenu()}></i>
          <div
            className={isMenuClicked ? "active navbar-items" : "navbar-items"}>
            <i
              className="fa-solid fa-xmark"
              style={{ color: "#fff" }}
              onClick={() => toggleMenu()}></i>
            {navItems.map((item) => {
              return (
                <>
                  <Link
                    key={item.title}
                    className="docs-creator "
                    to={item.onClickLink}
                    onClick={() => {
                      navbtnToggle();
                    }}>
                    {item.title}
                  </Link>
                </>
              );
            })}
            <a
              href="/#About"
              className="docs-creator"
              onClick={() => {
                navbtnToggle();
              }}>
              About
            </a>
            <a
              href="/#Events"
              className="docs-creator"
              onClick={() => {
                navbtnToggle();
              }}>
              Events
            </a>
            <a
              href="/#Schedule"
              className="docs-creator"
              onClick={() => {
                navbtnToggle();
              }}>
              Schedule
            </a>
            <a
              href="/#Contact"
              className="docs-creator"
              onClick={() => {
                navbtnToggle();
              }}>
              Contact
            </a>
            <a
              href="#"
              className="docs-creator"
              onClick={() => {
                toggleProfile();
              }}>
              Profile
            </a>

            <Link
              className="login-signup-btn docs-creator"
              onClick={() => {
                handleClick();
                setMenuClicked(!isMenuClicked);
              }}>
              <div className="d-flex">Logout</div>
            </Link>

            <div className="toast-container-div">
              <div className="Toastify"></div>
            </div>
          </div>
        </div>
        <div className="navbar-items">
          {navItems.map((item) => {
            return (
              <>
                <Link
                  key={item.title}
                  className="docs-creator "
                  to={item.onClickLink}
                  onClick={() => {
                    navbtnToggle();
                  }}>
                  {item.title}
                </Link>
              </>
            );
          })}
          <a
            href="/#About"
            className="docs-creator"
            onClick={() => {
              navbtnToggle();
            }}>
            About
          </a>
          <a
            href="/#Events"
            className="docs-creator"
            onClick={() => {
              navbtnToggle();
            }}>
            Events
          </a>
          <a
            href="/#Schedule"
            className="docs-creator"
            onClick={() => {
              navbtnToggle();
            }}>
            Schedule
          </a>
          <a
            href="/#Contact"
            className="docs-creator"
            onClick={() => {
              navbtnToggle();
            }}>
            Contact
          </a>
          <a
            href="#"
            className="docs-creator"
            onClick={() => {
              toggleProfile();
            }}>
            Profile
          </a>
          <Link className="login-signup-btn docs-creator" onClick={handleClick}>
            <div className="d-flex">Logout</div>
          </Link>
        </div>
      </div>
    );
  };
  const toggleMenu = () => {
    setMenuClicked(!isMenuClicked); // Toggle the menu state
    setEditProfile(false);
    setProfileClicked(false); // Toggle the Profile state
  };
  const toggleProfile = () => {
    setProfileClicked(!isProfileClicked); // Toggle the Profile state
    setEditProfile(false);
    setMenuClicked(!isMenuClicked);
  };
  const navbtnToggle = () => {
    setMenuClicked(false);
    setProfileClicked(false);
    setEditProfile(false);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleClick = async (e) => {

      try {
        await fetch("https://angry-moon-10536.pktriot.net/logout", {
          method: "POST",
          credentials:'include',
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": '*',
          },
        }).then(res=>{
          if(res.status ===201){
            window.location.reload(true)
            navigate('/')
          }
          else{
            console.log("ERROR");
          }})
        
    } catch (error) {
        console.log(error)
    }
   
  };
  return (
    <>
      <RenderMenu />
    </>
  );
};

export default Nav;
