import React from 'react'
import PhoneIcon from '../../../images/icons/Group_phone.svg'
import RightArrowBlue from '../../../images/icons/icon-r_arrow.right-blue.svg'
import MessageIcon from '../../../images/icons/icon_message.svg'
import RightArrowGreen from '../../../images/icons/icon-r_greenArrow.svg'

const Faq = () => {
  return (
    <section id="faq-section">
                <div className="container">
                    <div className="contact">
                        <h1>Any questions? </h1>
                        <h1>Check out the FAQs</h1>
                        <p>Still have unanswered questions and need to get in touch?</p>
                        <div className="contact-info">
                            <div className="phone-contact">
                                <img src={PhoneIcon} alt="Phone-icon" / >
                                <p>Still have  questions?</p>
                                <a href="#">Contact us <img src={RightArrowBlue} alt="Blue-arrow" /></a>
                            </div>
                            <div className="message-contact">
                                <img src={MessageIcon} alt="Message-icon" />
                                <p>Don't like phone calls?</p>
                                <a className="green-contact" href="#">Contact us<img src={RightArrowGreen} alt="Green-arrow" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-group">
                        <div className="card">
                            <div className="heading">
                                <button data-toggle="collapse" data-toggle-target="card-body-1">
                                    <h6>Is any of my personal information stored in the App?</h6></button>
                                <i className="fa-regular fa-chevron-down"></i>
                            </div>
                            <div id="card-body-1" className="card-body d-none">
                                <p>
                                    Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. 
                                    Viverra aliquam arcu, viverra et, cursus. 
                                    Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. 
                                    Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. 
                                    Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="heading">
                                <button data-toggle="collapse" data-toggle-target="card-body-2"><h6>What formats can I download my transaction history in?</h6></button>
                                <i className="fa-regular fa-chevron-down"></i>
                            </div>
                            <div id="card-body-2" className="card-body d-none">
                                <p>
                                    Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. 
                                    Viverra aliquam arcu, viverra et, cursus. 
                                    Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. 
                                    Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. 
                                    Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.    
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="heading">
                                <button data-toggle="collapse" data-toggle-target="card-body-3"><h6>Can I schedule future transfers?</h6></button>
                                <i className="fa-regular fa-chevron-down"></i>
                            </div>
                            <div id="card-body-3" className="card-body d-none">
                                <p>
                                    Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. 
                                    Viverra aliquam arcu, viverra et, cursus. 
                                    Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. 
                                    Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. 
                                    Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.    
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="heading">
                                <button data-toggle="collapse" data-toggle-target="card-body-4"><h6>When can I use Banking App services?</h6></button>
                                <i className="fa-regular fa-chevron-down"></i>
                            </div>
                            <div id="card-body-4" className="card-body d-none">
                                <p>
                                    Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. 
                                    Viverra aliquam arcu, viverra et, cursus. 
                                    Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. 
                                    Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. 
                                    Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat. 
                                </p>        
                            </div>
                        </div>
                        <div className="card">
                            <div className="heading">
                                <button data-toggle="collapse" data-toggle-target="card-body-5"><h6>Can I create my own password that is easy for me to remember?</h6></button>
                                <i className="fa-regular fa-chevron-down"></i>
                            </div>
                            <div id="card-body-5" className="card-body d-none">
                                <p>
                                    Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. 
                                    Viverra aliquam arcu, viverra et, cursus. 
                                    Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. 
                                    Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. 
                                    Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.    
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="heading">
                                <button data-toggle="collapse" data-toggle-target="card-body-6"><h6>What happens if I forget or lose my password?</h6></button>
                                <i className="fa-regular fa-chevron-down"></i>
                            </div>
                            <div id="card-body-6" className="card-body d-none">
                                <p>
                                    Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. 
                                    Viverra aliquam arcu, viverra et, cursus. 
                                    Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. 
                                    Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. 
                                    Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.   
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default Faq