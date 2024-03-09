import React, {useState} from 'react'
import Button from './Button'
import Hamburger from '../assets/icon-hamburger.svg'
import Close from '../assets/icon-close.svg'
import Logo from '../assets/logothick.png'
import { Link } from 'react-router-dom'
const Navbar = () => {

  let Links = [
    { name: "O projekte", link: "/about" },
    { name: "Data", link: "/data" },
    { name: "FAQ", link: "/FAQ" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className='shadow-md w-full bg-primary-700 z-50'>
      {/* Overlay */}
      <div className={`${open ? 'fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10' : 'hidden'}`} onClick={() => setOpen(false)}></div>

      
      <div className='md:flex items-center justify-between px-4 py-4 md:px-0 max-w-container m-auto'>
        <div className='font-bold text-2xl cursor-pointer flex items-center 
        text-primary-100'>
          <Link to='/'> <img src={Logo} alt="" className='sm:w-[240px] w-[180px]'/></Link>
        </div>

        <div onClick={() => setOpen(!open)} className='text-3xl z-30 fixed right-8 sm:top-9 top-6 cursor-pointer md:hidden'>
        <img src={open ? Close : Hamburger} alt="" className='w-[30px]' />
        </div>

        <ul className={`md:flex md:gap-8 md:items-center md:justify-center pt-16 md:pt-0 md:flex-row md:pb-0 pb-12 fixed md:static bg-primary-700 md:z-auto z-20 h-full md:h-auto top-0 ${open ? 'right-0' : '-right-full'} w-[75%] md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in-out`}>
          {
            Links.map((link) => (
              <li key={link.name} className='text-xl md:my-0 my-7 pb-6 md:pb-0'>
                <Link to={link.link} className='text-primary-100 hover:text-primary-300 duration-500'>{link.name}</Link>
              </li>
            ))
          }
          <Link to='/contact'>
          <Button>
            Kontaktujte&nbsp;nás
          </Button>
          </Link>
        </ul>
      </div>
      
    </div>
  )
}

export default Navbar