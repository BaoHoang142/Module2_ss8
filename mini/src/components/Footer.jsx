import React from 'react'
import "./Footer.scss"
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
export default function Footer() {
  return (
    <>
        <div id='footer'>
            <div id='main'>
                <div className='mt-5'>
                    <p className='text-xl'><strong>Somethings</strong></p>
                    <p className='opacity-40'>Home</p>
                    <p className='opacity-40'>Home</p>
                    <p className='opacity-40'>Home</p>
                    <p className='opacity-40'>Home</p>
                </div>
                <div className='mt-5'>
                    <p className='text-xl'><strong>Somethings</strong></p>
                    <p className='opacity-40'>Home</p>
                    <p className='opacity-40'>Home</p>
                    <p className='opacity-40'>Home</p>
                    <p className='opacity-40'>Home</p>
                </div>
                <div className='mt-5'>
                    <p className='text-xl'><strong>Somethings</strong></p>
                    <p className='opacity-40'>Home</p>
                    <p className='opacity-40'>Home</p>
                    <p className='opacity-40'>Home</p>
                    <p className='opacity-40'>Home</p>
                </div>
                <div className='mt-5'> 
                    <p className='text-xl'><strong>Somethings</strong></p>
                    <p>Send your feedback to us!</p> <br />
                    <div className='flex gap-2'>
                        <input type="text" placeholder='  Your feedback...' className=' h-9 text-gray-900 border-solid border-2 border-dark-500 rounded-md' /> 
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send</button>
                    </div>
                </div>
            </div>
            <hr className='mt-5'/>
            <div id='bot'>
                <p>© 2021 Company, Inc. All rights reserved.</p>
                <div id='icon'>
                    <BsTwitter className='text-2xl cursor-pointer'></BsTwitter>
                    <BsFacebook className='text-2xl cursor-pointer' ></BsFacebook>
                    <BsInstagram className='text-2xl cursor-pointer'></BsInstagram>
                </div>
            </div>
        </div>



    </>
  )
}
