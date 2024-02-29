import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import SiliconLogo from '../../../images/logo/silicon-logo-dark_theme.svg'

const ContactFooter = () => {
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
                <div className="form-and-button">
                    <form onsubmit="handleSubmit(event)" novalidate>
                     <input required onKeyUp="validateEmail(this)" placeholder="Your Email" name="email" type="email" className="form-email" />
                 </form>
                    <button id="subscribe-button" className="btn-theme" >Subscribe</button>
                </div>
                    <div className="error-message-box">
                        <div className="email-error-message" id="email-error-message"></div>       
                    </div>
                </div>
                <p className="footer-text">2024. All rights reserved. Silicon Template</p>
        </div>
            <div className="footer-links-box">
                <div className="first-links-box">
                    <div className="home-links">
                        <div>
                            <NavLink to="/">Home</NavLink>
                        </div>
                        <div>
                            <Link to="#">Services</Link>
                        </div>
                        <div> 
                            <Link to="#">Our Clients</Link>
                        </div>
                        <div>
                            <Link to="#">Testimonials</Link>
                        </div>
                            <NavLink to="/news">News</NavLink>
                        </div>
                    <div className="terms-links">
                        <div>
                            <Link to="#">Terms & Conditions</Link>
                        </div>
                        <div>
                            <Link to="#">Privacy Policy</Link>
                        </div>
                    </div>
                    </div>
                <div className="second-links-box">
                    <div>
                        <NavLink to="#">Facebook</NavLink>
                    </div>
                    <div>
                        <NavLink to="#">Twitter</NavLink>
                    </div>
                    <div>
                        <NavLink to="#">Linkedin</NavLink>
                    </div>
                    <div>
                        <NavLink to="#">Instagram</NavLink>
                    </div>
                </div>
                <div className="third-links-box">
                    <div>
                        <Link to="#">Contact Us</Link>
                    </div>
                    <div>
                        <Link className="example-gmail" to="#">example@gmail.com</Link>
                    </div>
             </div>
                </div>
            </div>       
</section>
  )
}

export default ContactFooter