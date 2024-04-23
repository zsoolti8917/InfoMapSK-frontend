import BgLogo from '../assets/bg-pattern-home-6-about-5.svg'
import Button from './Button'
import React from 'react'
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <section className='bg-primary-300 min-h-[300px] flex items-center font-livvic relative overflow-hidden'>
      <div className='m-auto px-10 text-center flex flex-col gap-6 items-center lg:flex-row lg:justify-between lg:max-w-[800px] lg:w-full lg:px-0 desktop:max-w-container'>
        <h3 className='text-4xl font-extrabold lg:text-h2 flex-1 desktop:text-start'>
        Ste pripravení začať?
        </h3>   
        <Link to="/data" className="no-underline">
        <Button
        customTextColor="text-secondary-800"
        customBorderColor="border-secondary-800"
        customHoverBgColor="hover:bg-secondary-800"
        customHoverTextColor="hover:text-primary-100"
        customPaddingX="desktop:px-10 px-6"
        customBorder="border-2"
        >
        Začnite teraz
      </Button> 
      </Link>
      </div>

      
      <img src={BgLogo} alt="logo" className='absolute bottom-[-20px] md:bottom-0 left-0'/>
    </section>
  )
}

export default Banner