import React from 'react';
import './TermsConditions.css'; // Create this CSS file for styling

const TermsConditions = () => {
  return (
    <div className="terms-conditions-container">
      <h1>Terms and Conditions</h1>
      <p>Welcome to FitHeal! These terms and conditions outline the rules and regulations for the use of our application.</p>

      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing or using our app, you agree to comply with and be bound by these terms and conditions. If you do not agree with any part of these terms, you should not use our app.</p>
      </section>

      <section>
        <h2>2. User Responsibilities</h2>
        <p>You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. Please notify us immediately of any unauthorized use of your account.</p>
      </section>

      <section>
        <h2>3. Privacy Policy</h2>
        <p>We value your privacy. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.</p>
      </section>

      <section>
        <h2>4. Modifications to Terms</h2>
        <p>We may update these terms from time to time. We will notify you of any changes by posting the new terms on this page. Your continued use of the app after any changes signifies your acceptance of the new terms.</p>
      </section>

      <section>
        <h2>5. Contact Us</h2>
        <p>If you have any questions about these terms, please contact us at support@fitheal.com.</p>
      </section>

      <div className="terms-footer">
        <p>&copy; 2024 FitHeal. All rights reserved.</p>
      </div>
    </div>
  );
};

export default TermsConditions;
