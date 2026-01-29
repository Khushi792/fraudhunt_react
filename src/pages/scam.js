import React from "react";
import "./scam.css";

function Scam() {
  return (
    <div className="container" id="top">
      <h2>🕵️ Scam Details & Awareness</h2>

      <ul className="nav-links">
        <li><a href="#types">Types of Scams</a></li>
        <li><a href="#works">How Scams Work</a></li>
        <li><a href="#protect">Protection Tips</a></li>
        <li><a href="#report">Report a Scam</a></li>
      </ul>

      <section className="section">
        <h3>🔍 What is a Scam?</h3>
        <p>
          <strong className="highlight">
            A scam is a fraudulent trick used to steal money, data, or identity.
          </strong>
          <br />
          Scammers pretend to be banks, companies, officials, or relatives and
          create fear or urgency to manipulate victims.
        </p>
      </section>

      <section className="section">
        <h3>💡 Key Features of Scams</h3>
        <ul>
          <li>Deceptive identity</li>
          <li>Urgency or pressure</li>
          <li>Emotional manipulation</li>
          <li>Hidden intentions</li>
          <li>Financial or data theft</li>
        </ul>
      </section>

      <h2 id="types">Types of Scams</h2>

      <section className="section">
        <h3>📧 Phishing Scams</h3>
        <p>Fake emails or messages asking for login or payment details.</p>
        <ul>
          <li>Bank account verification emails</li>
          <li>Reward or lottery messages</li>
        </ul>
      </section>

      <section className="section">
        <h3>🔢 OTP / SIM Swap Fraud</h3>
        <p>Scammers steal OTPs or take control of your phone number.</p>
        <ul>
          <li>Calls asking for OTP</li>
          <li>SIM replacement fraud</li>
        </ul>
      </section>

      <section className="section">
        <h3>💼 Job Offer Scams</h3>
        <p>Fake job offers demanding registration or training fees.</p>
        <ul>
          <li>WhatsApp job messages</li>
          <li>Emails asking for upfront payment</li>
        </ul>
      </section>

      <section className="section" id="works">
        <h3>🔍 How Scams Work</h3>
        <ol>
          <li>Create fake offers</li>
          <li>Target victims</li>
          <li>Gain trust</li>
          <li>Create urgency</li>
          <li>Steal money or data</li>
        </ol>

        <p className="tip">✅ STOP • THINK • VERIFY</p>
      </section>

      <section className="section" id="protect">
        <h3>🛡️ How to Protect Yourself</h3>
        <ul>
          <li>Never share OTP or passwords</li>
          <li>Verify links and callers</li>
          <li>Enable 2-factor authentication</li>
          <li>Educate family members</li>
        </ul>
      </section>

      <section className="section report" id="report">
        <h3>🚨 Report a Scam</h3>
        <p>
          If you are a victim, report immediately to stop further damage.
        </p>

        <a
          href="https://cybercrime.gov.in"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Report on Cybercrime Portal
        </a>

        <h4>📞 Helpline: 1930 (India)</h4>

        <iframe
          src="https://www.youtube.com/embed/d9dMZ2aga58"
          title="Cyber Crime Complaint Guide"
          allowFullScreen
        ></iframe>

        <a href="#top" className="back-top">⬆ Back to Top</a>
      </section>
    </div>
  );
}

export default Scam;
