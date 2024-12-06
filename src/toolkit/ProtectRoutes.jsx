import React, { useEffect } from 'react'
// import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

const ProtectRoutes = () => {
    // const navigate=useNavigate()
    // const user=useSelector(slice=>slice.user)

    const navigateLogin=()=>{
    //   console.log(user)
    //     if(!user){
        //   navigate("/login")
        // }
    }

    useEffect(() => {
      navigateLogin()
    }, [])
    
  return (
    <>
    {
     <Outlet/>
    }
    </>
  )
}

export default ProtectRoutes
