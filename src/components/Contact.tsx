import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=officialrushikesh22@gmail.com&su=Portfolio%20Inquiry" 
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
              >
                officialrushikesh22@gmail.com
              </a>
            </p>
            <h4 style={{ marginTop: "15px" }}>Phone</h4>
            <p>
              <a href="tel:+918767599309" data-cursor="disable">
                +91 8767599309
              </a>
            </p>
            <h4>Education</h4>
            <p style={{ marginBottom: "2px" }}>B.E. in Artificial Intelligence and Data Science</p>
            <p style={{ fontSize: "0.85em", marginTop: 0, opacity: 0.8 }}>
              D Y Patil School of Engineering, Pune
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Rushi22007"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/rushikesh-chamle-15b747372/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://leetcode.com/u/hxXPJs8fIb/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Leetcode <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/_rushireddy?igsh=aTJwMjFld3U0aDRh"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Rushikesh Chamle</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
