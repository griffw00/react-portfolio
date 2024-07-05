import {React, useRef} from 'react';
import "./styles/contact.css"
import axios from "axios"; 


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {

    // Prevent page refresh
    e.preventDefault(); 

    const formData = new FormData(form.current); 
    const templateParams = {
      user_name: formData.get('user_name'),
      user_email: formData.get('user_email'),
      message: formData.get('message'),
    };

    // Send request for back-end
    axios.post('http://localhost:5000/send-email', {
      serviceID: import.meta.env.VITE_REACT_PORTFOLIO_SERVICE_KEY,
      templateID: import.meta.env.VITE_REACT_PORTFOLIO_TEMPLATE_KEY,
      templateParams: templateParams,
    })
    .then(response => {
      if (response.data.status === "success") {
        console.log('Email sent');
      } else {
        console.log("Failed to send email");
      }
    })
    .catch(error => {
      console.error("Error:", error);
    });

    // Reset the form
    form.current.reset(); 
  };

  return (
    <>
      <h1 id = "contact" className='form-header' style={{color: '#5c28d7'}}> Let's Chat! ☕ </h1>
        <form className = "form-container" ref={form} onSubmit={sendEmail}>

          
          <div className='input-container'>
            <input type="text" name="user_name" placeholder='Ex. John Doe' required/>
          </div>
          <div className='input-container'>
             <input id = "user-email" type="email" name="user_email" placeholder= "Ex. abc@email.com" required/>
          </div>
          
          <div className='message-container'>
            <textarea name="message" placeholder='Your Message...' required/>
          </div>
          
          <input className = "submit-btn" type="submit" value="Send" style={{color: 'white'}} />
        </form>
    </>
  );
};

export default Contact;