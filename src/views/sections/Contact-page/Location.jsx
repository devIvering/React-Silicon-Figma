import React from 'react'
import { NavLink } from 'react-router-dom'
import MapImage from '../../../images/contact-page/map.svg'
import LocationIcon from '../../../images/contact-page/bx-map.svg'
import PhoneIcon from '../../../images/contact-page/bx-phone-call.svg'
import WatchIcon from '../../../images/contact-page/bx-time-five.svg'
import FacebookIcon from '../../../images/icons/S_facebook.svg'
import TwitterIcon from '../../../images/icons/S_twitter.svg'
import InstagramIcon from '../../../images/icons/S_instagram.svg'
import YoutubeIcon from '../../../images/icons/S_youtube.svg'

const Location = () => {
  return (
    <section id="map-section">
    <div className="container">
        <div>
            <img src={MapImage} alt="Map-image" />
        </div>
        <div className="contact-info">
            <div className="center-one">
                <h1>Medical Center 1</h1>
                <div>
                    <img src={LocationIcon} alt="Location-icon" />
                    <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                </div>
                <div>
                    <img src={PhoneIcon} alt="Phone-icon" />
                    <p>(406) 555-0120</p>
                </div>
                <div className="opening-hours">
                    <a className="clock-icon" href="#"><img src={WatchIcon} alt="Watch-icon" /></a>
                        <p className="time-one"><strong>Mon – Fri:</strong> 9:00 am – 22:00 am</p>
                        <p className="time-two"><strong>Sat – Sun: </strong> 9:00 am – 20:00 am</p>    
                </div>
            </div>
                <div className="center-two">
                    <h1>Medical Center 2</h1>
                <div>
                    <a href="#"><img src={LocationIcon} alt="Location-icon" /></a>
                    <p>2464 Royal Ln. Mesa,New Jersey 45463</p>
                </div>
                <div>
                    <a href="#"><img src={PhoneIcon} alt="Phone-icon" /></a>
                    <p>(406) 544-0123</p>
                </div>
                <div className="opening-hours">
                    <a className="clock-icon" href="#"><img src={WatchIcon} alt="Watch-icon" /></a>
                        <p className="time-one"><strong>Mon – Fri:</strong> 9:00 am – 22:00 am</p> 
                        <p className="time-two"><strong>Sat – Sun:</strong> 9:00 am – 20:00 am</p>
                </div>
            </div>
            <div className="footer-social">
            <NavLink to="#"><img src={FacebookIcon} alt="Facebook-link" /></NavLink>
            <NavLink to="#"><img src={TwitterIcon} alt="Twitter-link" /></NavLink>
            <NavLink to="#"><img src={InstagramIcon} alt="Instagram-link" /></NavLink>
            <NavLink to="#"><img src={YoutubeIcon} alt="Youtube-link" /></NavLink>
            </div>
        </div>
    </div>
</section>
  )
}

export default Location