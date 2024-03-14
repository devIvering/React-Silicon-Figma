import React from 'react'
import { Link } from 'react-router-dom'
import AppStoreButton from '../../components/AppStoreButton';
import GooglePlayButton from '../../components/GooglePlayButton'
import ShowcaseMobilesImage from '../../../images/showcase-mobiles.svg'


const Showcase = () => {
  return (
  <section id="showcase">
     <div className="container">
        <div className="content">
           <h1>Manage All Your Money in One App</h1>
           <p>We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
           <div className="download-app">
              <AppStoreButton />
             <GooglePlayButton />
           </div>
           <Link className="more" to="/services/manage-all-your-money"></Link>
           <div className="discover-more">
               <button className="carousel-button">
                  <i className="fa-solid fa-chevron-down"></i>
               </button>
           <Link to="/discover">Discover more</Link>
           </div>
        </div>
        <img id="showcase-image" src={ShowcaseMobilesImage} alt="two mobile phones" />
     </div>
  </section>
  )
  }
  export default Showcase