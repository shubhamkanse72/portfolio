import React, { useState, useRef } from "react";
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
      icon: "/html.png",
    },
    {
      name: "CSS",
      icon: "/css.png",
    },
    {
      name: "JavaScript",
      icon: "/js.png",
    },
    {
      name: "Vue.js",
      icon: "/vue.png",
    },
    {
      name: "React.js",
      icon: "/react.png",
    },
    {
      name: "Git",
      icon: "/git.png",
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
