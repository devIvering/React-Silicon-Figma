import React from 'react'
import Showcase from './sections/Home-page/Showcase'
import Brands from './sections/Home-page/Brands'
import Features from './sections/Home-page/Features'
import HowItWorks from './sections/Home-page/HowItWorks'
import Payment from './sections/Home-page/Payment'
import Review from './sections/Home-page/Review'
import Faq from './sections/Home-page/Faq'
import Subscribe from './sections/Home-page/Subscribe'
import HomeFooter from './sections/Home-page/HomeFooter'
import Header from './sections/Header'

const Home = () => {
  return (
    <main>
      <Showcase />
      <Brands />
      <Features />
      <HowItWorks />
      <Payment />
      <Review />
      <Faq />
      <Subscribe />
      <HomeFooter />
    </main>
  )
}

export default Home