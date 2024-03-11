import React, { useState } from 'react';
import NotificationIcon from '../../../images/subscribe-section/notification.svg';
import { UseAppStore } from '../../../contexts/AppState';
import useEmailValidation from './../../../js/emailValidation';

const Subscribe = () => {
  const { handleSubscribe } = UseAppStore();
  const {
    email,
    setEmail,
    emailError,
    handleEmailChange,
    validateEmail,
  } = useEmailValidation();
  const [result, setResult] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    validateEmail(email);

    if (!email || emailError) {
      console.error('Invalid email. Please correct the errors.');
      return;
    }

    const result = await handleSubscribe(email);
    setResult(result);

    if (result === 200) window.alert('You are now subscribed!');
    if (result === 400) window.alert('Failed');
  };

  return (
    <section id="subscribe-section">
      <div className="container">
        <div className="notify-box">
          <img src={NotificationIcon} alt="Notification-icon" />
          <h1>Subscribe to our newsletter to stay informed about latest updates</h1>
        </div>
        <div className="subscribe-box">
          <div className="form-and-button">
            <form onSubmit={handleSubmit} noValidate>
                <div className="input-group">   
                    <input placeholder='Your Email' value={email} onChange={(e) => handleEmailChange(e.target.value)} />
                    <button type="submit" id="home-subscribe-button" className="btn-theme">
                        Subscribe
                    </button>
                </div>
            </form>
          </div>
          <div className="error-message-box">
            <div className="email-error-message" id="email-error-message">
              {emailError}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
