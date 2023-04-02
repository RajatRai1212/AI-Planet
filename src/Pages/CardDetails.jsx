import React from 'react'
import { AiFillGithub, AiOutlineStar, AiTwotoneCalendar } from 'react-icons/ai'
import { BsFillPencilFill } from 'react-icons/bs'
import { MdDelete } from 'react-icons/md'
import {FiExternalLink } from "react-icons/fi"
import Navbar from '../Components/Navbar'

const CardDetails = () => {
  return (
    <><Navbar />


      <div>
        <div className='flex justify-between bg-[#003145] text-white p-12 px-24'>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-6'>
              <img className='w-24 h-24' src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm00MjgtZWxlbWVudC0yNy5wbmc.png?s=VhrzbK51wpP7Bs9ihv4MlHXpOdGB02yWN0Y1a07F_Es" alt="" />
              <h2 className='font-bold text-xl'> Interview Me</h2>
            </div>
            <p>Built with GPT-3, React, and Flask. Practice interviews with AI and ace your next interview.</p>
            <div className='flex items-center gap-5'>
              <div className='pr-5 py-1 border-r-2 border-[#F5F5F5]'>
                <AiOutlineStar />
              </div>
              <div className='flex items-center gap-2 text-xs bg-[#255973] px-2 py-1 rounded-full'>
                <AiTwotoneCalendar /> <span>12 March</span>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <button className='flex items-center gap-3 border-2 rounded-lg px-2 py-1'> <BsFillPencilFill />Edit</button>
            <button className='flex items-center gap-3 border-2 rounded-lg px-2 py-1'> <MdDelete />Delete</button>
          </div>

        </div>
        {/* Discription Box */}
        <div className='p-14 flex bg-[#F5F5F5]'>
          <div className='mx-12 '>
            <span className='font-semibold'>Description</span>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lacus sit aliquam vivamus sodales a integer justo elit
              . Mattis urna non parturient est non faucibus pretium morbi. Mattis condimentum arcu sapien nunc semper
              in laoreet amet cursus. At purus consectetur orci morbi at. Gravida consectetur nunc in quis vitae egestas. Fermentum pellentesque ullamcorper nisl massa penatibus condimentum non imperdiet. Porttitor a hendrerit pellentesque enim mus congue. Vitae interdum fusce duis ac posuere in aliquam risus aenean. Mi aliquet viverra ipsum lacus condimentum tincidunt. In bibendum imperdiet nullam eget tincidunt. Ut lorem id enim interdum lobortis aliquam risus elementum aliquet. Placerat fusce proin diam sollicitudin netus tincidunt sit ultricies. Varius convallis ultrices fermentum in commodo ut posuere. Lacus luctus lacus consequat dolor.
              Lacus vulputate molestie mattis penatibus risus quam elit gravida auctor. Eget morbi maecenas nam in. Felis urna
              non id adipiscing sed cursus nec arcu. Egestas placerat blandit sed quis sed vitae. Porta at ac turpis gravida leo.
              Ipsum in laoreet facilisi arcu. Proin vulputate mi viverra dignissim sollicitudin interdum ultrices. Habitant eget d
              apibus pharetra blandit quis sagittis pulvinar fames vel.
              Sit gravida cursus ligula fames lacus. Bibendum lectus nunc dapibus dui lectus velit porta. Sit id elementum urna at ut
              lorem aliquet. Pharetra sit malesuada tellus eget urna ultrices lectus et cursus. Bibendum leo id consectetur vel lectus
              mi urna in diam. Egestas metus enim elementum turpis felis. Leo ultrices adipiscing viverra ac. Maecenas a odio ac velit in
              tortor faucibus quam quis. Ut sapien auctor lacus pretium nec eu sed sit. Nulla quis sed massa maecenas.
            </p>
          </div>

          <div className='flex flex-col gap-3 w-[300px]'>
            <span>Hackathon</span>
            <h2 className='font-semibold '>Prestige Interview Challenge</h2>
            <div>
              <AiTwotoneCalendar/> 24 Feb 2023 - 24 March 2023
            </div>
            <button className='border-2 flex items-center p-2'><AiFillGithub/>GitHub Repository</button>
            <button className='border-2 flex items-center p-2'><FiExternalLink/>Other Link</button>

          </div>


        </div>

      </div>
    </>
  )
}

export default CardDetails