import React from 'react'
import MobileOne from '../../../images/mobile-howdoesitwork_1.svg'
import MobileTwo from '../../../images/mobile-howdoesitwork_2.svg'
import MobileThree from '../../../images/mobile-howdoesitwork_3.svg'
import PreviousButton from '../../../images/icons/prev-btn.svg'
import NextButton from '../../../images/icons/next-btn_right.svg'

const HowItWorks = () => {
  return (
    <section id="how-it-works">
        <div className="container">
            <div className="content">
                <h1>How Does It Work?</h1>
            <div className="phone-images">
                <img src={PreviousButton} alt="Previous button" />
                <img className="phone-one" src={MobileOne} alt="Mobile-phone" />
                <img className="phone-two" src={MobileTwo} alt="Mobile-phone" />
                <img className="phone-three" src={MobileThree} alt="Mobile-phone" />
                <img src={NextButton} alt="Next button" />
            </div>
            <div className="step-2-text">
                <h2>Step 2. Latest transaction history</h2>
                <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. 
                    Arcu sociis tristique quisque hac in consectetur condimentum.
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
  )
}

export default HowItWorks