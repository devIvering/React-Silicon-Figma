import React, { useState } from 'react';
import MobileOne from '../../../images/mobile-howdoesitwork_1.svg';
import MobileTwo from '../../../images/mobile-howdoesitwork_2.svg';
import MobileThree from '../../../images/mobile-howdoesitwork_3.svg';

const HowItWorks = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [MobileOne, MobileTwo, MobileThree];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <section id="how-it-works">
      <div className="container">
        <div className="content">
          <h1>How Does It Work?</h1>
          <div className="phone-images">
            <button className="carousel-button" onClick={prevImage}>
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <img className="mobile-view-phone" src={images[currentImageIndex]} alt="Mobile-phone" />
            {images.map((image, index) => (
              <img
                key={index}
                className={`phone ${currentImageIndex === index ? 'active' : ''}`}
                src={image}
                alt="Mobile-phone"
              />
            ))}
            <button className="carousel-button" onClick={nextImage}>
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
          <div className="step-2-text">
            <h2>Step 2. Latest transaction history</h2>
            <p>
              Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis
              tristique quisque hac in consectetur condimentum.
            </p>
          </div>
        </div>
      </div>
      <div className="carousel">
        <div className="section section-dark-blue"></div>
        <div className="section section-light-blue"></div>
        <div className="section section-light-blue"></div>
      </div>
    </section>
  );
};

export default HowItWorks;
