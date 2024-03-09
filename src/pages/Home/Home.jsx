import Navbar from "../../components/Navbar"
import Hero from "./components/Hero"
import Banner from "../../components/Banner"
import Info from "./components/Info"
import Testimonials from "./components/Testimonials"
import Footer from "../../components/Footer"
import React from 'react'
const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Info />
    <Testimonials />
    <Banner />
    <Footer />
    </>
  )
}

export default Home