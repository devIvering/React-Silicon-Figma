import React from 'react'
import NotificationIcon from '../../../images/subscribe-section/notification.svg'
import { handleSubmit } from '../../../js/script'
import { validateEmail } from '../../../js/script'


const Subscribe = () => {
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
                             <input required onKeyUp={validateEmail} placeholder="Your Email" name="email" type="email" className="form-email" />
                         </form>
                            <button id="subscribe-button" className="btn-theme" >Subscribe</button>
                        </div>
                            <div className="error-message-box">
                                <div className="email-error-message" id="email-error-message"></div>       
                            </div>
                        </div>
                    <div id="subscribe-popup" className="subscribe-popup">
                        <div className="popup-content">
                            <p>You are now subscribing to our Newsletter!</p>
                        </div>
                    </div>
                </div>
                </section>
  )
}

export default Subscribe