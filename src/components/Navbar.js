import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { changeTabActive } from "../redux/action.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ activeTab }) => {
  const [listNav] = useState(["home", "skills", "projects", "contact"]);
  const dispatch = useDispatch();
  const [statusNav, changeStatusNav] = useState(null);

  const toggleNav = () => {
    changeStatusNav(statusNav === null ? "active" : null);
  };

  const changeTab = (value) => {
    dispatch(changeTabActive(value));
    toggleNav();
  };

  return (
    <header>
      <div className="logo"></div>
      <nav className={statusNav}>
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
      <div className="icon-bar" onClick={toggleNav}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  activeTab: state.activeTab,
});

export default connect(mapStateToProps, changeTabActive)(Navbar);
