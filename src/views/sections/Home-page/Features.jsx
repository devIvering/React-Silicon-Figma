import React from 'react'
import PhoneImage from '../../../images/mobile-appfeatures.svg'
import CardIcon from '../../../images/icons/icon_card.svg'
import ShieldIcon from '../../../images/icons/icon_security.svg'
import StatsIcon from '../../../images/icons/icon_stats.svg'
import SupportIcon from '../../../images/icons/icon_support.svg'
import CashIcon from '../../../images/icons/icon_cash.svg'
import StandardsIcon from '../../../images/icons/icon_standards.svg'

const Features = () => {
    return (
    <section id="features">
       <div className="container">
          <img className="feature-image" src={PhoneImage} alt="Phone" />
          <div className="content">
             <div id="features-header">
                <h1>App Features</h1>
                <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                   Proin volutpat mollis egestas. Nam luctus facilisis ultrices. 
                   Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.
                </p>
             </div>
             <div id="features-payments" className="box">
                <div>
                   <img src={CardIcon} alt="Card-icon" />
                </div>
                <div>
                   <h2>Easy Payments</h2>
                   <p>Id mollis consectetur congue egestas egestas 
                      suspendisse blandit justo.
                   </p>
                </div>
             </div>
             <div id="features-security" className="box">
                <div>
                   <img src={ShieldIcon} alt="Shield-icon" />
                </div>
                <div>
                   <h2>Data Security</h2>
                   <p>Augue pulvinar justo, fermentum fames aliquam 
                      accumsan vestibulum non.
                   </p>
                </div>
             </div>
             <div id="features-stats" className="box">
                <div>
                   <img src={StatsIcon} alt="Statistics-icon" />
                </div>
                <div>
                   <h2>Cost Statistics</h2>
                   <p>Mattis urna ultricies non amet, purus in auctor non. 
                      Odio vulputate ac nibh.
                   </p>
                </div>
             </div>
             <div id="features-support" className="box">
                <div>
                   <img src={SupportIcon} alt="Support-icon" />
                </div>
                <div>
                   <h2>Support 24/7</h2>
                   <p>A elementum, imperdiet enim, pretium etiam 
                      facilisi in aenean quam mauris.
                   </p>
                </div>
             </div>
             <div id="features-cash" className="box">
                <div>
                   <img src={CashIcon} alt="Wallet-icon" />
                </div>
                <div>
                   <h2>Regular Cashback</h2>
                   <p>Sit facilisis dolor arcu, fermentum vestibulum arcu 
                      elementum imperdiet eleifend.
                   </p>
                </div>
             </div>
             <div id="features-standards" className="box">
                <div>
                   <img src={StandardsIcon} alt="Smiley-icon" />
                </div>
                <div>
                   <h2>Top Standards</h2>
                   <p>Faucibus cursus maecenas lorem cursus nibh. 
                      Sociis sit risus id. Sit facilisis dolor arcu.
                   </p>
                </div>
             </div>
          </div>
       </div>
    </section>
    )
    }
    export default Features