import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs'

function StickyLinks() {
  return (
    // TODO remove xxl: define class and style for vertical sliding tiles after completing, remove hidden
    <div className='hidden lg:sticky-left xxl:sticky-top'>
        <ul>
            <li className='vertical-slide lg:horizontal-slide bg-[#0A66C2]'>
                <a href="/" className='flex items-center justify-between w-full text-gray-300 font-bold'>
                    LinkedIn <FaLinkedin size={30} />
                </a>
            </li>
            <li className='xxl:vertical-slide lg:horizontal-slide bg-[#24292F]'>
                <a href="/" className='flex items-center justify-between w-full text-gray-300 font-bold'>
                    Github <FaGithub size={30} />
                </a>
            </li>
            <li className='xxl:vertical-slide lg:horizontal-slide bg-emerald-500'>
                <a href="/" className='flex items-center justify-between w-full text-gray-300 font-bold'>
                    Email <HiOutlineMail size={30} />
                </a>
            </li>
            <li className='xxl:vertical-slide lg:horizontal-slide bg-red-500'>
                <a href="/" className='flex items-center justify-between w-full text-gray-300 font-bold'>
                    Resume <BsFillPersonLinesFill size={30} />
                </a>
            </li>

        </ul>
    </div>
  )
}

export default StickyLinks