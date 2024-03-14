import React from 'react'
import Logotype from '../../../images/logo/silicon-logo-light_theme.svg'
import { NavLink, Link } from 'react-router-dom'
import FacebookIcon from '../../../images/icons/S_facebook.svg'
import TwitterIcon from '../../../images/icons/S_twitter.svg'
import InstagramIcon from '../../../images/icons/S_instagram.svg'
import YoutubeIcon from '../../../images/icons/S_youtube.svg'
import Appstore from '../../../images/appstore.svg'
import GooglePlay from '../../../images/googleplay.svg'

const HomeFooter = () => {
  return (
    <footer>
    <div id="footer-container">
        <NavLink href="home.html"><img src={Logotype} alt="silicon logotype" /></NavLink>
        <div className="footer-nav">
            <NavLink to="/#overview">Overview</NavLink>
            <NavLink to="/#features">Features</NavLink>
            <NavLink to="/#news">News</NavLink>
            <NavLink to="/#contact">Contact</NavLink>
            <NavLink to="/#account">Account</NavLink>
        </div>
        <div className="app-download">
            <Link className="appstore" href="#"><img src={Appstore} alt="Download on Appstore" /></Link>
            <Link className="googleplay" href="#"><img src={GooglePlay} alt="Download on Google Play" /></Link> 
        </div>
        <div className="social-icons">
            <NavLink to="/facebook"><img src={FacebookIcon} alt="Facebook-link" /></NavLink>
            <NavLink to="/twitter"><img src={TwitterIcon} alt="Twitter-link" /></NavLink>
            <NavLink to="/instagram"><img src={InstagramIcon} alt="Instagram-link" /></NavLink>
            <NavLink to="/youtube"><img src={YoutubeIcon} alt="Youtube-link" /></NavLink>
        </div>
        <div className="bottom-text">
            <p>2024. All rights reserved. Pulvinar urna condimentum amet tempor, ornare integer. 
                Lorem odio justo malesuada suspendisse viverra aliquet quisque turpis non. 
                Feugiat in odio non nunc ornare consectetur.
            </p>
        </div>
    </div>
</footer>
  )
}

export default HomeFooter