import React, { useEffect } from "react";
import "./signup.css";
import "./home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "./images/logo.png";

const Signup = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <main
      className="signup-container"
      data-aos="zoom-in"
    >
      {/* Left Section */}
      <div className="left-side glass">
       <img id="logo" src={logo} alt="LOGO" />
        <h3>
          <b>FraudHunt</b>
        </h3>
      </div>

      {/* Right Section */}
      <div className="right-side">
        <div className="title-text">
          <h2>🚀 Create Account</h2>
        </div>

        <form onSubmit={handleSubmit} autoComplete="on">
          <input
            type="text"
            name="fullName"
            placeholder="👤 Full Name"
            required
          />

          <input
            type="date"
            name="dob"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="📞 Phone Number"
            pattern="[0-9]{10}"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="📧 Email"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="🔒 Password"
            required
          />

          <input type="submit" value="Register 🚀" />

          <div className="login-link">
            Already have an account?{" "}
            <a href="/login">Login</a>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Signup;
