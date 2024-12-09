import React, { useState } from 'react'
import logo from '../assets/images/logo-banco-azteca-letras.jpeg'
import menu from '../assets/icons/menu.png'




const Header = () => {
  const [toggle,setToggle]=useState(false)

  const logaout=()=>{

    window.location.href("/login")
  }



  return (
    <div className='w-full h-14 bg-primary py-5 mb-auto  px-20 flex justify-between items-center'>
            <img src={logo} className='w-36 my-auto bg-white p-2 rounded-md' alt="" />
            <button className='relative' onFocus={()=>setToggle(true)} onBlur={()=>setTimeout(()=>{setToggle(false)},100)}>
              <img src={menu} className='w-6 cursor-pointer ' alt="icon menu" />
              {
                toggle&&
                <div className='bg-gray-200 text-primary p-3 absolute w-[120px] left-[-30px] cursor-pointer'>
                  Cerrar seción
                </div>
              }
            </button>
    </div>
  )
}

export default Header