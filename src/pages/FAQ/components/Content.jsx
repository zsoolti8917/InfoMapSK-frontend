import React from 'react'
import bgGraph1 from '../../../assets/bg-pattern-about-2-contact-1.svg'
import bgGraph2 from '../../../assets/bg-pattern-home-4-about-3.svg'
const Content = () => {
  return (
    <section className='bg-secondary-700 font-livvic text-primary-100 relative overflow-hidden'>
        <div className='md:max-w-[500px] lg:max-w-[800px] desktop:max-w-container mx-auto pt-20 pb-28 px-6 text-center md:pt-12 md:pb-12 lg:text-left lg:pb-32 flex flex-col gap-6 md:px-0'>
            <div></div>
            <div className='bg-primary-700 px-4 py-4 desktop:px-12 desktop:py-8'>
                <h3 className='text-xl text-primary-300'>
                Ako môžem získať prístup k dátam?
                </h3>
                <p className='pt-4 '>
                Prístup k dátam je jednoduchý. Prejdite na sekciu 'Dáta' na našej webovej stránke, vyberte región alebo kategóriu, ktorá vás zaujíma, a budete mať možnosť stiahnuť dáta v rôznych formátoch.
                </p>
            </div>
            <div className='bg-primary-700 px-4 py-4 desktop:px-12 desktop:py-8'>
                <h3 className='text-xl text-primary-300'>
                Ako používam aplikáciu?                </h3>
                <p className='pt-4 '>
                Naša aplikácia je priateľská k užívateľovi a interaktívna. Začnite preskúmaním mapy na úvodnej stránke, vyberte región, aby ste videli podrobné údaje, a použite poskytnuté nástroje na prispôsobenie vizualizácií podľa vašich potrieb.              </p>
            </div>
            <div className='bg-primary-700 px-4 py-4 desktop:px-12 desktop:py-8'>
                <h3 className='text-xl text-primary-300'>
                Môžem požiadať o nové funkcie?              </h3>
                <p className='pt-4 '>
                Určite, vítame návrhy na nové funkcie. Ak máte nejaké nápady alebo špecifické požiadavky, dajte nám vedieť prostredníctvom kontaktného formulára a zvážime ich pri budúcich aktualizáciách.               </p>
            </div>

            <div className='bg-primary-700 px-4 py-4 desktop:px-12 desktop:py-8'>
                <h3 className='text-xl text-primary-300'>
                Ako môžem poskytnúť spätnú väzbu?                </h3>
                <p className='pt-4 '>
                Vaša spätná väzba je pre nás mimoriadne cenná. Zdieľajte svoje myšlienky a skúsenosti prostredníctvom nášho formulára pre spätnú väzbu na webovej stránke. Sme odhodlaní neustále sa zlepšovať a vaše postrehy sú kľúčom k nášmu rastu.                </p>
            </div>

            <div className='bg-primary-700 px-4 py-4 desktop:px-12 desktop:py-8'>
                <h3 className='text-xl text-primary-300'>
                Sú dáta aktuálne?                </h3>
                <p className='pt-4 '>
                Nepretržite pracujeme na zabezpečení toho, aby boli dáta na našej platforme aktuálne. Frekvencia aktualizácie sa líši v závislosti od datasetu, keďže závisí od harmonogramov uvoľňovania dát našimi poskytovateľmi.                </p>
            </div>

        </div>

        <img src={bgGraph1} alt="" className='absolute top-[-100px] left-[-100px]'/>
        <img src={bgGraph2} alt="" className='absolute bottom-0 right-0'/>
    </section>
  )
}

export default Content