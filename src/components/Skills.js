import React, { useState, useRef } from "react";
import vue from "../assets/vue.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import git from "../assets/git.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomHook from "./CustomHook";
// import {
//   faReact,
//   faVuejs,
//   faHtml5,
//   faJs,
//   faCss3,
//   faGit,
// } from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  const scrollTab = useRef();
  CustomHook(scrollTab);

  const [listSkills] = useState([
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: js,
    },
    {
      name: "Vue.js",
      icon: vue,
    },
    {
      name: "React.js",
      icon: react,
    },
    {
      name: "Git",
      icon: git,
    },
  ]);
  return (
    <section className="skills" ref={scrollTab}>
      <div className="title">Skills</div>
      <div className="des">
        Proficient in HTML, JavaScript, Vue js, React js <br />
        Familiar with TypeScript, CSS, Git, MySQL, C
      </div>
      <div className="list">
        {listSkills.map((value, key) => (
          <div className="item" key={key}>
            {/* <FontAwesomeIcon icon={value.icon} /> */}
            <img src={value.icon} alt="skill" />
            <h3>{value.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
