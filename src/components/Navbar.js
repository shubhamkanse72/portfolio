import React, { useState, useRef, useEffect, useCallback } from "react";
import { connect, useDispatch } from "react-redux";
import { changeTabActive } from "../redux/action.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ activeTab }) => {
  const [listNav] = useState(["home", "skills", "projects", "contact"]);
  const dispatch = useDispatch();
  const [statusNav, changeStatusNav] = useState(null);

  const navRef = useRef(null);
  const iconRef = useRef(null);

  const toggleNav = useCallback(() => {
    changeStatusNav(statusNav === null ? "active" : null);
  }, [statusNav]);

  const handleClickOutside = useCallback(
    (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        !iconRef.current.contains(event.target)
      ) {
        toggleNav();
      }
    },
    [toggleNav]
  );

  const changeTab = (value) => {
    dispatch(changeTabActive(value));
    toggleNav();
  };

  useEffect(() => {
    if (statusNav) {
      document.body.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup the event listener on component unmount
    return () => {
      document.body.removeEventListener("mousedown", handleClickOutside);
    };
  }, [statusNav, handleClickOutside]);

  return (
    <header>
      <div className="logo"></div>
      <nav className={statusNav} ref={navRef}>
        {listNav.map((value, key) => (
          <span
            className={activeTab === value ? "active" : ""}
            key={key}
            onClick={() => changeTab(value)}
          >
            {value}
          </span>
        ))}
      </nav>
      <div ref={iconRef} className="icon-bar" onClick={toggleNav}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  activeTab: state.activeTab,
});

export default connect(mapStateToProps, changeTabActive)(Navbar);
