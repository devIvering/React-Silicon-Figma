import React from 'react'
import Icon from '../../images/icons/S_twitter.svg'
import { NavLink } from 'react-router-dom'

const TwitterIcon = () => {
  return (
    <NavLink to="/twitter"><img src={Icon} alt="Twitter-link" /></NavLink>
  )
}

export default TwitterIcon