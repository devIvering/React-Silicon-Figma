import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '../../../images/icons/bx-home-alt.svg';
import RightChevron from '../../../images/icons/bx-chevrons-right.svg';
import EnvelopeIcon from '../../../images/icons/icon_envelope.svg';
import BlueArrow from '../../../images/icons/Vector_bluearrow.svg';
import GroupIcon from '../../../images/icons/icon_career.svg';
import DropDownButton from '../../components/DropDownButton';
import useEmailValidation from './../../../js/emailValidation';

const ContactUs = () => {
  const url = 'https://kyhnet23-assignment.azurewebsites.net/api/specialists';
  const loaded = useRef(false);

  const {
    email,
    emailError,
    handleEmailChange,
    validateEmail,
  } = useEmailValidation();
  const [fullname, setfullname] = useState('');
  const [specialist, setSpecialist] = useState([]);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState();
  const [isPopupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    if (!loaded.current) {
      setSpecialist([]);

      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const data = await response.json();

          for (let item of data) {
            setSpecialist((current) => [...current, { value: item.id, text: `${item.firstName} ${item.lastName}` }]);
          }
        } catch (error) {
          console.error('Error fetching specialists:', error);
        }
      };

      fetchData();
      loaded.current = true;
    }
  }, [url]);

  const openPopup = (message) => {
    setResult(message);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const handleNameChange = (value) => {
    setfullname(value);
  };

  const handleBookAppointment = async (appointmentData) => {
   const apiUrl = 'https://kyhnet23-assignment.azurewebsites.net/api/book-appointment';
 
   try {
     const response = await fetch(apiUrl, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(appointmentData),
     });
 
     if (!response.ok) {
       const result = await response.json();
       return result.message || 'An error occurred.';
     }
 
     return 200;
   } catch (error) {
     console.error('Error making API call:', error);
     return 'An error occurred.';
   }
 };

  const validateName = (fullname) => {
     if (fullname.length === 0) {
        return ""
     }
      if (fullname.length < 3) {
     return "Name must be at least 3 characters long.";
   }
      return ""
 };

  const bookAppointment = async (e) => {
    e.preventDefault();

    validateEmail(email);
    validateName(fullname)

    if (!email || emailError) {
      console.error('Invalid email. Please correct the errors.');
      return;
    }

    const selectedSpecialist = specialist[0].value;

    const appointmentData = {
      fullname,
      email,
      specialist: selectedSpecialist,
      date,
      time,
    };

      const result = await handleBookAppointment(appointmentData);
      setResult(result);

      console.log(result)

      if (result === 200) {
         openPopup(
            <div>
            Your appointment was booked!
            <br />
            We will see you on {date} at {time}
          </div>);
       } else if (result === 400) {
         openPopup('Booking failed.');
       }
  };

  return (
<section id="contact-us">
   <div className="contact-link">
      <img src={HomeIcon} alt="Home-icon" />
      <NavLink to="/">Home</NavLink>
      <img src={RightChevron} alt="Right-chevron" />
      <NavLink to="/contact">Contact</NavLink>
   </div>
   <div className="container">
      <div className="contact-us-box">
         <div>
            <h1>Contact Us</h1>
         </div>
         <div className="email-us">
            <div className="envelope-image">
               <img src={EnvelopeIcon} alt="Envelope-icon" />
            </div>
            <div>
               <h2>Email us</h2>
               <p>Please feel free to drop us a line. 
                  We will respond as soon as possible.
               </p>
               <NavLink to="/message">Leave a message</NavLink>
               <img className="arrow-icon" src={BlueArrow} alt="Blue-arrow" />
            </div>
         </div>
         <div className="careers">
            <div className="careers-image">
               <img src={GroupIcon} alt="Add-group-icon" />
            </div>
            <div>
               <h2>Careers</h2>
               <p>
                  Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.
               </p>
               <a href="#">Send an application</a>
               <img className="arrow-icon" src={BlueArrow} alt="Blue-arrow" /> 
            </div>
         </div>
      </div>
      <section id="online-form">
         <div className="container">
            <form onSubmit={bookAppointment} noValidate>
               <h1>Get Online Consultation</h1>
               <div className="content">
                  <div id="form-fullname" className="input-group">
                        <label htmlFor="form-fullname">Full Name</label>
                        <input
                           autoComplete='off'
                           required
                           onChange={(e) => handleNameChange(e.target.value)}
                           fullname="text"
                           type="text"
                           value={fullname}
                           className="form-text"
                           />
                       <div className="error-message-box">
                           <div className="name-error-message">{validateName(fullname)}</div>
                        </div>
                  </div>
                  <div id="form-email" className="input-group">
                     <label htmlFor="form-email">Email Address</label>                                      
                     <input value={email} onChange={(e) => handleEmailChange(e.target.value)} />
                     <div className="error-message-box">
                        <div className="email-error-message" id="email-error-message">
                           {emailError}
                        </div>
                     </div>
                     <div id="form-specialist" className="input-group">
                        <label htmlFor="form-specialist-">Specialists</label>
                        <div className="dropdown-container">
                           <DropDownButton value={specialist.current} options={specialist} />
                        </div>
                        <div className="error-message-box">
                           <div className="name-error-message"></div>
                        </div>
                     </div>
                     <div id="form-date-time" className="input-group">
                        <div id="form-date" className="input-group">
                           <label htmlFor="date">Date</label>
                           <input
                              required
                              id="date"
                              type="date"
                              value={date}
                              onChange={(e) => setDate(e.target.value)}
                           />
                        </div>
                        <div id="form-time" className="input-group">
                           <label htmlFor="time">Time</label>
                           <input
                              required
                              id="time"
                              type="time"
                              value={time}
                              onChange={(e) => setTime(e.target.value)}
                           />
                        </div>
                        </div>
                     <button className="btn-theme" type="submit">Make an appointment</button>
                  </div>
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
         </div>
      </section>
   </div>
</section>

  )
}
export default ContactUs
