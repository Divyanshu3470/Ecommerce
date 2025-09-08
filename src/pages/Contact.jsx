import React from 'react'
import { icons } from '../assets/assets.js'

function Contact() {
  return (
    <div className="flex justify-center">
      <div className="mt-2">
        <hr className='border border-gray w-[85vw]'/>
      <div className="flex justify-center items-center gap-2 mt-8">
        <h1 className='text-3xl font-semibold'>CONTACT US</h1>
        <hr className='border-2 border-black w-12'/>
      </div>
      <div className="h-[550px] mt-8 flex justify-center">
        <div className="w-[50vw]  h-[550px] flex justify-center items-center">
          <div className="overflow-hidden">
            <img src={icons.contact_img} alt="" />
          </div>
          <div className="flex justify-center items-center">
            <div className="flex flex-col gap-5 ml-10">
              <h1 className='font-semibold text-[23px]'>Our Store</h1>
              <div className="">
                <p className='text-gray-400 font-medium text-[18px]'>IT Park</p>
                <p className='text-gray-400 font-medium text-[18px]'>Dehradun</p>
              </div>
              <div className="">
                <p className='text-gray-400 font-medium text-[18px]'>+91 7983599067</p>
                <p className='text-gray-400 font-medium text-[18px]'>divyanshunegi1435@gmail.com</p>
              </div>
              <h1 className='font-semibold text-[23px]'>Careers at Codeware</h1>
              <p className='text-gray-400 font-medium text-[18px]'>Learn here Earn Anywhere</p>
              <div className="border w-[155px] h-[60px] border-black flex justify-center items-center">
                <p className='text-[18px] font-medium'>Explore Jobs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Contact