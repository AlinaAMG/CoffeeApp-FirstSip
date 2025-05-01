import React, { useState } from 'react';
import './ContactForm.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [agreeInfo, setAgreeInfo] = useState(false);
  const [agreePolicy, setAgreePolicy] = useState(false);
  const [error, setError] = useState('');

  const { name, email, message } = {
    name: formData.name.trim(),
    email: formData.email.trim(),
    message: formData.message.trim(),
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setStatus('Please fill in all fields.');
      return;
    }
    if (!validateEmail(email)) {
      setStatus('Please enter a valid email address.');
      return;
    }
    if (!agreePolicy) {
      setError('You must accept the privacy policy.');
      return;
    }

    setError('');
    setLoading(true); // Start loading

    try {
      const res = await axios.post(
        'http://localhost:4001/api/contact',
        formData,
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      if (res.status === 200) {
        setStatus('Your message has been sent!');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch (error) {
      setError('Error sending message.');
      console.error(error);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <form className="glass-card" onSubmit={handleSubmit}>
        <h2>
          If you want to get in touch with us. Feel free to drop us a line
        </h2>
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          required
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <div className="form-group checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={agreeInfo}
              onChange={(e) => setAgreeInfo(e.target.checked)}
            />
            <span>
              I agree to receive information that the entity deems of interest
              through the provided email account.
            </span>
          </label>
        </div>
        <div className="form-group checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={agreePolicy}
              onChange={(e) => setAgreePolicy(e.target.checked)}
              required
            />
            <span>
              I have read and accepted the
              <Link to="/privacy-policy"> legal notice and privacy policy</Link>
            </span>
          </label>
        </div>
        <button type="submit">Send</button>

        {/* Show spinner while loading */}
       {loading && (
          <div className="loading">
            <div className="spinner" />
            <p>Sending your message...</p>
          </div>
        )}

         {/* Show success or error message after submission  */}
        <p className={error ? 'message error' : 'message status'}>
          {error || status}
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
