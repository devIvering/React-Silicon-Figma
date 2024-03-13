import React, { useState } from 'react'
import ArrowIcon from '../../../images/news-page/arrows.svg'
import { UseAppStore } from '../../../contexts/AppState'
import useEmailValidation from './../../../js/emailValidation';


const NewsFooter = () => {
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
      <footer>
         <section id="subscribe-section">
            <div className="signup-container">
               <div className="footer-head">
                  <h1>Don't Want to Miss Anything?</h1>
                  <img src={ArrowIcon} alt="Arrow" />
               </div>
               <div className="checkbox-holder">
                  <h5 id="sign-up-newsletter-text">
                     Sign up for Newsletters
                  </h5>
                  <div className="checkboxes">
                     <div className="checkbox-item" id="checkbox1">
                        <input type="checkbox" />
                        <label forhtml="checkbox1">Daily Newsletter</label>
                     </div>
                     <div className="checkbox-item" id="checkbox2">
                        <input type="checkbox" />
                        <label forhtml="checkbox2">Advertising Updates</label>
                     </div>
                     <div className="checkbox-item" id="checkbox3">
                        <input type="checkbox" />
                        <label forhtml="checkbox3">Week in Review</label>
                     </div>
                     <div className="checkbox-item" id="checkbox4">
                        <input type="checkbox" />
                        <label forhtml="checkbox4">Event Updates</label>
                     </div>
                     <div className="checkbox-item" id="checkbox5">
                        <input type="checkbox" />
                        <label forhtml="checkbox5">Startups Weekly</label>
                     </div>
                     <div className="checkbox-item" id="checkbox6">
                        <input type="checkbox" />
                        <label forhtml="checkbox6">Podcasts</label>
                     </div>
                  </div>
               </div>
               <div className="subscribe-box">
                  <form onSubmit={handleSubmit} noValidate>
                     <div className="input-group">  
                        <input className="form-email" placeholder='Your Email' value={email} onChange={(e) => handleEmailChange(e.target.value)} />
                        <button type="submit" id="home-subscribe-button" className="btn-theme">
                        Subscribe *
                        </button>
                     </div>
                  </form>
                  {isPopupOpen && (
                  <div className="popup-container" id="contact-popup">
                     <div className="popup-content">
                        <span className="close-btn" onClick={closePopup}>×</span>
                        <p>{result}</p>
                     </div>
                  </div>
                  )}
                  <div className="error-message-box">
                     <div className="email-error-message" id="email-error-message">
                        {emailError}
                     </div>
                  </div>
               </div>
               <div className="agree-box">
                  <p>
                     * Yes, I agree to the <a href="#">terms</a> and <a href="">privacy policy</a>.
                  </p>
               </div>
            </div>
         </section>
      </footer>
      )
      }
      export default NewsFooter