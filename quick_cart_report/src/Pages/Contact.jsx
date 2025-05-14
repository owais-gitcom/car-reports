import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

import { Form, Button } from 'react-bootstrap'; // ✅ Missing imports added
import '../Pages/Contact.css'; // ✅ Cleaned up duplicate import

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSendStatus('Please fill all fields');
      setTimeout(() => setSendStatus(''), 3000);
      return;
    }

    setIsSending(true);
    setSendStatus('Sending...');

    emailjs.send(
      'service_0o6khpm',
      'template_ti5c0nb',
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        reply_to: formData.email
      },
      'mVtNqlVudTuh_IHzn'
    )
      .then(() => {
        setSendStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('Failed to send email:', err);
        setSendStatus('Failed to send message. Please try again.');
      })
      .finally(() => {
        setIsSending(false);
        setTimeout(() => setSendStatus(''), 3000);
      });
  };

  return (
    <>
      <div className="about-container">
        <h2 className="about text-center">Contact Us</h2>
        <div className="breadcrumb">
          <h5 className="Home">
            <Link to="/">HOME</Link> / Contact Us
          </h5>
        </div>
      </div>

      
    <div className="contact-form-col">
      <h4 className="send-message mb-3">Send a Message</h4>
      <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Your Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message"
              required
            />
          </Form.Group>

          <Button type="submit" className="w-100" disabled={isSending}>
            {isSending ? 'Sending...' : 'Send Message'}
          </Button>

          {sendStatus && (
            <p className={`mt-3 ${sendStatus.includes('successfully') ? 'text-success' : 'text-danger'}`}>
              {sendStatus}
            </p>
          )}
        </Form>
      </div>
    </>
  );
};

export default Contact;
