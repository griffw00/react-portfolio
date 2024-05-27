import {React, useRef} from 'react';
import "./styles/contact.css"
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const publicKey = import.meta.env.VITE_REACT_PORTFOLIO_PUBLIC_KEY;
    const serviceKey = import.meta.env.VITE_REACT_PORTFOLIO_SERVICE_KEY;
    const templateKey = import.meta.env.VITE_REACT_PORTFOLIO_TEMPLATE_KEY;


    emailjs
      .sendForm(serviceKey, templateKey, form.current, {
        publicKey: publicKey,
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