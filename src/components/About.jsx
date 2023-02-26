import React from 'react';

function About() {
  return (
    <div name='about' className='w-full h-screen text-[#E0FBFC]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#EE6C4D]'>
              About
            </p>
          </div>
          <div> </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold '>
            <p>Hi im the text for the about page </p>
          </div>
          <div>
            <p>this is the second column a longer text like Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur ducimus harum eum veritatis cupiditate atque eos consequatur officiis unde quia eligendi laboriosam, saepe animi quod dolore natus, sed, illum repellat.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
