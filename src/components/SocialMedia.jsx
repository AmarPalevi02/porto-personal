import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const SocialMedia = () => {
    return (
        <div className='flex gap-3 text-gray-400 mt-8 pb-3'>
            <div className="w-8 h-8 flex justify-center items-center relative hover:bg-gray-300 rounded-full hover:transition-all duration-75">
                <a
                    href="https://github.com/amarNrddn"
                    target='_blank'
                >
                    <FaGithub className='text-2xl font-bold hover:text-primary hover:transition-all duration-75' />
                </a>
            </div>
            <div className="w-8 h-8 flex justify-center items-center relative hover:bg-gray-300 rounded-full hover:transition-all duration-75">
                <a href="https://www.linkedin.com/in/amarnrddn" target='_blank'>
                    <FaLinkedin className='text-2xl font-bold hover:text-primary hover:transition-all duration-75' />
                </a>
            </div>
            <div className="w-8 h-8 flex justify-center items-center relative hover:bg-gray-300 rounded-full hover:transition-all duration-75">
                <a href="https://www.instagram.com/amarrnrdn/" target="_blank" >
                    <FaInstagramSquare className='text-2xl font-bold hover:text-primary hover:transition-all duration-75' />
                </a>
            </div>
        </div>
    )
}

export default SocialMedia