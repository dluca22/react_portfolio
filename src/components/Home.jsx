import React, { useEffect, useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import PopupInfo from './PopupInfo';
import PersonalPicture from './PersonalPicture';

function Home() {

  const [dismissed, setDismissed] = useState(localStorage.getItem("popup_dismissed") ? JSON.parse(localStorage.getItem("popup_dismissed")) : false)

  useEffect(() => {
    localStorage.setItem("popup_dismissed", JSON.stringify(dismissed))

  }, [dismissed])


  // name="home" is for react smoothscroll
  return (
    //  TODO fix border and shadow
    //  border-b-8 border-colPrimary shadow-xl shadow-colPrimary
    <div name='home' className='bg-colBasic w-full h-screen md:border-b-8 pt-[80px] md:border-colSecondary md:shadow-[0_5px_60px_30px_#98c1d94b]
     justify-center relative flex flex-col items-center md:flex-row-reverse'>
      <div className='min-h-[80px]'>
        {/* empty space for navbar */}
      </div>

        <PersonalPicture />
    {!dismissed && <PopupInfo setDismissed={setDismissed}/>}

      {/* container */}
      {/* ci può anche stare un breakpoint xs in cui fa in full e la foto viene spostata sopra */}
      <div className=' w-full sm:w-2/3 lg:w-1/2  px-10 md:px-8 flex flex-col justify-end pb-10  h-full '>
        <h1 className='text-4xl font-bold tracking-wide text-colPrimary '>
          {' '}
          Luca De Angelis
        </h1>
        <h2 className='text-xl font-semibold text-textCol'>
          • Junior web developer •
        </h2>
        <p className='text-textCol text-sm'>
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
            className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-colAccent hover:border-colAccent duration-300'
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
