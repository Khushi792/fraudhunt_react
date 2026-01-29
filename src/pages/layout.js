import { Outlet, NavLink } from "react-router-dom";
import logo from "./images/logo.png";
import "./home.css";
function Layout() {
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
        </nav>
      </header>

      {/* Nested routes will render here */}
      <Outlet />

      {/* Footer */}
      <footer>
        <ul>
          <li>
            <NavLink to="/home">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/about">ABOUT US</NavLink>
          </li>
          <li>
            <NavLink to="/contact">CONTACT US</NavLink>
          </li>
        </ul>
        <p>© TEAM C — ALL RIGHTS RESERVED</p>
      </footer>
    </>
  );
}

export default Layout;