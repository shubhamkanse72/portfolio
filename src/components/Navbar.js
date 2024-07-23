import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { changeTabActive } from "../redux/action.js";

const Navbar = ({ activeTab }) => {
  const [listNav] = useState(["home", "skills", "projects", "contact"]);
  const dispatch = useDispatch();

  const changeTab = (value) => {
    dispatch(changeTabActive(value));
  };

  return (
    <header>
      <div className="logo">{/* <img src='/logo.png'></img> */}</div>
      <nav>
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
    </header>
  );
};

const mapStateToProps = (state) => ({
  activeTab: state.activeTab,
});

export default connect(mapStateToProps, changeTabActive)(Navbar);
