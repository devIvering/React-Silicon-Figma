import React, { useState } from 'react';

const NameInput = () => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  const validateName = (value) => {
    if (value.length === 0) {
      setNameError('You must enter a name.');
    } else if (value.length < 2) {
      setNameError('You must enter a valid name.');
    } else {
      setNameError('');
    }
  };

  const handleNameChange = (e) => {
    const { value } = e.target;
    setName(value);
    validateName(value);
  };

  return (
    <div id="form-fullname" className="input-group">
      <label htmlFor="form-fullname">Full Name</label>
      <input
        required
        onChange={(e) => handleNameChange(e)}
        name="text"
        type="text"
        value={name}
        className="form-text"
      />
      <div className="error-message-box">
        <div className="name-error-message">{nameError}</div>
      </div>
    </div>
  );
};

export default NameInput
