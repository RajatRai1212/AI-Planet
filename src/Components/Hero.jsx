import React from 'react'
import { Link } from 'react-router-dom'

import bulb from '../Logo/bulb.png'
import bgIMG from '../Logo/waves.png'
const Hero = () => {
  return (
    
    <div className='flex bg-[#003145] text-white bg-cover ' style={{backgroundImage: `url(${bgIMG}) `}}>
        <div className='p-14 px-24 space-y-5 max-w-3xl'>
            <h1 className='text-xl font-bold'>Hackathon Submissions</h1>
            <p className=' '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, delectus fugit facilis iusto aperiam ea sit laborum quae voluptate, odit recusandae, natus doloribus est. Obcaecati explicabo culpa ipsam officia quas.</p>
            <Link to="/New-submission">
            <button className='bg-[#44924C] p-2 mt-3 rounded-md'>Upload Submission</button>
            </Link>
        </div>
        <div className='px-20' >
            <img src={bulb} alt=""  className='w-[200px] h-auto '/>
        </div>
    </div>
  )
}

export default Hero