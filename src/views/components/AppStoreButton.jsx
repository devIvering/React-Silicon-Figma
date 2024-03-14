import React from 'react'
import { Link } from 'react-router-dom'
import AppstoreImage from '../../images/appstore.svg'

const AppStoreButton = () => {
  return (
    <Link className="appstore" to="/downloads/appstore">
    <img src={AppstoreImage} alt="Download on Appstore" />
    </Link>
  )
}

export default AppStoreButton