import React from 'react'
import HeroSection from '../components/HeroSection'
import AiBenefits from '../components/AiBenefits'
import AiTypes from '../components/AiTypes'
import Contacts from '../components/Contacts'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

const Home = () => {
  return (
    <>
      <Navbar/>
      <main>
        <HeroSection/>
        <AiTypes/>
        <AiBenefits/>
        <Contacts />
        <Footer />
        <ScrollToTop/>
      </main>
    </>
  )
}

export default Home
