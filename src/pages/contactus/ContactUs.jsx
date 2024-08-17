import React, { useState } from 'react';
import './ContactUs.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
  return (
    <div className='contact-us'>
      <section className='contact-section'>
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out to us using the form below or through any of our contact details.</p>
        <img src='assets/images/contactus.jpg' alt='Contact Us' />
        <div className='contact-details mt-3'>
          <div className='contact-detail'>
            <h3>Address</h3>
            <p>Tikhedewal, Lalitpur</p>
          </div>
          <div className='contact-detail'>
            <h3>Phone</h3>
            <p>500-2238</p>
          </div>
          <div className='contact-detail'>
            <h3>Email</h3>
            <p>support@fitheal.com</p>
          </div>
        </div>

      </section>
    </div>
  );
};

export default ContactUs;
