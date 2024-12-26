'use client'
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
        setFormData({
          name: '',
          email: '',
          message: ''
        })
      })
      .catch((err) => {
        alert('Failed to send email.');
        console.error('Error:', err);
      });
  };

  return (
    <div className='w-full flex items-center flex-col'>
      <div className='flex items-center font-bold justify-center text-4xl p-1 box-border'>
        Enquiry Form
      </div>
      <form onSubmit={sendEmail} className='w-full md:w-1/2 lg:w-1/3 flex flex-col bg-gray-200 items-center gap-6 my-4 py-6 rounded-lg'>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className='w-3/4 rounded-lg px-2 py-1'
          value={formData.name}
          onChange={handleChangeInput}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className='w-3/4 rounded-lg px-2 py-1'
          value={formData.email}
          onChange={handleChangeInput}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          onChange={handleChangeTextarea}
          value={formData.message}
          className='h-[200px] rounded-lg w-3/4 px-2'
        />
        <button type="submit" className='w-1/4 bg-themeBlue rounded-lg h-[30px] text-white hover:bg-white hover:text-themeBlue transition-all'>Send Email</button>
      </form>
    </div>
  );
};

export default Enquiry;
