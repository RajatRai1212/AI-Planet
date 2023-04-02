import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import {BsFillPencilFill} from 'react-icons/bs'
const InterviewMe = () => {
  return (
    <div>
        <div>
            <div>
            <img src="" alt="" />
            <h2> Interview Me</h2>
            <p>Built with GPT-3, React, and Flask. Practice interviews with AI and ace your next interview.</p>
            <AiOutlineStar/>
            date
            </div>
            <div>
                <button> {<BsFillPencilFill/>}Edit</button>
                <button>Delete</button>
            </div>
            
        </div>
    </div>
  )
}

export default InterviewMe