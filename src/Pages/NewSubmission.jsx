import React from 'react'
import Navbar from '../Components/Navbar'

const NewSubmission = () => {
    return (
        <>
            <Navbar />
            <div className='bg-[#f8f9fd] w-full h-full flex items-center '>
                <form className=' w-[918px] flex flex-col gap-6 p-10 px-24 border-4  bg-white '>
                    <h1 className='font-bold text-xl'>New Hackathon Submission</h1>
                    <div>
                        <h3 className='font-semibold text-sm p-2 '> Title</h3>
                        <input className='w-full h-7 border rounded-md border-[#858585] text-[#858585]  px-3' type="text" placeholder='Title of your submission' />
                    </div>

                    <div>
                        <h3 className='font-semibold text-sm p-2 '>Summary</h3>
                        <input className='w-full h-7 border rounded-md border-[#858585] text-[#858585]  px-3' type="text" placeholder='Title of your submission' />
                    </div>

                    <div>
                        <h3 className='font-semibold text-sm  p-2'>Description</h3>
                        <input className='w-full h-36 border rounded-md border-[#858585] text-[#858585]  px-3' type="text" placeholder='Write a long discription of your project. You can describe your idea and approach here. ' />
                    </div>


                </form>
            </div>

        </>

    )
}

export default NewSubmission