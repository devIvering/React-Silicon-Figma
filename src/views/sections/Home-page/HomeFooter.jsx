import React from 'react'
import Logotype from '../../../images/logo/silicon-logo-light_theme.svg'
import { NavLink, Link } from 'react-router-dom'
import AppStoreButton from '../../components/AppStoreButton'
import GooglePlayButton from '../../components/GooglePlayButton'
import FacebookIcon from '../../components/FacebookIcon'
import TwitterIcon from '../../components/TwitterIcon'
import InstagramIcon from '../../components/InstagramIcon'
import YoutubeIcon from '../../components/YoutubeIcon'

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
            <AppStoreButton />
            <GooglePlayButton />
        </div>
        <div className="social-icons">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <YoutubeIcon />
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