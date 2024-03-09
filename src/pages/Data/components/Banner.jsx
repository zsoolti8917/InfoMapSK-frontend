import SearchForm from './SearchForm'
import BgLogo from '../../../assets/bg-pattern-home-6-about-5.svg'
import React from 'react'
const Banner = () => {
  return (
    <section className='bg-primary-300 min-h-[300px] flex items-center font-livvic relative overflow-hidden'>
      <div className='m-auto px-10 text-center flex flex-col gap-6 items-center lg:flex-row lg:justify-between lg:max-w-[800px] lg:w-full lg:px-0 desktop:max-w-container'>
        <h3 className='text-4xl font-extrabold lg:text-h2 flex-1 desktop:text-start'>
        Ste pripravení začať?
        </h3>
          
        <SearchForm />
      </div>
      <img src={BgLogo} alt="logo" className='absolute bottom-[-20px] md:bottom-0 left-0'/>
    </section>
  )
}

export default Banner