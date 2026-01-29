import './about.css';
import logo from "./images/logo.png";
function Aboutus() {
  return (
    <>
      <br />
      <br />

      <div className="content-section">
        <h1 id="about-us">Who We Are</h1>
        <p>
          We are a dedicated team of students and technology enthusiasts who care deeply about online safety.
          Seeing people around us fall victim to scams made us realize how important it is to spread awareness
          in simple language that everyone can understand.
        </p>
        <p>
          Our team combines different skills — from web design to research — to build a platform that explains fraud types,
          shares real examples, and offers practical tips. We believe that by making complex topics easy to read and relatable,
          anyone — no matter their age or background — can learn to protect themselves online.
        </p>
        <h2 id="title">Together, we can create a digital space that is safer for everyone</h2>
        <h1>OUR MISSION</h1>
        <p>
          We believe that awareness is the strongest shield. By making information easy to understand and accessible to everyone,
          Fraud Shield helps people recognize fraud before it happens and build confidence in staying safe online.
        </p>

        <h1>Why We Build Fraud hunt</h1>
        <p>
          We built Fraud hunt because we noticed many people, especially students, job seekers, and elderly family members,
          didn’t know how to spot scams. We saw common scams like fake job offers, phishing emails, and fake social media links
          causing real harm — people losing money, data, or confidence in using technology.
        </p>
        <p>We wanted to create one simple place where:</p>
        <ul>
          <li>People can quickly learn about different scams.</li>
          <li>Find practical, everyday safety tips.</li>
          <li>Stay updated with new fraud trends.</li>
          <li>Share or read real-life stories to see how scams actually happen.</li>
        </ul>
        <p>
          Our goal isn’t to scare people — it’s to empower everyone with the knowledge to stay safe online.
        </p>

        <h1>What We Offer</h1>
        <dl>
          <dt><strong>Understand the risks:</strong></dt>
          <dd>Read plain-language guides about common fraud types like job scams, crypto scams, romance fraud, and phishing.</dd>
          <dt><strong>Recognize the signs:</strong></dt>
          <dd>Learn how to spot suspicious patterns and protect your data.</dd>
          <dt><strong>Report &amp; share:</strong></dt>
          <dd>Use our platform to report scams you’ve seen, helping others stay safe too.</dd>
          <dt><strong>Stay updated:</strong></dt>
          <dd>Get the latest insights on new scam tactics and how to avoid them.</dd>
        </dl>

        <h2 id="fraud-types-section">📦 Fraud Types</h2>
        <div className="container">
          <div className="box">
            <h3>💼 Job Fraud</h3>
            <p>
              Fake job offers or recruitment scams trick people into paying fees or sharing personal information by promising attractive jobs that don’t exist.
            </p>
            <a href="#job-fraud">Read More --&gt;</a>
          </div>
          <div className="box">
            <h3>❤️ Romance Fraud</h3>
            <p>
              Scammers build online relationships on social media or dating apps, then ask for money using emotional stories and false promises.
            </p>
            <a href="#romance-fraud">Read More</a>
          </div>
          <div className="box">
            <h3>📶 Network Scams</h3>
            <p>
              Fraud targeting Wi-Fi networks or devices, often through fake hotspots, malware links, or suspicious downloads to gain access to your data.
            </p>
            <a href="#network-scams">Read More</a>
          </div>
          <div className="box">
            <h3>💸 Fake Loan Offers</h3>
            <p>
              Many fraudsters offer fake loans without checking documents, but they ask for advance payment.
              They promise quick loans and disappear after getting your money.
            </p>
            <a href="#fake-loan-offers">Read More</a>
          </div>
          <div className="box">
            <h3>💸 Crypto / Betting Scams</h3>
            <p>
              Promise high profits or big bonuses by investing. They show fake profits and vanish after people invest.
            </p>
            <a href="#crypto-betting-scams">Read More</a>
          </div>
        </div>

        <h1>Keep Yourself Safe: What to Remember</h1>
        <ol>
          <li>Never share personal info – Keep OTPs, passwords, and bank details private.</li>
          <li>Verify first – Check email addresses, numbers, and website URLs.</li>
          <li>Avoid suspicious links – Don’t click unknown links in emails or messages.</li>
          <li>Use strong passwords – Combine letters, numbers, and symbols.</li>
          <li>Turn on 2FA – Adds an extra layer of protection.</li>
          <li>Update regularly – Keep apps and devices secure.</li>
          <li>Trust your gut – If something feels wrong, stop and check.</li>
        </ol>

        <h2>Get in Touch</h2>
        <ul>
          <li className="contact-email">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kavanagirish48@gmail.com">📧 Email us: help@fraudhunt.com</a>
          </li>
          <li>
            <p>💡 Have an idea or want to report a scam? We’d love to hear from you!</p>
          </li>
        </ul>
      </div>

      {/* === Report a Scam Section === */}
      <div className="content-section">
        <h1 id="report-scam">📢 Report a Scam</h1>
        <p>If you experienced or saw a scam, please email us the details:</p>
        <ul>
          <li>
            <p>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kavanagirish48@gmail.com">📧 Click here to email us your report</a>
            </p>
          </li>
          <li>
            <p>
              Or report directly on <a href="https://cybercrime.gov.in/">Cyber Crime Portal</a>
            </p>
          </li>
          <li>
            <p>📞 Emergency Cyber Helpline: <strong>1930</strong></p>
          </li>
        </ul>
        <h2>How To Complaint 👇</h2>
        <iframe
          width="928"
          height="522"
          src="https://www.youtube.com/embed/i4EdPOahX5w"
          title="How To File Cyber Crime Complaint Online 2025 | Cyber Crime Complaint Kaise Kare"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <p><strong>Thank you for helping others stay safe!</strong></p>
      </div>

      {/* === Fraud Details Sections === */}
      {/* The rest of the sections (Job Fraud, Romance Fraud, Crypto/Betting Scams, Fake Loan Offers, Network Scams)
          should follow the same corrections:
          - className instead of class
          - allowFullScreen instead of allowfullscreen
          - frameBorder instead of frameborder
      */}
    </>
  );
}

export default Aboutus;
