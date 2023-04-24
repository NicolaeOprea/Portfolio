import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi,My Name is Nicolae</h2>
        <div className="prompt">
          <p>A front-end developer with a passion in learning and creating!</p>
        </div> 
        <div className="homeicon">
        <a href="https://www.linkedin.com/feed/" target={"_blank"}><FaLinkedin /></a>
        <a href="https://www.facebook.com/home.php" target={"_blank"}><FaFacebook /></a>
        <a href=""><FaGithub /></a>
        </div>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        
          <li>
            <h3>Front-End</h3>
            <span>ReactJS,NPM,BootStrap,StyledComponents</span>
          </li>
          <li>
            <h3>Languages</h3>
            <span>JavaScript</span>
          </li>
       
      </div>
    </div>
  );
}

export default Home;
