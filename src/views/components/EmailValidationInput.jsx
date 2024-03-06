import React, { useState } from 'react';
import emailIcon from '../../images/icons/Vector_grey.svg';

function EmailForm({ showPlaceholder, showStyle, onChange }) {
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
    if (onChange) {
      onChange(value);
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
    </div>
  );
}

export default EmailForm;
