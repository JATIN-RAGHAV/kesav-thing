'use client'
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.send(
      'service_6gwhl2l', // Replace with your EmailJS service ID
      'template_zik93dy', // Replace with your EmailJS template ID
      formData,
      'iDG7L2HLKa-Wm0UT9' // Replace with your EmailJS public key
    )
      .then((response) => {
        alert('Email sent successfully!');
        console.log('Success:', response.status, response.text);
      })
      .catch((err) => {
        alert('Failed to send email.');
        console.error('Error:', err);
      });
  };

  return (
    <form onSubmit={sendEmail}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        onChange={handleChange}
      />
      <input
        name="message"
        placeholder="Your Message"
        onChange={handleChange}
      />
      <button type="submit">Send Email</button>
    </form>
  );
};

export default App;
