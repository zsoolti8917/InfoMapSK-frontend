import React, {useState} from 'react'
import Button from './Button'
import Hamburger from '../assets/icon-hamburger.svg'
import Close from '../assets/icon-close.svg'
import Logo from '../assets/logothick.png'

const Navbar = () => {

  let Links = [
    { name: "O projekte", link: "/" },
    { name: "Data", link: "/" },
    { name: "FAQ", link: "/" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className='shadow-md w-full fixed top-0 left-0 bg-primary-700'>
      {/* Overlay */}
      <div className={`${open ? 'fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10' : 'hidden'}`} onClick={() => setOpen(false)}></div>

      
      <div className='md:flex items-center justify-between px-4 py-4 max-w-container m-auto'>
        <div className='font-bold text-2xl cursor-pointer flex items-center 
        text-primary-100'>
          <img src={Logo} alt="" className='w-[240px]'/>
        </div>

        <div onClick={() => setOpen(!open)} className='text-3xl z-30 fixed right-8 top-10 cursor-pointer md:hidden'>
        <img src={open ? Close : Hamburger} alt="" className='w-[30px]' />
        </div>

        <ul className={`md:flex md:gap-8 md:items-center md:justify-center pt-16 md:pt-0 md:flex-row md:pb-0 pb-12 fixed md:static bg-primary-700 md:z-auto z-20 h-full md:h-auto top-0 ${open ? 'right-0' : '-right-full'} w-[75%] md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in-out`}>
          {
            Links.map((link) => (
              <li key={link.name} className='text-xl md:my-0 my-7 pb-6 md:pb-0'>
                <a href={link.link} className='text-primary-100 hover:text-primary-300 duration-500'>{link.name}</a>
              </li>
            ))
          }
          <Button>
            Kontaktujte&nbsp;nás
          </Button>
        </ul>
      </div>
      
    </div>
  )
}

export default Navbar