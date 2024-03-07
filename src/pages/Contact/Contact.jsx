import React from 'react'
import Navbar from '../../components/Navbar'
import Formular from './components/Formular'
import Footer from '../../components/Footer'
import KontaktInfo from './components/KontaktInfo'
const Contact = () => {
  return (
    <>
    <Navbar />
    <div>
      <KontaktInfo />
      <Formular />
    </div>
    <Footer />
    </>
  )
}

export default Contact