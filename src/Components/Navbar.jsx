import React from 'react'
import logo from '../Logo/Logoo.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
       <> 
            <div className='h-[64px] p-3 px-24 border'>
                <Link to="/">  
                <img src={logo} alt="logo" />
                </Link>
            </div>
            </> 

            
)}

export default Navbar