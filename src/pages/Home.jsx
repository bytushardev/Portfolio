import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Footer from "../components/Footer";
import "./Home.css";

function Home() {

    const navigate = useNavigate()

    function handleGoToAbout() {
        navigate("/about")
    }

    return (
        <>
        <section>

            <Navbar />

            <div className="home">
                <div className="homeContent">
                    <p className="hello">👋 Hello, I'm</p>

                    <h1>Tushar </h1>

                    <h2>Frontend Developer</h2>

                    <p className="description">
                        I build clean, modern and user-friendly websites
                        using React and JavaScript.
                    </p>

                    <div className="homeButtons">
                        <button className="projectBtn"
                            onClick={() => navigate("/Projects")}
                        >
                            View Projects
                        </button>

                        <button
                            className="aboutBtn"
                            onClick={() => navigate("/about")}
                        >
                            About Me
                        </button>

                    </div>
                </div>
            </div>
            <div className="hero-card">
                <span>&lt;/&gt;</span>
                <h3>Building ideas into websites.</h3>
                <p>React • JavaScript • CSS</p>
            </div>


            <section className="tech-section">
                <p>TECHNOLOGIES I WORK WITH</p>

                <div className="tech-list">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>React</span>
                </div>
            </section>

            <section>
            </section>

        </section>
            <Footer />

        </>

    );
}
export default Home;



