import { Outlet, NavLink } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./home.css";
import logo from "./images/logo.png";

function Home() {
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({ duration: 1000 });

    // Scroll progress bar logic
    const progress = document.querySelector(".progress");
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scroll = (window.scrollY / totalHeight) * 100;
      progress.style.width = `${scroll}%`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Header & Navigation */}
      <header>
        <div className="progress"></div>
        <nav>
          <ul>
            <img id="logo" src={logo} alt="LOGO" />
            <li>
              <NavLink to="/home" className={({ isActive }) => (isActive ? "active" : "")}>
                Home
              </NavLink>
            </li>
           
            
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/scam" className={({ isActive }) => (isActive ? "active" : "")}>
                Scam
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup" className={({ isActive }) => (isActive ? "active" : "")}>
                Signup
              </NavLink>
            </li>
             <li>
              <NavLink to="/forget" className={({ isActive }) => (isActive ? "active" : "")}>
                Forget
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
                Contact
              </NavLink>
            </li>
          </ul>
                  <span class="menu-toggle">☰</span>
        </nav>
      </header>

      {/* Nested routes will render here */}
      <Outlet />

      {/* Home Section */}
      <section id="home" data-aos="fade-up">
        <div className="text">
          <h1>🚨 FRAUD HUNT</h1>
          <h2>Stay alert about scams, frauds, and phishing risks online.</h2>
          <h1>📖 ABOUT US</h1>
          <h2>
            We educate and protect users from deceptive digital activities including job scams,
            phishing, crypto fraud, and more.
          </h2>
        </div>

        <div className="c" data-aos="zoom-in">
          <a
            href="https://cybercrime.gov.in/Webform/Index.aspx"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔍 FRAUD CATEGORIES
          </a>
          <br />
          <NavLink to="/scam">📑 SCAM DETAILS</NavLink>
          <br />

          <a
            href="https://cybercrime.gov.in/Webform/Crime_AuthoLogin.aspx?rnt=5"
            target="_blank"
            rel="noopener noreferrer"
          >
            📢 REPORT FRAUD
          </a>
          <br />

          <a
            href="https://cybercrime.gov.in/Webform/CyberAware.aspx"
            target="_blank"
            rel="noopener noreferrer"
          >
            📰 AWARENESS BLOG
          </a>
          <br />
        </div>
      </section>

      {/* Partner Section */}
      <section className="partner-section">
        <div className="partner-container">
          <h3>🤝 In Collaboration With</h3>
          <p>
            We proudly support and collaborate with the{" "}
            <strong>Indian Cyber Crime Coordination Centre (I4C)</strong>, under the Ministry of
            Home Affairs, Government of India, to report and combat online frauds.
          </p>
          <a
            href="https://www.cybercrime.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="partner-link"
          >
            Report a Cyber Crime ➜
          </a>
        </div>
      </section>
              <script>
  const toggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav ul");

  toggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
</script>
    </>
  );
}

export default Home;
