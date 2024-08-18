import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <header className="header">
        <h1>Privacy Policy</h1>
      </header>
      <main className="content">
        <p className="intro">
          Your privacy is important to us. This Privacy Policy explains how we collect, use, and safeguard your information when you use our FitHeal app.
        </p>

        <section className="section">
          <h2>1. Information We Collect</h2>
          <p>
            We may collect personal information such as your name, email address, and usage data. This information helps us provide and improve our services.
          </p>
        </section>

        <section className="section">
          <h2>2. How We Use Your Information</h2>
          <p>
            We use your information to personalize your experience, provide customer support, and communicate with you about updates and promotions.
          </p>
        </section>

        <section className="section">
          <h2>3. Data Security</h2>
          <p>
            We implement security measures to protect your information from unauthorized access. However, no method of transmission over the internet or method of electronic storage is 100% secure.
          </p>
        </section>

        <section className="section">
          <h2>4. Third-Party Services</h2>
          <p>
            We may use third-party services to help us analyze how our app is used. These third parties have their own privacy policies, and we are not responsible for their practices.
          </p>
        </section>

        <section className="section">
          <h2>5. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page. Your continued use of the app after changes indicates your acceptance of the new policy.
          </p>
        </section>

        <section className="section">
          <h2>6. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy, please contact us at <a className='policy' href="mailto:support@fitheal.com">support@fitheal.com</a>.
          </p>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 FitHeal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
