import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "./HeadPage.css";

const Headpage = () => {
  const [navActive, setNavActive] = useState(false);
  const [email, setEmail] = useState("");
  const form = useRef();
  const [sent, setSent] = useState(false);

  // Handle email form submission in intro section
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:harishkaladharan10@gmail.com?subject=Portfolio Contact&body=My email: ${email}`;
    setEmail("");
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_lw2vow3",      // <-- your actual Service ID
        "template_xyz456",      // <-- your actual Template ID
        form.current,
        "public_789def"         // <-- your actual Public Key
      )
      .then(
        (result) => {
          setSent(true);
        },
        (error) => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div>
      <nav className="container">
        <h1 className="h1">HARISH K</h1>
        <button
          className="hamburger"
          id="hamburger"
          onClick={() => setNavActive(!navActive)}
          aria-label="Toggle navigation"
        >
          &#9776;
        </button>
        <ul className={`nav-links${navActive ? " active" : ""}`}>
          <li>
            <a href="#intro">INTRO</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#works">WORKS</a>
          </li>
          <li>
            <a href="#resume">RESUME</a>
          </li>
          <li>
            <a href="#contact">SAY HELLO</a>
          </li>
        </ul>
      </nav>

      <header className="header" id="intro">
        <div className="content">
          <h1>
            Welcome to <span className="my">My</span> Web development Portfolio!
          </h1>
          <p className="p1">
            I'm Harish K, a passionate web developer based in Kerala. Here,
            you'll get a glimpse of my journey in the world of web development,
            where creativity meets functionality.
          </p>
          <div className="email-section">
            <div className="email-label">Contact Me Directly</div>
            <form className="email-form" onSubmit={handleEmailSubmit}>
              <input
                type="email"
                className="email-input"
                placeholder="Your email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="email-btn">Send</button>
            </form>
            <div className="email-note">
              Or email me at{" "}
              <a href="mailto:harishkaladharan10@gmail.com">
                harishkaladharan10@gmail.com
              </a>
              <br />
              By submitting, you agree to our{" "}
              <a href="#">Terms & Conditions</a>.
            </div>
          </div>
        </div>
        <div>
          <img src="/ImgHari.jpg" alt="Harish K" />
        </div>
      </header>

      <section className="A2" id="about">
        <p className="p3">
          <span className="my">My</span> SKILLS
        </p>
        <h1 className="h1A">What I do</h1>
        <p className="p4">
          ✨ I’m a Front-End Alchemist, turning clean code into beautiful,
          responsive interfaces using HTML, CSS, and JavaScript. ⚙️ As a
          Back-End Builder, I design the backbone of web applications with
          Node.js and Express. 🔗 I’m also a Version Control Navigator,
          keeping code clean, collaborative, and under control with Git and
          GitHub. 🚀 Above all, I’m a Lifelong Learner, always exploring new
          frameworks, best practices, and tools to stay ahead in this
          ever-evolving digital world.
        </p>
      </section>

      <section className="icons" id="skills">
        <img src="/icons8-html5-48.png" alt="HTML5" />
        <img src="/icons8-css3-48.png" alt="CSS3" />
        <img src="/icons8-javascript-50.png" alt="JavaScript" />
        <img src="/icons8-express-js-50.png" alt="Express.js" />
        <img src="/icons8-node-js-32.png" alt="Node.js" />
        <img src="/icons8-github-logo-50.png" alt="GitHub" />
      </section>

      <section className="services" id="services">
        <div className="service">
          <div className="icon">📐</div>
          <h5>Frontend Web Development</h5>
          <p>
            I craft visually appealing and functional websites that deliver
            seamless user experiences. By leveraging modern tools and best
            practices, I build responsive interfaces that captivate and engage
            visitors across all devices.
          </p>
        </div>
        <div className="service">
          <div className="icon">⚙️</div>
          <h5>Backend Development</h5>
          <p>
            Behind every great website is a solid backend. I develop robust
            server-side logic, databases, and APIs to ensure your application
            runs smoothly, securely, and efficiently — from data handling to
            deployment.
          </p>
        </div>
        <div className="service">
          <div className="icon">🧩</div>
          <h5>Technology Stack</h5>
          <p>
            I’m skilled in a variety of cutting-edge technologies, including
            HTML5, CSS3, JavaScript, React, Node.js, and more. This versatile
            stack allows me to tackle complex projects and deliver
            high-performance web solutions.
          </p>
        </div>
        <div className="service">
          <div className="icon">⚡</div>
          <h5>Performance Optimization</h5>
          <p>
            Fast websites make happy users. I fine-tune websites and web apps
            for optimal speed, responsiveness, and SEO, ensuring your audience
            enjoys a smooth and satisfying browsing experience.
          </p>
        </div>
        <div className="service">
          <div className="icon">🎨</div>
          <h5>User-Centered Design</h5>
          <p>
            Every project I build keeps the end user in mind. I design
            interfaces that are both beautiful and intuitive, providing a
            seamless journey that blends form and function perfectly.
          </p>
        </div>
        <div className="service">
          <div className="icon">✅</div>
          <h5>Testing & Quality Assurance</h5>
          <p>
            I rigorously test every line of code to deliver secure, stable,
            and bug-free applications. Quality is never compromised, giving
            you peace of mind and ensuring your product performs reliably in
            the real world.
          </p>
        </div>
      </section>

      <section className="resume" id="resume">
        <div className="resume-content">
          <h2>My Resume</h2>
          <p>
            Download or view my resume to learn more about my experience, skills, and education.
          </p>
          <a
            href="/Harish CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            View / Download Resume
          </a>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-container">
          <div className="contact-left">
            <h4>Get In Touch</h4>
            <form ref={form} onSubmit={handleContactSubmit}>
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <input type="tel" name="phone" placeholder="Your Phone" />
              <textarea name="message" placeholder="Write a Message" required></textarea>
              <button type="submit">SEND MESSAGE</button>
              {sent && <p style={{color: "green", marginTop: "10px"}}>Message sent successfully!</p>}
            </form>
          </div>
          <div className="contact-right">
            <h4>My Contact Details</h4>
            <p className="label">EMAIL</p>
            <p>harishkaladharan10@gmail.com</p>
            <p className="label">PHONE</p>
            <p>+91 8593920380</p>
            <p className="label">FAX</p>
            <p>+91 7012020609</p>
            <p className="label">ADDRESS</p>
            <p>
              Nandanam House
              <br />
              Manchira, Chittur(PO)
              <br />
              Palakkad, Kerala
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Headpage;
