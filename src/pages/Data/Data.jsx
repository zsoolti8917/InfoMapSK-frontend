
import Nav from '../../components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Banner from './components/Banner.jsx'
import Footer from '../../components/Footer.jsx'
import DataHolder from './components/DataHolder.jsx'
import DataFetcher from './components/DataFetcher.jsx'
import React from 'react'
const Data = () => {
  return (
    <div>
    <Nav />
    <Hero />
    <DataFetcher />
    <DataHolder />
    <Banner />
    <Footer />
  </div>
  )
}

export default Data