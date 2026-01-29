import React, { useState } from "react";
import "./forget.css";
import "./home.css";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [emailOTP, setEmailOTP] = useState("");
  const [mobileOTP, setMobileOTP] = useState("");
  const [generatedEmailOTP, setGeneratedEmailOTP] = useState("");
  const [generatedMobileOTP, setGeneratedMobileOTP] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otpSectionVisible, setOtpSectionVisible] = useState(false);

  const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const handleSendOTP = () => {
    if (!email.trim() || !mobile.trim()) {
      alert("Please enter both email and mobile number.");
      return;
    }

    const storedData = JSON.parse(localStorage.getItem("userData"));

    if (!storedData) {
      alert("No user data found. Please register first.");
      return;
    }

    if (email !== storedData.email || mobile !== storedData.phone) {
      alert("Email or mobile number does not match our records.");
      return;
    }

    // ✅ Generate dummy OTPs (no EmailJS)
    const emailOtpGen = generateOTP();
    const mobileOtpGen = generateOTP();
    setGeneratedEmailOTP(emailOtpGen);
    setGeneratedMobileOTP(mobileOtpGen);

    alert(`(For Demo) Email OTP: ${emailOtpGen}\nMobile OTP: ${mobileOtpGen}`);
    setOtpSectionVisible(true);
  };

  const handleVerifyAndReset = () => {
    if (!emailOTP || !mobileOTP || !newPassword || !confirmPassword) {
      alert("All fields are required.");
      return;
    }

    if (emailOTP !== generatedEmailOTP || mobileOTP !== generatedMobileOTP) {
      alert("Invalid OTP(s). Please check and try again.");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const storedData = JSON.parse(localStorage.getItem("userData"));
    storedData.password = newPassword;
    localStorage.setItem("userData", JSON.stringify(storedData));

    alert("Password reset successful.");
    window.location.href = "login.html";
  };

  return (
    <>
      <div className="rowclass">
      <div className="row">
        <h1>Forgot Password?</h1>
        <h6 className="information-text">
          Enter your registered email and mobile to receive OTPs for verification.
        </h6>

        <div className="form-group">
          <input
            type="email"
            id="user_email"
            placeholder="📧 Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="user_email">Email</label>

          <input
            type="tel"
            id="user_mobile"
            placeholder="📱 Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
          <label htmlFor="user_mobile">Mobile Number</label>

          <button onClick={handleSendOTP}>Send OTPs</button>
        </div>

        {otpSectionVisible && (
          <div className="form-group">
            <input
              type="text"
              id="email_otp"
              placeholder="🔐 OTP from Email"
              value={emailOTP}
              onChange={(e) => setEmailOTP(e.target.value)}
              required
            />
            <label htmlFor="email_otp">OTP (Email)</label>

            <input
              type="text"
              id="mobile_otp"
              placeholder="🔐 OTP from Mobile"
              value={mobileOTP}
              onChange={(e) => setMobileOTP(e.target.value)}
              required
            />
            <label htmlFor="mobile_otp">OTP (Mobile)</label>

            <input
              type="password"
              id="new_password"
              placeholder="🔒 New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <label htmlFor="new_password">New Password</label>

            <input
              type="password"
              id="confirm_password"
              placeholder="🔒 Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <label htmlFor="confirm_password">Confirm Password</label>

            <button onClick={handleVerifyAndReset}>Verify & Reset Password</button>
          </div>
        )}

        <div className="footer">
          <h5>
           Not a memeber?{" "}
            <a href="/signup">signup</a>
          </h5>
          <h5>
            Already have an account?{" "}
            <a href="/login">Login</a>
          </h5>
        </div>
      </div>
      </div>
    </>
  );
};

export default ForgetPassword;
