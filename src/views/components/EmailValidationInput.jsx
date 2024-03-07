import React, { useState } from 'react';
import emailIcon from '../../images/icons/Vector_grey.svg';

function EmailForm({ showPlaceholder, showStyle, onSubscribe }) {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (value) => {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regEx.test(value)) {
      setEmailError('You must enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    validateEmail(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || emailError) {
      console.error('Invalid email. Please correct the errors.');
      return;
    }

    // Call the parent component's subscribe function with the email
    if (onSubscribe) {
      onSubscribe(email);
    }
  };

  const inputStyles = {
    backgroundImage: `url(${emailIcon})`,
    backgroundSize: '20px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '10px center',
  };

  return (
    <div id="form-email" className="input-group">
      <form onSubmit={handleSubmit} noValidate>
        <input
          required
          onChange={(e) => handleEmailChange(e)}
          name="email"
          type="email"
          value={email}
          className="form-email"
          style={showStyle ? inputStyles : {}}
          placeholder={showPlaceholder ? 'Your Email' : ''}
        />
        <div className="error-message-box">
          <div className="email-error-message">{emailError}</div>
        </div>
        <button id="subscribe-button" className="btn-theme" >Subscribe</button>
      </form>
    </div>
  );
}

export default EmailForm;
