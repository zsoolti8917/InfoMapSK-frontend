import React from 'react'
import bgGraph1 from '../../../assets/bg-pattern-home-4-about-3.svg'
import bgGraph2 from '../../../assets/bg-pattern-home-5.svg'
import iconQuote from '../../../assets/icon-quotes.svg'
const Testimonials = () => {
  return (
    <section className='bg-primary-700 text-primary-100 font-livvic relative'>
        <div className='px-6 py-36 text-center max-w-[500px] mx-auto lg:max-w-[800px] desktop:max-w-container desktop:py-24'>
            <h3 className='text-3xl font-bold lg:text-4xl desktop:w-2/3 desktop:mx-auto'>Pozrite sa, ako naša platforma mení hru s otvorenými dátami.</h3>
            <div className='flex flex-col gap-20 lg:gap-8 pt-20 lg:flex-row'>
                <div className='relative'>
                <img src={iconQuote} alt="" className='absolute right-1/2 transform translate-x-1/2 -top-10'/>
                    <p className='relative z-10'>Komplexnosť dát je teraz ľahko pochopiteľná vďaka pokročilej vizualizácii. Platforma prináša dáta k životu, poskytuje prehľadné informácie a oživuje štatistiky.</p>
                </div>
                <div className='relative'>
                    <img src={iconQuote} alt="" className='absolute right-1/2 transform translate-x-1/2 -top-10'/>
                    <p className='relative z-10'>Interaktívna mapa a vizuálne nástroje umožňujú hlbšie ponorenie do dátových súborov a odhalenie skrytých trendov, ktoré sú kľúčové pre informované rozhodnutia.</p>
                </div>
                <div className='relative'>
                <img src={iconQuote} alt="" className='absolute right-1/2 transform translate-x-1/2 -top-10'/>
                    <p className='relative z-10'>Užívateľsky prívetivé rozhranie a dynamické analytické funkcie zjednodušujú prácu s dátami a umožňujú efektívne spracovanie aj rozsiahlych dátových množstiev.</p>
                </div>
            </div>
        </div>
        <img src={bgGraph1} alt="" className='absolute top-0' />
        <img src={bgGraph2} alt="" className='absolute right-0 bottom-0'/>
    </section>
  )
}

export default Testimonials