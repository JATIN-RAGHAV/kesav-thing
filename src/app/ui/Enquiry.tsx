'use client';
import React, { useState } from 'react';
import enquiryFormInterface from '../interfaces/enquiryForm';

const Enquiry = () => {
  const [formData, setFormData] = useState<enquiryFormInterface>({
    name: '',
    email: '',
    message: '',
    file: null
  })

  const [loading, setLoading] = useState(false);

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      /* if (file && file.size > 0.05 * 1024 * 1024) {
        alert("File size can't be larger than 50kb");
      } */
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = event => {
          let fileContent;
          if (event.target) {
            fileContent = event.target.result;
            if (typeof (fileContent) == 'string') {
              setFormData({
                ...formData,
                file
              })
            }
          }
        };
        reader.onerror = (error) => {
          console.error(error);
          alert('Error reading the file. Please try again.');
        };
        reader.readAsDataURL(file);
      } else {
        alert('Please upload a valid image file.');
      }
    }
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    /* e.preventDefault();

    alert(await sendEmailAction('this is subject', formData.imageUrl, 'category', true)) */
    /* if (formData.imageUrl && formData.name && formData.email && formData.message) {
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
            message: '',
            imageUrl: '',
            file: null
          })
        })
        .catch((err) => {
          alert('Failed to send email.');
          console.error('Error:', err);
        });
    } else {
      alert('Fill all the fields')
    } */
  };

  return (
    <div className='w-full flex items-center flex-col box-border'>
      <div className='flex items-center font-bold justify-center text-4xl p-1 box-border'>
        Enquiry Form
      </div>
      <form onSubmit={sendEmail} className='w-full md:w-1/2 lg:w-1/3 flex flex-col bg-gray-200 items-center gap-6 my-4 py-6 md:rounded-lg'>
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
        <div className='flex justify-center flex-col mx-3'>
          <input
            name="image"
            type='file'
            accept='image/*'
            onChange={handleFileChange}
          />
          <span className='text-xs'>{formData.file && formData?.file.size / 1000}Kb</span>
        </div>
        <button type="submit" className='w-1/4 bg-themeBlue rounded-lg h-[30px] text-white hover:bg-white hover:text-themeBlue transition-all'>Send Email</button>
      </form>
    </div>
  );
};

export default Enquiry;
