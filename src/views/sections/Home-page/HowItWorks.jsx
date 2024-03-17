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

  const carouselSections = [
    { color: currentImageIndex === 0 ? 'dark-blue' : '', text: 'Step 1. Live account balance tracker' },
    { color: currentImageIndex === 1 ? 'dark-blue' : '', text: 'Step 2. Latest transaction history' },
    { color: currentImageIndex === 2 ? 'dark-blue' : '', text: 'Step 3. Safe transfers to your friends' }
  ];
  return (
    <section id="how-it-works">
      <div className="container">
        <div className="content">
          <h1>How Does It Work?</h1>
          <div className="phone-images">
            <button className="carousel-button" onClick={prevImage}>
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <img
              className="mobile-phone-view"
              src={images[currentImageIndex]}
              alt="Mobile-phone"
              style={{ opacity: 1 }}
            />
            {images.map((image, index) => (
              <img
                key={index}
                className={`phone ${currentImageIndex === index ? 'active' : ''}`}
                src={image}
                alt="Mobile-phone"
                style={{ opacity: currentImageIndex === index ? 1 : 0.6 }}
              />
            ))}
            <button className="carousel-button" onClick={nextImage}>
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
          <div className="step-text">
            <h2>{carouselSections[currentImageIndex].text}</h2>
            <p>
              Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis
              tristique quisque hac in consectetur condimentum.
            </p>
          </div>
        </div>
      </div>
      <div className="carousel">
        {carouselSections.map((section, index) => (
          <div key={index} className={`section section-${section.color}`}></div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
