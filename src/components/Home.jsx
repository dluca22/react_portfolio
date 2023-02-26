import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

function Home() {
  // name="home" is for react smoothscroll
  return (
    <div name='home' className='bg-[#293241] w-full h-screen'>
      {/* container */}
      {/* ci può anche stare un breakpoint xs in cui fa in full e la foto viene spostata sopra */}
      <div className='max-w-[60%] lg:max-w-[40%] ml-20 px-8 flex flex-col justify-center h-full'>
        <h1 className='text-4xl font-bold tracking-wide text-[#98C1D9] '>
          {' '}
          Luca De Angelis
        </h1>
        <h2 className='text-xl font-semibold text-[#E0FBFC]'>
          • Junior web developer •
        </h2>
        <p className='text-[#E0FBFC] text-sm'>
          I'm Luca a self-taught frontend developer with a passion for creating
          intuitive and engaging user experiences. I have experience with Python
          and Django for the back-end and vanilla Js or React for the front-end.
          I have worked on a variety of projects that showcase my
          problem-solving skills and eye for design. I am constantly learning
          and exploring new technologies to enhance my abilities as a developer.
          I'm excited about being a developer that a team can rely on and
          collaborate with to create amazing products and enhance user
          experience.
        </p>

        <div>
          <button
            type='button'
            className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#EE6C4D] hover:border-[#EE6C4D] duration-300'
          >
            View Work
            <span className='duration-300 group-hover:rotate-90'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;