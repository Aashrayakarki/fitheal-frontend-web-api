import React, { useState } from 'react';
import './ContactUs.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending message
    setTimeout(() => {
      toast.success('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 500); // Simulate an API call delay
  };

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

        <div className='contact-form'>
          <h3>Contact Form</h3>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input type='text' id='name' name='name' value={formData.name} onChange={handleChange} required />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' name='email' value={formData.email} onChange={handleChange} required />
            </div>
            <div className='form-group'>
              <label htmlFor='message'>Message</label>
              <textarea id='message' name='message' rows='5' value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type='submit'>Send Message</button>
          </form>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
