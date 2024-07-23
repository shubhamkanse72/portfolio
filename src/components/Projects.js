import React, { useState, useRef } from "react";
import CustomHook from "./CustomHook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonCircleQuestion,
  faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const [listProjects] = useState([
    {
      name: "Tic Tac Toe",
      des: "The Tic Tac Toe game is a fun and interactive web application developed using React.js. It allows two players to engage in a classic game of Tic Tac Toe while also providing the option to customize their names before starting.",
      image: "/tic-tac-toe.png",
    },
    {
      name: "Investment Calculator",
      des: "The React Investment Calculator is a web application built using React.js that helps users plan their investments. It accepts inputs such as initial investment, annual investment, duration, and expected return, and generates a table showing year-wise details including invested capital, interest earned, total interest, and investment value for each",
      image: "/calculator.png",
    },
    {
      name: "React Quiz App",
      des: "This project is a web-based quiz application built with React. It tests your knowledge of React concepts and displays the results at the end.",
      image: "/quiz.png",
    },
  ]);

  const scrollTab = useRef();
  CustomHook(scrollTab);

  return (
    <section className="projects" ref={scrollTab}>
      <div className="title">Projects</div>
      <div className="des"></div>
      <div className="list">
        {listProjects.map((value, key) => (
          <div className="item" key={key}>
            <div className="images">
              <img src={value.image}></img>
              {/* <div className="buttons">
                <button>Demo</button>
                <button>Source</button>
              </div> */}
            </div>
            <div className="content">
              <h3>{value.name}</h3>
              <div className="des">{value.des}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
