import React from 'react'
import Formular from './Formular'
import bgGraph1 from '../../../assets/bg-pattern-about-2-contact-1.svg'
import bgGraph2 from '../../../assets/bg-pattern-contact-2.svg'
import iconCog from '../../../assets/icon-cog.svg'
import iconPerson from '../../../assets/icon-person.svg'
import icconGraph from '../../../assets/icon-chart.svg'


const Content = () => {
  return (
    <section className='relative bg-primary-700 pt-12  overflow-hidden'>
        <div className='desktop:max-w-container lg:max-w-[800px] md:max-w-[500px] mx-auto px-6 md:px-0 flex lg:flex-row pb-24 flex-col gap-16 md:gap-12 lg:gap-0'>
            <div className='text-primary-100 font-livvic flex flex-col gap-4 self-center text-center lg:text-left'>
            <h2 className='text-5xl font-bold'>Kontakt</h2>
            <p className='text-xl text-primary-300'>Spýtajte sa nás na</p>
            <div className='flex items-center gap-6 pt-6'>
                <img src={iconPerson} alt="" />
                <p>Univerzálnosť našich dátových vizualizácií</p>
            </div>
            <div className='flex items-center gap-6 pt-6'>
                <img src={iconCog} alt="" />
                <p>Ako navigovať a používať našu platformu</p>
            </div>
            <div className='flex items-center gap-6 pt-6'>
                <img src={icconGraph} alt="" />
                <p>Rozsah dostupných dátových súborov a vhľadov</p>
            </div>
            </div>
            <div className='flex-1 lg:pl-16'>
                <Formular />
            </div>
        </div>
        <img src={bgGraph1} alt="" className='absolute left-[-100px] top-[100px] hidden md:block' />
        <img src={bgGraph2} alt="" className='absolute right-[-100px] md:bottom-0 bottom-[-100px]' />
    </section>
  )
}

export default Content