import React from 'react'
import ContactUs from './sections/Contact-page/ContactUs'
import Location from './sections/Contact-page/Location'
import ContactFooter from './sections/Contact-page/ContactFooter'
import Header from './sections/Header'

const Contact = () => {
  return (
    <main> 
        <Header fillerBackground={true}/>
        <ContactUs />
        <Location />
        <ContactFooter />
    </main>   
  )
}

export default Contact