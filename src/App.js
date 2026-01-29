import { Routes, Route, Navigate } from "react-router-dom";
import Aboutus from "./pages/about";
import Home from "./pages/home";
import ForgetPassword from "./pages/forget";
import Contact from "./pages/contact";
import Layout from "./pages/layout";
import Login from "./pages/login";
import Scam from "./pages/scam";
import Signup from "./pages/signup";

function App() {
  return (
    <Routes>
      {/* All pages wrapped in Layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="home" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<Aboutus />} />
        <Route path="scam" element={<Scam />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forget" element={<ForgetPassword />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
