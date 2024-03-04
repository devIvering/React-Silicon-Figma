import React, { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import HomeIcon from '../../../images/icons/bx-home-alt.svg'
import RightChevron from '../../../images/icons/bx-chevrons-right.svg'
import EnvelopeIcon from '../../../images/icons/bx-envelope.svg'
import BlueArrow from '../../../images/icons/Vector_bluearrow.svg'
import GroupIcon  from '../../../images/icons/add-group.svg'
import DropDownButton from '../../components/DropDownButton'
import EmailForm from '../../components/EmailValidationInput'
import NameValidationInput from '../../components/NameValidationInput'
import { handleSubmit } from '../../../js/script'


const ContactUs = () => {

    const url = 'https://kyhnet23-assignment.azurewebsites.net/api/specialists'
    const [specialists, setSpecialists] = useState([])
    const loaded = useRef(false)
    
    useEffect(() => {
        if (!loaded.current) {
            setSpecialists([])
        
            const fetchData = async () => {
                const result = await fetch(url)
                const data = await result.json()
                
                for (let item of data) {
                    setSpecialists(current => [...current, { value: item.id, text: `${item.firstName} ${item.lastName}` }])
                }
            }

            fetchData()
            loaded.current = true
        }
    }, [])

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
            <form onSubmit={(e) => handleSubmit(e)} noValidate>
                    <h1>Get Online Consultation</h1>
                    <div className="content">
                        <div id="form-fullname" className="input-group">
                            <NameValidationInput />
                            <div className="error-message-box">
                                <div className="name-error-message"></div>       
                            </div>
                        </div>
                        <div id="form-email" className="input-group">   
                        <label htmlFor="form-email">Email Address</label>                                      
                                <EmailForm showPlaceholder={false} showStyle={false}/>
                            <div className="error-message-box">
                                <div className="email-error-message"></div>       
                            </div>
                        </div>
                        <div id="form-specialist" className="input-group">
                        <label htmlFor="form-specialist-">Specialists</label>
                            <div className="dropdown-container">
                                <DropDownButton options={specialists} />
                            </div>
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
