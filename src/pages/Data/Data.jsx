
import Nav from '../../components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Banner from './components/Banner.jsx'
import Footer from '../../components/Footer.jsx'
import DataHolder from './components/DataHolder.jsx'
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
    <Banner />
    <SlovakiaMap />
    <TabsContainer />
    <DataHolder />
    </DataProvider>
    
    <Footer />
  </div>
  )
}

const TabsContainer = () =>{
  const {activeTab, setActiveTab, selection, listData} = useContext(DataContext);
  return <Tabs activeTab={activeTab} setActiveTab={setActiveTab}  selection={selection} listData={listData}/>
}

export default Data