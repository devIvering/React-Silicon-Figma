import React from 'react'
import { NavLink } from 'react-router-dom'
import HomeIcon from '../../../images/icons/bx-home-alt.svg'
import RightChevron from '../../../images/icons/bx-chevrons-right.svg'
import EnvelopeIcon from '../../../images/icons/bx-envelope.svg'
import BlueArrow from '../../../images/icons/Vector_bluearrow.svg'
import GroupIcon  from '../../../images/icons/add-group.svg'

const ContactUs = () => {
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
                    <img src={BlueArrow} alt="Blue-arrow" />
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
                    <img src={BlueArrow} alt="Blue-arrow" /> 
                </div>
            </div>
        </div>
        <section id="online-form">
            <div className="container">
                <form>
                    <h1>Get Online Consultation</h1>
                    <div className="content">
                        <div id="form-fullname" className="input-group">
                            <form onsubmit="handleSubmit(event)" novalidate>
                                <label htmlFor="form-fullname">Full Name</label>
                                <input required onKeyUp="validateName(this)" name="text" type="text" className="form-text" />
                            </form>
                            <div className="error-message-box">
                                <div className="name-error-message"></div>       
                            </div>
                        </div>
                        <div id="form-email" className="input-group">                                     
                                <label htmlFor="form-email">Email Address</label>
                                <input required onKeyUp="validateEmail(this)" name="email" type="email" className="form-email" />
                            <div className="error-message-box">
                                <div className="email-error-message"></div>       
                            </div>
                        </div>
                        <div id="form-specialist" className="input-group">
                                <label htmlFor="form-specialist">Specialist</label>
                                <input required onKeyUp="validateName(this)" name="text" type="text" className="form-text" />
                            <div className="error-message-box">
                                <div className="name-error-message"></div>       
                            </div>
                        </div>
                        <div id="form-date" className="input-group">
                            <label htmlFor="date">Date</label>
                            <input required id="date" type="date" />
                        </div>
                        <div id="form-time" className="input-group">
                            <label htmlFor="time">Time</label>
                            <input required id="time" type="time" />
                        </div>                   
                        <button className="btn btn-theme" type="submit">Make an appointment</button>
                    </div>
                </form>
            </div>
        </section>
    </div>
</section>

  )
}

export default ContactUs