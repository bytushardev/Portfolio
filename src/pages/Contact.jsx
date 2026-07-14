import "./Contact.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function Contact() {
  return (
   <>
   <Navbar />
    <div className="contact">
      <div className="contact-container">

        <div className="contact-left">
          <p className="contact-small">GET IN TOUCH</p>

          <h1>Let's Work Together</h1>

          <p className="contact-description">
            Have a project in mind or just want to say hello?
            Feel free to send me a message.
          </p>

          <div className="contact-info">
            <div className="contact-item">
              <span>📧</span>
              <div>
                <h3>Email</h3>
                <p>tushar@email.com</p>
              </div>
            </div>

            <div className="contact-item">
              <span>📍</span>
              <div>
                <h3>Location</h3>
                <p>Ranchi, India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <form className="contact-form">

            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                placeholder="Write your message..."
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="send-btn">
              Send Message
            </button>

          </form>
        </div>

      </div>
    </div>
    <Footer />
   </>
  );
}

export default Contact;