import React, { useRef } from "react";
import CustomHook from "./CustomHook";
function Home() {
  const scrollTab = useRef();
  CustomHook(scrollTab);

  return (
    <section ref={scrollTab} className="home">
      <div className="content">
        <div className="name">
          MY NAME IS <span>SHUBHAM</span>
        </div>
        <div className="des">
          Passionate frontend developer with a total of 2 years in frontend
          development, including 1.5 years of dedicated experience in Vue.js,
          React.js and 7 months of internship exposure. Aspiring to become a
          full stack developer with a focus on the MERN stack. Looking for
          challenging and responsible opportunity to explore strengths and
          potential in a professional organization.
        </div>
        <a href={`${process.env.PUBLIC_URL}/resume.pdf`}>Download Resume</a>
      </div>
      <div className="avatar">
        <div className="card">
          <img src="/youth_img.jpg" alt="youth" />
          <div className="info">
            <div>Frontend Developer</div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
