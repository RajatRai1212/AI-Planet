import React, { useState } from 'react'


import Navbar from '../Components/Navbar'

const NewSubmission = () => {

    const [details, setDetails] = useState({
        title: '',
        summary: '',
        description: '',
        cover: '',
        hackathon_name: '',
        start_date: '',
        end_date: '',
        github: '',
        other_links: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDetails({
            ...details,
            [name]:value,
        });
    };

    function form_submit(event){
        event.preventDefault()
        console.log(details)
    }
    return (
        <>
            <Navbar />
            <div className='bg-[#f8f9fd] w-full h-full flex justify-center '>
                <form onSubmit={form_submit} className=' w-[918px] flex flex-col gap-6 p-10 px-24  bg-white '>
                    <h1 className='font-bold text-xl'>New Hackathon Submission</h1>
                    <div>
                        <label for="title" className='font-semibold text-sm p-2 '> Title</label>
                        <input onChange={handleInputChange}  required id="title" name='title' className='w-full py-1 border rounded-md border-[#858585] text-[#858585]  px-3' type="text" placeholder='Title of your submission' />
                    </div>

                    <div>
                        <label for="Summary" className='font-semibold text-sm p-2 '>Summary</label>
                        <input onChange={handleInputChange}  required id="Summary" name='summary' className='w-full py-1 border rounded-md border-[#858585] text-[#858585]  px-3' type="text" placeholder='A short summary of your submission (this will be visible with your submission)' />
                    </div>

                    <div>
                        <label for="description" className='font-semibold text-sm  p-2'>Description</label>
                        <textarea  onChange={handleInputChange} id="description" name='description' className='w-full border rounded-md border-[#858585] text-[#858585]  px-3' cols="30" rows="6" placeholder='Write a long discription of your project. You can describe your idea and approach here.'></textarea>
                    </div>
                    <div className='flex flex-col gap-1 w-full'>
                        <label for="cover image" className='font-semibold text-sm p-2 '>Cover Image</label>
                        <p className='text-[#858585]'>Minimum resolution 360 X 360px</p>
                        <div style={{ backgroundSize: '40px' }} className='border-2 border-dashed p-10 rounded-lg justify-center relative bg-no-repeat bg-center bg-[url("https://static.thenounproject.com/png/187803-200.png")]'>
                            <input onChange={handleInputChange}  required className='w-[100%] h-[100%] opacity-0' type="file" id="cover" name="cover" accept="image/png, image/jpeg" ></input>
                            {/* <div className='absolute  top-1/2 left-1/2'> <BiImageAdd/> </div> */}

                        </div>
                    </div>
                    <div>
                        <label for='hackathon name' className='font-semibold text-sm p-2 '>Hackathon Name</label>
                        <input onChange={handleInputChange}  name='hackathon_name' required id='hackathon name' className='w-full py-1 border rounded-md border-[#858585] text-[#858585]  px-3' type="text" placeholder='Title of your submission' />
                    </div>
                    {/* date div */}
                    <div className='flex items-center  gap-3  justify-between  '>

                        <div className='flex flex-col w-full'>
                            <label for='start date' className='font-semibold text-sm p-2 '>Hackathon Start Date</label>
                            <input onChange={handleInputChange}  required name='start_date' id='start date' className=' py-1 border rounded-md border-[#858585] text-[#858585]  px-3' type="date" />

                        </div>
                        <div className='flex flex-col w-full'>
                            <label for='end date' className='font-semibold text-sm p-2 '>Hackathon End Date</label>
                            <input onChange={handleInputChange} required name='end_date' id='end date' className=' py-1 border rounded-md border-[#858585] text-[#858585]  px-3' type="date" />
                        </div>

                    </div>
                    <div>
                        <label for='github' className='font-semibold text-sm p-2 '>GitHub Repository</label>
                        <input onChange={handleInputChange} required name='github' id='github' className='w-full py-1 border rounded-md border-[#858585] text-[#858585]  px-3' type="text" placeholder="Enter you submission's public GitHub repository link" />
                    </div>
                    <div>
                        <label for='other links' className='font-semibold text-sm p-2 '>Other Links</label>
                        <input onChange={handleInputChange}  required name='other_links' id='other links' className='w-full py-1 border rounded-md border-[#858585] text-[#858585]  px-3' type="text" placeholder='You can upload a video demo or URL of your demo app here.' />
                    </div>
                    <hr />
                    <input type='submit' value={'Upload Submission'} className='bg-[#44924C] p-2 rounded-md w-1/4 text-white '></input >

                </form>
            </div>

        </>

    )
}

export default NewSubmission