import bgGraph from '../../../assets/bg-pattern-about-1-mobile-nav-1.svg'

const Hero = () => {
  return (
    <section className='bg-primary-700 w-full md:min-h-fit min-h-96 md:pt-38 pt-32 relative z-[-1] overflow-hidden pb-32 lg:pb-20'>
        <div className='max-w-[500px] lg:max-w-[800px] desktop:max-w-container m-auto text-primary-100 font-livvic flex flex-col gap-4 text-center px-4 lg:px-0 md:gap-8 lg:flex-row lg:text-left lg:gap-0'>
            <h1 className='md:text-[64px] text-4xl font-bold md:leading-none lg:leading-[1.2] flex-grow lg:flex-[1]'>Často kladené otázky</h1>
            <div className='flex items-center relative flex-grow lg:flex-[1]'>
            <div className='absolute w-[44px] h-[5px] bg-primary-300 top-0 left-0 hidden lg:block'></div>
            <p className='text-body2 pt-6'>InfoMapSK je interaktívna platforma pre vizualizáciu otvorených dát na Slovensku. Využívame silu vizualizácie na poskytovanie hlbšieho porozumenia a lepších výsledkov z veľkých dát. Naša platforma umožňuje používateľom z celého sveta objavovať a interpretovať dáta v príťažlivej a intuitívnej forme. Sme hrdí na to, že prispievame k transparentnosti a inováciám v oblasti dát a že podporujeme informované rozhodovanie na každej úrovni.</p>
            </div>
            
        </div>
        <img src={bgGraph} alt="Graph" className='absolute right-[-100px] bottom-[-100px] md:bottom-0'/>
    </section>
  )
}

export default Hero