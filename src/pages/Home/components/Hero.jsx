import bgGraph1 from '../../../assets/bg-pattern-home-2.svg'
import bgGraph2 from '../../../assets/bg-pattern-home-1.svg'
import React from 'react'
const Hero = () => {
  return (
    <section className='bg-primary-700 w-full md:min-h-fit min-h-96 md:pt-38 pt-32 relative z-[-1] overflow-hidden pb-32 lg:pb-20'>
        <div className='max-w-[500px] lg:max-w-[800px] desktop:max-w-container m-auto text-primary-100 font-livvic flex flex-col gap-4 lg:gap-12 text-center px-4 lg:px-0 md:gap-8 lg:flex-row lg:text-left pb-6'>
            <h1 className='md:text-[64px] text-4xl font-bold md:leading-none lg:leading-[1.2]'>Preskúmajte Slovensko cez otvorené dáta</h1>
            <div className='flex items-center relative'>
            <div className='absolute w-[44px] h-[5px] bg-primary-300 top-0 left-0 hidden lg:block'></div>
            <p className='text-body2'>Priblíženie komplexných dátových súborov k občanom s použitím interaktívnej vizualizácie a analytických nástrojov.</p>
            </div>
            
        </div>
        <img src={bgGraph1} alt="Graph" className='absolute bottom-0 right-1/2 transform translate-x-1/2 lg:-translate-x-0 lg:right-0'/>
        <img src={bgGraph2} alt="Graph" className='hidden absolute lg:block -left-24 top-1/2 transform -translate-y-1/2' />
    </section>
  )
}

export default Hero