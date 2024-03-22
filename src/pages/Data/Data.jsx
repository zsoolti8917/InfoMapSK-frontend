
import Nav from '../../components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Banner from './components/Banner.jsx'
import Footer from '../../components/Footer.jsx'
import DataHolder from './components/DataHolder.jsx'
import DataFetcher from './components/DataFetcher.jsx'
import React, {useContext, useEffect} from 'react'
import SlovakiaMap from './components/Map.jsx'
import { DataContext, DataProvider } from './components/DataContext.jsx'
import Tabs from './components/Tabs.jsx'
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

const Data = () => {

  return (
    <div>
    <Nav />
    <Hero />
    <DataProvider>
    <SlovakiaMap />
    <TabsContainer />
    <DataHolder />
    </DataProvider>
    <Banner />
    <Footer />
  </div>
  )
}

const TabsContainer = () =>{
  const {activeTab, setActiveTab} = useContext(DataContext);
  return <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
}

export default Data