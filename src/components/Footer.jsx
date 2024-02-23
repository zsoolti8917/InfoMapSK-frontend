import React from 'react'
import Logo from '../assets/logothick.png'
import facebook from '../assets/icon-facebook.svg'
import twitter from '../assets/icon-twitter.svg'
import linkedin from '../assets/icon-linkedin.svg'


const Footer = () => {
  return (
    <footer className='bg-secondary-900'>
      <div className='text-primary-100 py-12 px-4 text-center font-livvic max-w-[500px] md:max-w-[800px] desktop:max-w-[1200px] lg:px-0 m-auto md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center md:text-left md:justify-items-start md:gap-2'>
      <img src={Logo} alt="" className='max-w-[240px]'/>
      <nav className='col-start-1 md:pb-8 md:pt-4'>
        <ul className='flex gap-6 md:flex-col md:gap-1'>
          <li>Vizualizovaná dáta</li>
          <li>O projekte</li>
        </ul>
      </nav>
      
      <p className='md:row-start-1 md:col-start-2 md:row-span-2 md:w-full'>
      InfoMapSK je platforma pre interaktívnu vizualizáciu otvorených dát, poskytujúca užívateľom hĺbkový pohľad na štatistiky a trendy na Slovensku.
      </p>
      
      
      <div className='flex gap-6 md:col-start-1'>
        <img src={facebook} alt="" className='max-h-[25px]'/>
        <img src={twitter} alt="" className='max-h-[25px]'/>
        <img src={linkedin} alt="" className='max-h-[25px]'/>
      </div>
      <p className='md:justify-self-end'>Copyright 2024. All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer