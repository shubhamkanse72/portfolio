import React from "react";

const Home = () => {
  return (
    <section className="home">
      <div className="content">
        <div className="name">
          MY NAME IS <span>SHUBHAM</span>
        </div>
        <div className="des">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ut
          enim. Esse, aspernatur beatae? Quasi dicta enim distinctio doloribus
          autem et ad? Accusantium aliquam esse mollitia totam amet dolorem at.
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
};

export default Home;
