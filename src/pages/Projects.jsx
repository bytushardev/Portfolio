import "./Projects.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function Projects() {
  return (
    <>
    <Navbar />
    <div className="projects">
      <div className="projects-container">

        <div className="projects-heading">
             
          <p>MY WORK</p>
          <h1>Projects</h1>
          <span>
            Here are some projects I've built while learning
            frontend development.
          </span>
        </div>

        <div className="projects-grid">

          <div className="project-card">
            <div className="project-number">01</div>

            <h2>Todo App</h2>

            <p>
              A simple and functional Todo App where users can
              add and manage their daily tasks.
            </p>

            <div className="project-skills">
              <span>React</span>
              <span>CSS</span>
            </div>

            <button className="project-button">
              View Project →
            </button>
          </div>

          <div className="project-card">
            <div className="project-number">02</div>

            <h2>Portfolio Website</h2>

            <p>
              A modern personal portfolio website built using
              React with multiple pages.
            </p>

            <div className="project-skills">
              <span>React</span>
              <span>CSS</span>
            </div>

            <button className="project-button">
              View Project →
            </button>
          </div>

          <div className="project-card">
            <div className="project-number">03</div>

            <h2>Product App</h2>

            <p>
              A product website that fetches and displays
              product data using an API.
            </p>

            <div className="project-skills">
              <span>JavaScript</span>
              <span>API</span>
            </div>

            <button className="project-button">
              View Project →
            </button>
          </div>

        </div>
      </div>
    </div>
    <Footer />    </>
  );
}

export default Projects;