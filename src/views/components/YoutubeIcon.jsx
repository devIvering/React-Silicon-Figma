import React from 'react'
import Icon from '../../images/icons/S_youtube.svg'
import { NavLink } from 'react-router-dom'


const YoutubeIcon = () => {
  return (
    <NavLink to="/youtube"><img src={Icon} alt="Youtube-link" /></NavLink>
  )
}

export default YoutubeIcon