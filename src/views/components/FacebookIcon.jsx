import React from 'react'
import Icon from '../../images/icons/S_facebook.svg'
import { NavLink } from 'react-router-dom'

const FacebookIcon = () => {
  return (
    <NavLink to="/facebook"><img src={Icon} alt="Facebook-link" /></NavLink>
  )
}

export default FacebookIcon