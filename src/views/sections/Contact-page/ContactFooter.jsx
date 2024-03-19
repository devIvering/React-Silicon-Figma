import { NavLink, Link } from 'react-router-dom';
import SiliconLogo from '../../../images/logo/silicon-logo-dark_theme.svg';
import { UseAppStore } from '../../../contexts/AppState';
import useEmailValidation from './../../../js/emailValidation';
import { useState } from 'react';

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

    console.log(result);

    if (result === 200) {
      openPopup(
        <div>
          You are now subscribed!
          <br />
          Subscription information will be sent to:<br /> {email}
        </div>
      );
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
                <input className="form-email" placeholder='Your Email' value={email} onChange={(e) => handleEmailChange(e.target.value)} />
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
              <NavLink to="/Home">Home</NavLink>
              <Link to="/Services">Services</Link>
              <Link to="/Clients">Our Clients</Link>
              <Link to="Testimonials">Testimonials</Link>
              <NavLink to="/News">News</NavLink>
            </div>
            <div className="terms-links">
              <Link to="/Terms">Terms & Conditions</Link>
              <Link to="/Privacy">Privacy Policy</Link>
            </div>
          </div>
          <div className="second-links-box">
            <NavLink to="/Facebook">Facebook</NavLink>
            <NavLink to="/Twitter">Twitter</NavLink>
            <NavLink to="/LinkedIn">Linkedin</NavLink>
            <NavLink to="/Instagram">Instagram</NavLink>
          </div>
          <div className="third-links-box">
            <Link to="/Contact">Contact Us</Link>
            <Link className="example-gmail" to="/Example">example@gmail.com</Link>
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
