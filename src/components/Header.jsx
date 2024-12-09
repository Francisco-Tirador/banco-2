import React from 'react'
import logo from '../assets/images/logo-banco-azteca-letras.jpeg'




const Header = () => {
  return (
    <div className='w-full h-14 bg-white py-5 mb-auto  px-20'>
            <img src={logo} className='w-36 my-auto' alt="" />
    </div>
  )
}

export default Header