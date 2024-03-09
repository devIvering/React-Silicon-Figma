import { useState } from 'react';

const useEmailValidation = () => {
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

  const handleEmailChange = (value) => {
    setEmail(value);
    validateEmail(value);
  };

  return {
    email,
    setEmail,
    emailError,
    handleEmailChange,
    validateEmail,
  };
};

export default useEmailValidation;