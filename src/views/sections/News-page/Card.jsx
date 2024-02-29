import React from 'react'
import NewsImage from '../../../images/news-page/image.svg'
import ProfilePicture from '../../../images/news-page/image_prof.svg'

const Card = () => {
  return (
    <section className="news-section">
    <div className="container">
        <div id="news">
        <div className="news-card">
        <button className="btn-save"><i className="fa-regular fa-bookmark"></i></button>
            <img src={NewsImage} alt="News-image" />
            <div className="content">
                <div className="type-and-date">
                <p className="news-category">HEJHEJ</p>
                <p>Jan 19 2024</p>
                </div>
                    <h5>HEJHEJ</h5>
                    <hr />
                        <div className="news-profile">
                            <div>
                                <img src={ProfilePicture} alt="Profile-Picture" />
                            </div>
                                <h6>HEJHEJ</h6>
                         </div>
                     </div>
                 </div>
        </div>
    </div>
</section>
  )
}

export default Card