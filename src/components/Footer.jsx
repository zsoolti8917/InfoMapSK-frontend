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
          <a href="https://www.facebook.com target='blank'">

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
        <a href="https://www.linkedin.com target='blank'">

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 hover:text-primary-300 tranzition-all duration-300"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
      </svg>
      </a>
         {/* <!-- Twitter --> */}
         <a href="https://www.x.com" target='blank'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 hover:text-primary-300 tranzition-all duration-300"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
      </svg>
      </a>
      </div>
      <p className='md:justify-self-end desktop:self-end desktop:col-start-3'>Copyright 2024. All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer