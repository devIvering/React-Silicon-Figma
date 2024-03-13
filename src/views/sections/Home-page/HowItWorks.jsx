import React from 'react'
import MobileOne from '../../../images/mobile-howdoesitwork_1.svg'
import MobileTwo from '../../../images/mobile-howdoesitwork_2.svg'
import MobileThree from '../../../images/mobile-howdoesitwork_3.svg'

const HowItWorks = () => {
  return (
    <section id="how-it-works">
        <div className="container">
            <div className="content">
                <h1>How Does It Work?</h1>
            <div className="phone-images">
                <img className="phone-one" src={MobileOne} alt="Mobile-phone" />
                <img className="phone-two" src={MobileTwo} alt="Mobile-phone" />
                <img className="phone-three" src={MobileThree} alt="Mobile-phone" />
            </div>
            <div className="step-2-text">
                <h2>Step 2. Latest transaction history</h2>
                <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. 
                    Arcu sociis tristique quisque hac in consectetur condimentum.
                </p>
            </div>
        </div>
    </div>
</section>
  )
}

export default HowItWorks