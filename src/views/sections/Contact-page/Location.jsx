import React from 'react'
import { NavLink } from 'react-router-dom'
import MapImage from '../../../images/contact-page/map.svg'
import LocationIcon from '../../../images/contact-page/bx-map.svg'
import PhoneIcon from '../../../images/contact-page/bx-phone-call.svg'
import WatchIcon from '../../../images/contact-page/bx-time-five.svg'
import FacebookIcon from '../../components/FacebookIcon'
import TwitterIcon from '../../components/TwitterIcon'
import InstagramIcon from '../../components/InstagramIcon'
import YoutubeIcon from '../../components/YoutubeIcon'

const Location = () => {
    return (
    <section id="map-section">
       <div className="container">
          <div>
             <img className="map-picture" src={MapImage} alt="Map-image" />
          </div>
          <div className="contact-info">
             <div className="center-one">
                <h4>Medical Center 1</h4>
                <div className="location-address-one">
                   <img src={LocationIcon} alt="Location-icon" />
                   <address>4517 Washington Ave. Manchester, Kentucky 39495</address>
                </div>
                <div className="contact-phonenumber">
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
                <h4>Medical Center 2</h4>
                <div className="location-address-two">
                   <a href="#"><img src={LocationIcon} alt="Location-icon" /></a>
                   <address>2464 Royal Ln. Mesa,New Jersey 45463</address>
                </div>
                <div className="contact-phonenumber">
                   <a href="#"><img src={PhoneIcon} alt="Phone-icon" /></a>
                   <p>(406) 544-0123</p>
                </div>
                <div className="opening-hours">
                   <a className="clock-icon" href="#"><img src={WatchIcon} alt="Watch-icon" /></a>
                   <p className="time-one"><strong>Mon – Fri:</strong> 9:00 am – 22:00 am</p>
                   <p className="time-two"><strong>Sat – Sun:</strong> 9:00 am – 20:00 am</p>
                </div>
             </div>
             <div className="social-icons">
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
                <YoutubeIcon />
             </div>
          </div>
       </div>
    </section>
    )
    }
    export default Location