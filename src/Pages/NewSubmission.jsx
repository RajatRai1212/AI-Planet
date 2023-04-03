import React from 'react'

import { BiImageAdd } from 'react-icons/bi'

const NewSubmission = () => {
    return (
        <>

            <div className='bg-[#f8f9fd] w-full h-full flex justify-center '>
                <form className=' w-[918px] flex flex-col gap-6 p-10 px-24  bg-white '>
                    <h1 className='font-bold text-xl'>New Hackathon Submission</h1>
                    <div>
                        <label className='font-semibold text-sm p-2 '> Title</label>
                        <input className='w-full py-1 border rounded-md border-[#858585] text-[#858585]  px-3' type="text" placeholder='Title of your submission' />
                    </div>

                    <div>
                        <label className='font-semibold text-sm p-2 '>Summary</label>
                        <input className='w-full py-1 border rounded-md border-[#858585] text-[#858585]  px-3' type="text" placeholder='Title of your submission' />
                    </div>

                    <div>
                        <label className='font-semibold text-sm  p-2'>Description</label>
                        <textarea className='w-full border rounded-md border-[#858585] text-[#858585]  px-3' name="" id="" cols="30" rows="6">Write a long discription of your project. You can describe your idea and approach here.</textarea>
                    </div>
                    <div className='flex flex-col gap-1 w-full'>
                        <label className='font-semibold text-sm p-2 '>Cover Image</label>
                        <p className='text-[#858585]'>Minimum resolution 360 X 360px</p>
                        <div className='border-2 border-dashed p-10 rounded-lg justify-center '>
                            
                        <input className='w-[100%] h-[100%] opacity-0' type="file" id="cover" name="cover" accept="image/png, image/jpeg" ></input>
                        

                        </div>
                    </div>
                    <div>
                        <label className='font-semibold text-sm p-2 '>Hackathon Name</label>
                        <input className='w-full py-1 border rounded-md border-[#858585] text-[#858585]  px-3' type="text" placeholder='Title of your submission' />
                    </div>
                    {/* date div */}
                    <div className='flex items-center  gap-3  justify-between  '>

                        <div className='flex flex-col w-full'>
                            <label className='font-semibold text-sm p-2 '>Hackathon Start Date</label>
                            <input className=' py-1 border rounded-md border-[#858585] text-[#858585]  px-3' type="date" />

                        </div>
                        <div className='flex flex-col w-full'>
                            <label className='font-semibold text-sm p-2 '>Hackathon End Date</label>
                            <input className=' py-1 border rounded-md border-[#858585] text-[#858585]  px-3' type="date" />
                        </div>

                    </div>
                    <div>
                        <label className='font-semibold text-sm p-2 '>GitHub Repository</label>
                        <input className='w-full py-1 border rounded-md border-[#858585] text-[#858585]  px-3' type="text" placeholder="Enter you submission's public GitHub repository link" />
                    </div>
                    <div>
                        <label className='font-semibold text-sm p-2 '>Other Links</label>
                        <input className='w-full py-1 border rounded-md border-[#858585] text-[#858585]  px-3' type="text" placeholder='You can upload a video demo or URL of your demo app here.' />
                    </div>
                    <hr />
                    <button className='bg-[#44924C] p-2 rounded-md w-1/4 text-white '>Upload Submission</button>

                </form>
            </div>

        </>

    )
}

export default NewSubmission