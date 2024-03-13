import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom'
import SiliconLogo from '../../../images/logo/silicon-logo-dark_theme.svg'
import { UseAppStore } from '../../../contexts/AppState';
import useEmailValidation from './../../../js/emailValidation';


const ContactFooter = () => {

    const { handleSubscribe } = UseAppStore();
    const {
      email,
      setEmail,
      emailError,
      handleEmailChange,
      validateEmail,
    } = useEmailValidation();
    const [result, setResult] = useState();
    const [isPopupOpen, setPopupOpen] = useState(false);
  
    const openPopup = (message) => {
      setResult(message);
      setPopupOpen(true);
    };
  
    const closePopup = () => {
      setPopupOpen(false);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      validateEmail(email);
  
      if (!email || emailError) {
        console.error('Invalid email. Please correct the errors.');
        return;
      }
  
      const result = await handleSubscribe(email);
      setResult(result);
  
      console.log(result)
  
      if (result === 200) {
         openPopup(
            <div>
            You are now subscribed!
            <br />
            Subscribtion information will be sent to:<br /> {email}
          </div>);
       } else if (result === 400) {
         openPopup('Subscription failed');
       }
    };

    return (
      <section id="contact-footer">
         <div className="container">
            <div id="newsletter-box" className="box-footer">
               <img src={SiliconLogo} alt="Silicon-logo" />
               <p>Proin ipsum pharetra, senectus eget scelerisque varius pretium platea velit. 
                  Lacus, eget eu vitae nullam proin turpis etiam mi sit.
                  Non feugiat feugiat egestas nulla nec. Arcu tempus, eget elementum dolor ullamcorper sodales ultrices eros.
               </p>
               <h6>Subscribe to our newsletter</h6>
               <div className="subscribe-box">
                  <form onSubmit={handleSubmit} noValidate>
                     <div className="input-group">  
                        <input className="form-email" placeholder='Your Email'value={email} onChange={(e) => handleEmailChange(e.target.value)} />
                        <button type="submit" id="home-subscribe-button" className="btn-theme">
                        Subscribe
                        </button>
                     </div>
                  </form>
                  <div className="error-message-box">
                     <div className="email-error-message" id="email-error-message">
                        {emailError}
                     </div>
                  </div>
               </div>
               <p className="footer-text">2024. All rights reserved. Silicon Template</p>
            </div>
            <div className="footer-links-box">
               <div className="first-links-box">
                  <div className="home-links">
                     <div>
                        <NavLink to="/">Home</NavLink>
                     </div>
                     <div>
                        <Link to="#">
                        Services</Link>
                     </div>
                     <div>
                        <Link to="#">
                        Our Clients</Link>
                     </div>
                     <div>
                        <Link to="#">
                        Testimonials</Link>
                     </div>
                     <NavLink to="/news">News</NavLink>
                  </div>
                  <div className="terms-links">
                     <div>
                        <Link to="#">
                        Terms & Conditions</Link>
                     </div>
                     <div>
                        <Link to="#">
                        Privacy Policy</Link>
                     </div>
                  </div>
               </div>
               <div className="second-links-box">
                  <div>
                     <NavLink to="#">Facebook</NavLink>
                  </div>
                  <div>
                     <NavLink to="#">Twitter</NavLink>
                  </div>
                  <div>
                     <NavLink to="#">Linkedin</NavLink>
                  </div>
                  <div>
                     <NavLink to="#">Instagram</NavLink>
                  </div>
               </div>
               <div className="third-links-box">
                  <div>
                     <Link to="#">
                     Contact Us</Link>
                  </div>
                  <div>
                     <Link className="example-gmail" to="#">
                     example@gmail.com</Link>
                  </div>
               </div>
            </div>
         </div>
         {isPopupOpen && (
                  <div className="popup-container" id="contact-popup">
                     <div className="popup-content">
                        <span className="close-btn" onClick={closePopup}>×</span>
                        <p>{result}</p>
                     </div>
                  </div>
                  )}
      </section>
      );
      };
      export default ContactFooter;