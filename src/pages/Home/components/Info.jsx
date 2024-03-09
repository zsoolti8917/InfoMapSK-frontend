import IconPerson from '../../../assets/icon-person.svg'
import IconCog from '../../../assets/icon-cog.svg'
import IconChart from '../../../assets/icon-chart.svg'
import bgGraph from '../../../assets/bg-pattern-home-3.svg'
import React from 'react'
const Info = () => {
  return (
    <section className='bg-secondary-800 font-livvic relative'>
        <div className='text-primary-100 px-6 lg:px-0 py-12 max-w-[600px] lg:max-w-[800px] mx-auto desktop:max-w-container desktop:flex desktop:gap-4'>
            <div className='relative'>
            <div className='absolute w-[44px] h-[5px] bg-primary-300 top-0 left-0'></div>
                <h3 className='font-bold text-3xl w-2/3 pt-6 md:text-4xl md:w-full md:pr-4 desktop:text-5xl'>
                Vytvárame a spravujeme 
                dátové vizualizácie
                na inej úrovni.
                </h3>
            </div>

            <div className='text-center pt-16 desktop:pt-0 flex flex-col gap-6 md:text-left'>
                <div className='flex flex-col items-center gap-4 md:gap-6 md:flex-row md:items-start '>
                    <img src={IconPerson} alt="" className='max-w-[72px] w-full' />
                    <div>
                        <h4 className='text-lg text-primary-300 font-bold pb-2'>Osobná expertíza</h4>
                        <p>Tento projekt je výsledkom osobnej vášne a odborných znalostí v oblasti dátového inžinierstva a visalizačných technológií, s dôrazom na uživateľský komfort a presnosť informácií.</p>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-4 md:gap-6 md:flex-row md:items-start'>
                    <img src={IconCog} alt="" />
                    <div>
                        <h4 className='text-lg text-primary-300 font-bold pb-2'>Jednoduchosť použitia</h4>
                        <p>Navrhnuté s myšlienkou na jednoduchosť, náš nástroj na vizualizáciu dát umožňuje jednoduché načítanie a prezentáciu komplexných dátových súborov bez potreby technických zručností.</p>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-4 md:gap-6 md:flex-row md:items-start'>
                    <img src={IconChart} alt="" />
                    <div>
                        <h4 className='text-lg text-primary-300 font-bold pb-2'>Zvýšená produktivita</h4>
                        <p>S našou platformou, ktorá je vybavená pokročilými analytickými nástrojmi, môžete ľahko spravovať a interpretovať otvorené dáta.</p>
                    </div>
                </div>
            </div>
        </div>
        <img src={bgGraph} alt="" className='top-0 right-[-100px] absolute desktop:bottom-0 desktop:top-auto'/>
    </section>
  )
}

export default Info