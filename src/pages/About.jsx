import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import "./About.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function About() {
    const navigate = useNavigate();
    
  return (
     
  <>
  <Navbar />
    <div className="about">
          
      <div className="about-container">

        <div className="about-left">
          <p className="about-small">GET TO KNOW ME</p>

          <h1>About Me</h1>

          <h2>
            I'm Tushar, a Frontend Developer 👋
          </h2>

          <p className="about-description">
            I'm a passionate frontend developer who enjoys building
            clean, modern and user-friendly websites.
          </p>

          <p className="about-description">
            I'm currently learning React and improving my JavaScript
            skills by building real projects.
          </p>

          <button className="contact-btn"
            onClick={() => navigate("/Contact")} 
            >
            Contact Me
          </button>

          

        </div>

        <div className="about-right">
          <div className="info-card">
            <h3>My Skills</h3>

            <div className="skills">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
            </div>
          </div>

          <div className="info-card">
            <h3>Quick Info</h3>

            <p>🎓 BCA Student</p>
            <p>💻 Frontend Developer</p>
            <p>📍 Ranchi, India</p>
          </div>
        </div>

      </div>
    </div>
  <Footer />
  </>
  );
}

export default About;
