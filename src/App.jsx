import Nav from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Banner from './components/Banner.jsx'
import Footer from './components/Footer.jsx'
import DataHolder from './components/DataHolder.jsx'
import DataFetcher from './components/DataFetcher.jsx'
function App() {
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

export default App
