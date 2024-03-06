import Button from '../../../components/Button.jsx'
import DataHolderItem from './DataHolderItem.jsx'
const DataHolder = () => {
  return (
    <section className='bg-secondary-800 text-primary-100'>
        <div className='desktop:max-w-container lg:max-w-[800px] flex items-center flex-col m-auto gap-6 py-8 px-6'>
            <div className='flex gap-2 w-full flex-wrap'>
                <button className='px-16 py-2 bg-primary-300 flex-1 hover:bg-primary-100 hover:text-secondary-900 ease-in transition-all duration-200'>
                    Animovaná vizualizácia
                </button>
                <button className='px-16 py-2 bg-primary-300 flex-1 hover:bg-primary-100 hover:text-secondary-900 ease-in transition-all duration-200'>
                    Analizovaná vizualizácia
                </button>
            </div>
            <div className='flex flex-wrap gap-6 desktop:justify-between desktop:gap-0 desktop:w-full justify-center'>
                <Button>
                    Obyvateľstvo
                </Button>
                <Button>
                    Ekonomická aktivita
                </Button>
                <Button>
                    Poľnohospodárstvo
                </Button>
                <Button>
                    Organizačná štatistika
                </Button>
            </div>
            <div className='flex flex-col'>
               <DataHolderItem />
               <DataHolderItem />
               <DataHolderItem />
               <DataHolderItem />
                <div className='mt-20 flex justify-end'>
                <Button>
                    Späť na mapu
                </Button>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default DataHolder