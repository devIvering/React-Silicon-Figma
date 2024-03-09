import React from 'react'
import { NavLink } from 'react-router-dom'
import ErrorImage from '../images/error-page/404.svg'
import HomeIcon from '../images/error-page/icon-l.svg'

const Error = () => {
  return (
    <section>
        <div className="error-container">
        <div className="error-image">
            <img src={ErrorImage} alt="Error message" />
        </div>
        <div className="error-text-holder">
            <div>
                <h1>Ooops!</h1>
            </div>
            <div>
                <p>The page you are looking for is not available.</p>
            </div>
                <NavLink to="/">
                    <button className="btn-theme">
                        <img src={HomeIcon} alt="Home Icon" />
                        Go to homepage
                    </button>
                </NavLink>
            </div>
        </div>
        <div className="error-footer">
            <div>
                <p>2024. All rights reserved. Silicon Template </p>
            </div>
        </div>
    </section>
  )
}

export default Error