import React from 'react'
import Quotes from '../../../images/review-section/quotes.svg'
import FourStars from '../../../images/review-section/rating.svg'
import FiveStars from '../../../images/review-section/rating_fivestar.svg'
import Author from '../../../images/review-section/author.svg'
import AlbertAuthor from '../../../images/review-section/author_albert.svg'

const Review = () => {
  return (
    <section id="review-section">
    <div className="container">
        <div className="box-one">
            <h1>Clients are Loving Our App</h1>
            <div className="button-box">
                <button className="button-circle" href="#"><i className="fa-solid fa-chevron-left"></i></button>
                <button className="button-circle" href="#"><i className="fa-solid fa-chevron-right"></i></button>
            </div>
        </div>
        <div className="box-two">
            <div>
                <img src={Quotes} alt="Quotation-marks" />
            </div>
            <div className="rating-box">
                <img src={FourStars} alt="4-star-rating" />
            </div>
            <p>Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. 
                Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. 
                Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.
            </p>
            <img src={Author} alt="Author" />
        </div>
        <div className="box-three">
            <div>
                <img src={Quotes} alt="Quotation-marks" />
            </div>
            <div className="rating-box">
                <img src={FiveStars} alt="5-star-rating" />
            </div>    
            <p>Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. 
                Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. 
                Dictum pretium dolor tincidunt egestas eget nunc.
            </p>
            <img src={AlbertAuthor} alt="Author" />
        </div>
    </div>
</section>
  )
}

export default Review