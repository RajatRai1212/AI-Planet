import React from 'react'

const Card = (props) => {
    return (
        <div className='border  rounded-md shadow-lg max-w-[360px] h-[289px] p-7'>
            <div className='flex gap-6 items-center'>
                <img className='rounded-md w-24 h-24 object-cover' src={props.src} alt="" />
                <h2 className='text-xl font-semibold'>{props.heading}</h2>
            </div>

            <p className='p-4'>{props.para}</p>
            <div className='w-full text-right'>
                <p className='text-xs'>
                    <i> Uploaded {props.date} Days Ago</i>
                </p>
            </div>
        </div>
    )
}

export default Card