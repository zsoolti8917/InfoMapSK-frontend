import Grafika from '../../../assets/icon-twitter.svg'
const DataHolderItem = () => {
  return (
    <div className='grid md:grid-cols-2 pt-10'>
    <div className='relative flex flex-col gap-2'>
    <div className='absolute w-[44px] h-[5px] bg-primary-300 top-0 left-0 block'></div>
        <h4 className='mt-6'>Detailné Údaje</h4>
        <ul className='list-disc pl-8'>
            <li>Populácia: 5.45 milióna</li>
            <li>HDP na obyvateľa: 19 000 EUR</li>
            <li>Priemerný vek: 40.5 rokov</li>
            <li>Miera nezamestnanosti: 6.2%</li>
        </ul>
        <p>Tieto údaje poskytujú hĺbkový pohľad na ekonomické a sociálne aspekty regiónu, odhaľujúc vzory a trendy, ktoré ovplyvňujú každodenný život občanov.</p>
    </div>

    <div className='pt-10'>
        <div className='flex lg:justify-end justify-center items-center'>
            <img src={Grafika} alt="" />
        </div>
    </div>
</div>
  )
}

export default DataHolderItem