import React from 'react';
import './TermsConditions.css';

const TermsConditions = () => {
  return (
    <div className="terms-conditions-container">
      <header className="header">
        <h1>Terms & Conditions</h1>
      </header>
      <main className="content">
        <p className="intro">
          Welcome to FitHeal! By using our application, you agree to comply with and be bound by these terms and conditions.
        </p>

        <section className="section">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using our app, you agree to comply with and be bound by these terms and conditions. If you do not agree with any part of these terms, you should not use our app.
          </p>
        </section>

        <section className="section">
          <h2>2. User Responsibilities</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. Please notify us immediately of any unauthorized use of your account.
          </p>
        </section>

        <section className="section">
          <h2>3. Privacy Policy</h2>
          <p>
            We value your privacy. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.
          </p>
        </section>

        <section className="section">
          <h2>4. Modifications to Terms</h2>
          <p>
            We may update these terms from time to time. We will notify you of any changes by posting the new terms on this page. Your continued use of the app after any changes signifies your acceptance of the new terms.
          </p>
        </section>

        <section className="section">
          <h2>5. Contact Us</h2>
          <p>
            If you have any questions about these terms, please contact us at <a className='terms' href="mailto:support@fitheal.com">support@fitheal.com</a>.
          </p>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 FitHeal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TermsConditions;
