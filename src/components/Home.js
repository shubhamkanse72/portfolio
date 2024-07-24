import React, { useRef } from "react";
import CustomHook from "./CustomHook";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Home() {
  const gitHub = "https://github.com/shubhamkanse72";
  const linkedIn = "https://www.linkedin.com/in/shubhamkanse/";
  const scrollTab = useRef();
  CustomHook(scrollTab);

  return (
    <section ref={scrollTab} className="home">
      <div className="content">
        <div className="name">
          Hi, It's <span>Shubham </span> <br />I am a Frontend Developer
        </div>
        <div className="des">
          Passionate frontend developer with a total of 2 years in frontend
          development, including 1.5 years of dedicated experience in Vue.js,
          React.js and 7 months of internship exposure. Aspiring to become a
          full stack developer with a focus on the MERN stack.
        </div>
        <div className="social">
          <a href={gitHub}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href={linkedIn}>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>

        <a className="download" href={`${process.env.PUBLIC_URL}/resume.pdf`}>
          Download Resume
        </a>
      </div>
      {/* <div className="avatar">
        <div className="card">
          <img src="/youth_img.jpg" alt="youth" />
          <div className="info">
            <div>Frontend Developer</div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default Home;
