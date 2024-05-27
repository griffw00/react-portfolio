import {React, useRef} from 'react';
import "./styles/contact.css"
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('SERVICE_KEY', 'TEMPLATE_KEY', form.current, {
        publicKey: 'PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form className = "form-container" ref={form} onSubmit={sendEmail}>
       <h1 className='form-header'> Contact Me </h1>
        <div className='input-container'>
          <input type="text" name="user_name" placeholder='Your Name...' required/>
        </div>

        <div className='input-container'>
          <input type="email" name="user_email" placeholder="Your Email..." required/>
        </div>

        <div className='message-container'>
          <textarea name="message" placeholder='Your Message...' required/>
        </div>
      
        <input className = "submit-btn" type="submit" value="Send" />
    </form>
  );
};

export default Contact;