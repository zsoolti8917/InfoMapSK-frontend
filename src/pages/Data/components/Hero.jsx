import bgGraph from '../../../assets/bg-pattern-about-1-mobile-nav-1.svg'
import React from 'react'
const Hero = () => {
  return (
    <section className='bg-primary-700 w-full md:min-h-fit min-h-96 md:pt-38 pt-32 relative z-[-1] overflow-hidden pb-32 lg:pb-20'>
        <div className='max-w-[500px] lg:max-w-[800px] desktop:max-w-container m-auto text-primary-100 font-livvic flex flex-col gap-4 lg:gap-12 text-center px-4 lg:px-0 md:gap-8 lg:flex-row lg:text-left'>
            <h1 className='md:text-[64px] text-4xl font-bold md:leading-none lg:leading-[1.2]'>Vizualizované údaje</h1>
            <div className='flex items-center relative'>
            <div className='absolute w-[44px] h-[5px] bg-primary-300 top-0 left-0 hidden lg:block'></div>
            <p className='text-body2'>Pozrite sa na podrobné údaje, ktoré prinášame do popredia s našou interaktívnou platformou. Tu sú najnovšie štatistiky pre vybraný región alebo kategóriu.</p>
            </div>
            
        </div>
        <img src={bgGraph} alt="Graph" className='absolute right-[-100px] bottom-[-100px] md:bottom-0'/>
    </section>
  )
}

export default Hero