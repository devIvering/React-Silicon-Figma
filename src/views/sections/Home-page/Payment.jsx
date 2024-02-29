import React from 'react'
import CheckBox from '../../../images/icons/bx-check-circle.svg'
import RightArrow from '../../../images/icons/icon-r_rightArrow.svg'
import ChartPictureImage from '../../../images/payment-section/image_box-two.svg'
import ContactListImage from '../../../images/payment-section/image_box-three.svg'
import CardIcon from '../../../images/icons/icon_card.svg'
import CashIcon from '../../../images/icons/icon_cash.svg'

const Payment = () => {
  return (
    <section id="payment-section">
                <div className="container">
                    <div id="payment-first-box" className="box">
                        <h1>Make your money transfer simple and clear</h1>
                        <div className="payment-box">
                            <img src={CheckBox} alt="Blue-checkbox" />
                            <p>Banking transactions are free for you</p>
                        </div>
                        <div className="payment-box">
                            <img src={CheckBox} alt="Blue-checkbox" />
                            <p>No monthly cash commission</p>
                        </div>
                        <div className="payment-box">
                            <img src={CheckBox} alt="Blue-checkbox" />
                            <p>Manage payments and transactions online</p>
                        </div>
                        <button className="btn btn-theme">Learn more <img src={RightArrow} alt="Right-arrow" /></button>
                    </div>
                    <div id="payment-second-box" className="box">
                        <img src={ChartPictureImage} alt="Chart-picture" />
                    </div>
                    <div id="payment-third-box" className="box">
                        <img src={ContactListImage} alt="Contact-list-and-card" />
                    </div>
                    <div id="payment-fourth-box" className="box">
                        <h1>Receive payment from international bank details</h1>
                        <div className="fourth-box-icons">
                            <div>
                                <img src={CardIcon} alt="Card-icon" />
                                <p>Manage your payments online. 
                                    Mollis congue egestas egestas fermentum fames.
                                </p>
                            </div>
                            <div>
                                <img src={CashIcon} alt="Wallet-icon" />
                                <p>A elementur and imperdiet enim, 
                                    pretium etiam facilisi aenean quam mauris.
                                </p>
                            </div>
                        </div>
                        <button className="btn btn-theme">Learn more <img src={RightArrow} alt="Right-arrow" /></button>
                    </div>

                </div>
            </section>
  )
}

export default Payment