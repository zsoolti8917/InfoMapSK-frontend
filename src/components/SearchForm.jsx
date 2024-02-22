import React from 'react'
import Button from './Button'
import MagnifyingGlass from '../assets/magnifying-glass.svg'
const SearchForm = () => {
  return (
    <form action="submit" className='relative'>
    <input type="text"
    placeholder="Hľadať regióny, okresy alebo obce..."
    className='border-0 rounded-md p-2 pl-12 hidden md:block mb-6 lg:inline-block lg:mb-0 lg:mr-6 desktop:min-w-[365px]'
    />
    <img src={MagnifyingGlass} alt="lupa" className='max-w-[20px] absolute top-3 left-4 hidden md:block'/>
    <Button 
    customTextColor="text-primary-100"
    customBorderColor="border-secondary-800"
    customHoverBgColor="hover:bg-primary-100"
    customHoverTextColor="hover:text-primary-700"
    customPaddingX="desktop:px-10 px-6"
    customPaddingY="py-3"
    customBgColor="bg-primary-700"
    customRounded="rounded-2xl"
    customBorder="border-0"
    >
      Hľadať
    </Button>
  </form>
  )
}

export default SearchForm