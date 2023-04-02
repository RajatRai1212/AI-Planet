import React from 'react'
import Card from './Card'

import InterviewMe from "../Logo/InterviewMe.png"
import Figma from '../Logo/Figma.png'
import Lorem from '../Logo/Lorem.png'
import Office from '../Logo/Office.png'
import Pirate from '../Logo/Pirate.jpg'
import Pizza from '../Logo/Pizza.png'
import Potter from '../Logo/Potter.png'


import { AiOutlineSearch } from 'react-icons/ai'

export const Cards = () => {
    return (
        <div className='bg-[#f5f5f5]'>

            <div className='flex mx-14 p-6 py-10 justify-between '>

                <ul className='flex  '>
                    <li className='px-5 font-semibold hover:border-b-4 border-green-600 py-1'>All Submissions</li>
                    <li className='px-5 font-semibold hover:border-b-4 border-green-600 py-1'>Favourite Submissions</li>
                </ul>

                <div className='flex gap-10'> 
                    <div className='flex border-2 rounded-full px-5 py-1 items-center gap-2'>
                    <AiOutlineSearch size={20} />
                    <input className='bg-transparent outline-none' type="text" placeholder='Search' style={{}} />
                </div>

                    <div className=' '>
                        <select className='bg-transparent border-2 rounded-full px-5 py-1 '>
                            <option>Newest</option>
                            <option>Old</option>

                        </select>
                    </div></div>


            </div>
            {/* Cards */}

            <div className='  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-24 gap-y-10 '>

                <Card src={InterviewMe} heading="InterviewMe" para="InterviewMe
                        Built with GPT-3, React, and Flask. Practice interviews with AI and ace your next interview." date="" />
                <Card src={Lorem} heading="Lore Ipsum" para="InterviewMe
                        Built with GPT-3, React, and Flask. Practice interviews with AI and ace your next interview." date="" />
                <Card src={Potter} heading="Potter Ipsum" para="InterviewMe
                        Built with GPT-3, React, and Flask. Practice interviews with AI and ace your next interview." date="" />
                <Card src={Pizza} heading="Pizza Ipsum" para="InterviewMe
                        Built with GPT-3, React, and Flask. Practice interviews with AI and ace your next interview." date="" />
                <Card src={Figma} heading=" Figma Ipsum" para="InterviewMe
                        Built with GPT-3, React, and Flask. Practice interviews with AI and ace your next interview." date="" />
                <Card src={Office} heading="Office Ipsum" para="InterviewMe
                        Built with GPT-3, React, and Flask. Practice interviews with AI and ace your next interview." date="" />

            </div>


        </div>
    )
}
