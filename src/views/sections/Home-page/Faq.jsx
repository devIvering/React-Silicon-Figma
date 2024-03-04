import React, { useState } from 'react';
import PhoneIcon from '../../../images/icons/Group_phone.svg'
import RightArrowBlue from '../../../images/icons/icon-r_arrow.right-blue.svg'
import MessageIcon from '../../../images/icons/icon_message.svg'
import RightArrowGreen from '../../../images/icons/icon-r_greenArrow.svg'

const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };

    return (
        <div className="card">
          <div className="heading">
            <button onClick={handleToggle}>
              <h6>{title}</h6>
            </button>
            <i className={`fa-regular ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
          </div>
          <div className={`card-body ${isOpen ? 'd-block' : 'd-none'}`}>
            <p>{content}</p>
          </div>
        </div>
      );
    };

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
                        <AccordionItem
                            title="Is any of my personal information stored in the App?"
                            content="Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. 
                            Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. 
                            Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. 
                            Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat."
                        />
                          <AccordionItem
                            title="What formats can I download my transaction history in?"
                            content="Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. 
                            Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. 
                            Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. 
                            Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat."
                        />
                        <AccordionItem
                            title="Can I schedule future transfers?"
                            content="Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. 
                            Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. 
                            Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. 
                            Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat."
                        />
                        <AccordionItem
                            title="When can I use Banking App services?"
                            content="Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. 
                            Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. 
                            Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. 
                            Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat."
                        />
                        <AccordionItem
                            title="Can I create my own password that is easy for me to remember?"
                            content="Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. 
                            Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. 
                            Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. 
                            Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat."
                        />
                        <AccordionItem
                            title="What happens if I forget or lose my password?"
                            content="Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. 
                            Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. 
                            Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. 
                            Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat."
                        />
                        </div>
                    </div>
            </section>
  )
}

export default Faq