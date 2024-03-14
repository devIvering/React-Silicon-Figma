import React from 'react'
import Icon from '../../images/icons/S_instagram.svg'
import { NavLink } from 'react-router-dom'

const InstagramIcon = () => {
  return (
    <NavLink to="/instagram"><img src={Icon} alt="Instagram-link" /></NavLink>
  )
}

export default InstagramIcon