import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {

    const [navMenu, setNavMenu] = useState(false);
    const handleClick = () => setNavMenu(!navMenu);

    return (
        <nav className='navbar'>
            <div>logo</div>

            {/* menu full */}
            <ul className='hidden md:flex'>
                <li className='navbar-link'>
                    Home
                </li>
                <li className='navbar-link'>
                    About
                </li>
                <li className='navbar-link'>
                    Skills
                </li>
                <li className='navbar-link'>
                    Work
                </li>
                <li className='navbar-link'>
                    Contact
                </li>
            </ul>

            {/* Hamburger */}
            <button type="button" className='md:hidden z-10' onClick={handleClick}>
                {!navMenu ? <FaBars /> : <FaTimes />}
            </button>

            {/*  mobile menu */}

            <ul className={!navMenu ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#293241] flex flex-col justify-center items-center'}>
                <li className='mobile-menu hover:first-letter:text-red-500'>Home</li>
                <li className='mobile-menu hover:first-letter:text-blue-500'>About</li>
                <li className='mobile-menu hover:first-letter:text-yellow-500'>Skills</li>
                <li className='mobile-menu hover:first-letter:text-violet-500'>Work</li>
                <li className='mobile-menu hover:first-letter:text-emerald-500'>Contact</li>
            </ul>
        </nav>
    );
}

export default Navbar;
