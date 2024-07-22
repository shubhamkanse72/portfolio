import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faVuejs,
  faHtml5,
  faJs,
  faCss3,
  faGit,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  const [listSkills] = useState([
    {
      name: "HTML",
      icon: faHtml5,
    },
    {
      name: "CSS",
      icon: faCss3,
    },
    {
      name: "JavaScript",
      icon: faJs,
    },
    {
      name: "Vue.js",
      icon: faVuejs,
    },
    {
      name: "React.js",
      icon: faReact,
    },
    {
      name: "Git",
      icon: faGit,
    },
  ]);
  return (
    <section className="skills">
      <div className="title">These are my Skills</div>
      <div className="des">
        Proficient in HTML, JavaScript, Vue js, React js <br />
        Familiar with TypeScript, CSS, Git, MySQL, C
      </div>
      <div className="list">
        {listSkills.map((value, key) => (
          <div className="item" key={key}>
            <FontAwesomeIcon icon={value.icon} />
            <h3>{value.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
