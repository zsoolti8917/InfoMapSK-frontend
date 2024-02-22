import React from 'react'
import Button from './Button'
import SearchForm from './SearchForm'
import BgLogo from '../assets/bg-pattern-home-6-about-5.svg'
import MagnifyingGlass from '../assets/magnifying-glass.svg'
const Banner = () => {
  return (
    <section className='bg-primary-300 min-h-[300px] flex items-center font-livvic relative overflow-hidden'>
      <div className='m-auto px-10 text-center flex flex-col gap-6 items-center lg:flex-row lg:justify-between lg:max-w-[800px] lg:w-full lg:px-0 desktop:max-w-container'>
        <h3 className='text-4xl font-extrabold lg:text-h2 flex-1'>
        Ste pripravení začať?
        </h3>
          
        <form action="submit" className='relative '>
          <input type="text"
          placeholder="Hľadať regióny, okresy alebo obce..."
          className='border-0 rounded-md p-2 pl-12 hidden md:block mb-6 lg:inline-block lg:mb-0 lg:mr-6 desktop:min-w-[365px]'
          />
          <img src={MagnifyingGlass} alt="lupa" className='max-w-[20px] absolute top-3 left-4 hidden md:block'/>
          <Button 
          customTextColor="text-primary-100"
          customBorderColor="border-secondary-800"
          customHoverBgColor="hover:bg-primary-100"
          customHoverTextColor="hover:text-primary-700"
          customPaddingX="desktop:px-10 px-6"
          customPaddingY="py-3"
          customBgColor="bg-primary-700"
          customRounded="rounded-2xl"
          customBorder="border-0"
          >
            Hľadať
          </Button>
        </form>
      </div>
      <img src={BgLogo} alt="logo" className='absolute bottom-[-20px] md:bottom-0 left-0'/>
    </section>
  )
}

export default Banner