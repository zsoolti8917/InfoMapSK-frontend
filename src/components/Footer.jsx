import Logo from '../assets/logothick.png'
import { Link } from 'react-router-dom'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-secondary-900'>
      <div className='text-primary-100 py-12 px-4 text-center font-livvic max-w-[500px] md:max-w-[800px] desktop:max-w-container lg:px-0 m-auto md:px-8 grid grid-cols-1 md:grid-cols-2 desktop:grid-cols-3 gap-8 justify-items-center md:text-left md:justify-items-start md:gap-2 desktop:grid-rows-2'>
      <img src={Logo} alt="" className='max-w-[240px]'/>
      <nav className='col-start-1 md:pb-8 md:pt-4'>
        <ul className='flex gap-6 md:flex-col md:gap-1 desktop:flex-row desktop:gap-8'>
         <Link to='/data'><li className='hover:text-primary-300 tranzition-all duration-300 cursor-pointer'>Vizualizovaná dáta</li></Link> 
         <Link to='/about'><li className='hover:text-primary-300 tranzition-all duration-300 cursor-pointer'>O projekte</li></Link> 
        </ul>
      </nav>
      
      <p className='md:row-start-1 md:col-start-2 md:row-span-2 md:w-full desktop:row-start-1'>
      InfoMapSK je platforma pre interaktívnu vizualizáciu otvorených dát, poskytujúca užívateľom hĺbkový pohľad na štatistiky a trendy na Slovensku.
      </p>
      
      
      <div className='flex gap-6 md:col-start-1 desktop:col-start-3 desktop:row-start-1 desktop:justify-self-end'>
          {/* <!-- Facebook --> */}
          <a href="https://www.facebook.com/zsoolti8917" target='blank'>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 hover:fill-current hover:text-primary-300 tranzition-all duration-300"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
      </svg>
      </a>

        {/* <!-- Linkedin --> */}
        <a href="https://www.linkedin.com/in/zsolt-varj%C3%BA-019419234/" target='blank'>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 hover:text-primary-300 tranzition-all duration-300"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
      </svg>
      </a>
         
{/* <!-- GitHub --> */}
<a href="https://github.com/zsoolti8917" target='blank'>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 hover:text-primary-300 transition-all duration-300"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-1.03-.01-1.87-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33s1.7.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .26.18.58.69.48A10.0001 10.0001 0 0022 12c0-5.52-4.48-10-10-10z"/>
  </svg>
</a>

      </div>
      <p className='md:justify-self-end desktop:self-end desktop:col-start-3'>Copyright 2024. All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer