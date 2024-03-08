import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Data from './pages/Data/Data.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import FAQ from './pages/FAQ/FAQ.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Contact from './pages/Contact/Contact.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/Data' element={<Data/>} />
      <Route path='/FAQ' element={<FAQ/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
