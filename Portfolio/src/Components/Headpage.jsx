import React from "react";
import "./HeadPage.css";

const headpage = () => {
  return (
    <div>
      <div class="container">
        <h1>
          <span class="h1">HARISH</span> K
        </h1>
        <button class="hamburger" id="hamburger">&#9776;</button>
        <ul class="nav-links">
          <li>
            <a href="">INTRO</a>
          </li>
          <li>
            <a href="">ABOUT</a>
          </li>
          <li>
            <a href="">WORKS</a>
          </li>
          <li>
            <a href="">RESUME</a>
          </li>
          <li>
            <a href="">SAY HELLO</a>
          </li>
        </ul>
      </div>

      <div class="header">
        <div class="content">
          <h1>
            Welcome to <span class="my">My</span> Web development Portfolio!
          </h1>
          <p class="p1">
            I'm Harish K, a passionate web developer based in Kerala. Here,
            you'll get a glimpse of my journey in the world of web development,
            where creativity meets functionality.
          </p>

          <div>
            <p>Your Email</p>
            <div>
              <input type="text" placeholder="Enter your email" />
              <button class="req">REQUIRE OFFER</button>
            </div>

            <div class="p2">
              <p>
                Read my{" "}
                <a class="p2" href="">
                  Terms and Conditions
                </a>
              </p>
            </div>
          </div>
        </div>

        <div>
          <img src="/ImgHari.jpg" alt="" />
        </div>
      </div>

      <div>
        <div class="A2">
          <p class="p3">
            <span class="my">My</span> SKILLS
          </p>
          <h1 class="h1A">What I do</h1>
          <p class="p4">
            ✨ I’m a Front-End Alchemist, turning clean code into beautiful,
            responsive interfaces using HTML, CSS, and JavaScript. ⚙️ As a
            Back-End Builder, I design the backbone of web applications with
            Node.js and Express. 🔗 I’m also a Version Control Navigator,
            keeping code clean, collaborative, and under control with Git and
            GitHub. 🚀 Above all, I’m a Lifelong Learner, always exploring new
            frameworks, best practices, and tools to stay ahead in this
            ever-evolving digital world.
          </p>
        </div>

        <div class="icons">
          <img src="/icons8-html5-48.png" alt="html" />
          <img src="/icons8-css3-48.png" alt="css" />
          <img src="/icons8-javascript-50.png" alt="js" />
          <img src="/icons8-express-js-50.png" alt="node" />
          <img src="/icons8-node-js-32.png" alt="express" />
          <img src="/icons8-github-logo-50.png" alt="git" />
        </div>

        <div class="services">
          <div class="service">
            <div class="icon">📐</div>
            <h5>Frontend Web Development</h5>
            <p>
              I craft visually appealing and functional websites that deliver
              seamless user experiences. By leveraging modern tools and best
              practices, I build responsive interfaces that captivate and engage
              visitors across all devices.
            </p>
          </div>

          <div class="service">
            <div class="icon">⚙️</div>
            <h5>Backend Development</h5>
            <p>
              Behind every great website is a solid backend. I develop robust
              server-side logic, databases, and APIs to ensure your application
              runs smoothly, securely, and efficiently — from data handling to
              deployment.
            </p>
          </div>

          <div class="service">
            <div class="icon">🧩</div>
            <h5>Technology Stack</h5>
            <p>
              I’m skilled in a variety of cutting-edge technologies, including
              HTML5, CSS3, JavaScript, React, Node.js, and more. This versatile
              stack allows me to tackle complex projects and deliver
              high-performance web solutions.
            </p>
          </div>

          <div class="service">
            <div class="icon">⚡</div>
            <h5>Performance Optimization</h5>
            <p>
              Fast websites make happy users. I fine-tune websites and web apps
              for optimal speed, responsiveness, and SEO, ensuring your audience
              enjoys a smooth and satisfying browsing experience.
            </p>
          </div>

          <div class="service">
            <div class="icon">🎨</div>
            <h5>User-Centered Design</h5>
            <p>
              Every project I build keeps the end user in mind. I design
              interfaces that are both beautiful and intuitive, providing a
              seamless journey that blends form and function perfectly.
            </p>
          </div>

          <div class="service">
            <div class="icon">✅</div>
            <h5>Testing & Quality Assurance</h5>
            <p>
              I rigorously test every line of code to deliver secure, stable,
              and bug-free applications. Quality is never compromised, giving
              you peace of mind and ensuring your product performs reliably in
              the real world.
            </p>
          </div>
        </div>
      </div>

      <div class="contact">
        <div class="contact-container">
          <div class="contact-left">
            <h4>Get In Touch</h4>
            <form>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <input type="tel" placeholder="Your Phone" />
              <textarea placeholder="Write a Message"></textarea>
              <button type="submit">SEND MESSAGE</button>
            </form>
          </div>

          <div class="contact-right">
            <h4>My Contact Details</h4>
            <p class="label">EMAIL</p>
            <p>harishkaladharan10@gmail.com</p>
            <p class="label">PHONE</p>
            <p>+91 8593920380</p>
            <p class="label">FAX</p>
            <p>+91 7012020609</p>
            <p class="label">ADDRESS</p>
            <p>
              Nandanam House
              <br />
              Manchira, Chittur(PO)
              <br />
              Palakkad, Kerala
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default headpage;


