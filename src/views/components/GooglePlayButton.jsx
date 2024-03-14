import React from 'react'
import { Link } from 'react-router-dom'
import GooglePlayImage from '../../images/googleplay.svg'

const GooglePlayButton = () => {
  return (
    <Link className="googleplay" to="/downloads/googleplay">
    <img src={GooglePlayImage} alt="Download on Google Play" />
    </Link>    
  )
}

export default GooglePlayButton