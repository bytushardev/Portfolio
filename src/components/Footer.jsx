import "./Footer.css";

function Footer() {
    return (
      <div> 
        <footer className="footer">
            <div className="footer-left">
                <h2>Tushar.</h2>
                <p>Building clean and modern web experiences.</p>
            </div>

            <div className="footer-links">
                <button onClick={() => navigate("/")}>Home</button>
                <button onClick={() => navigate("/about")}>About</button>
                <button onClick={() => navigate("/projects")}>Projects</button>
                <button onClick={() => navigate("/contact")}>Contact</button>
            </div>

            <p className="copyright">
                © 2026 Tushar. All rights reserved.
            </p>
            </footer>
       </div>
       );

       }

       export default Footer;