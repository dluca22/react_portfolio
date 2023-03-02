import React from 'react';
import { BsCodeSlash } from 'react-icons/bs';

export default function ProjectSnippet({name}) {

  return (
    <div
      className='project-snippet group'
      style={{ backgroundImage: `url(/src/assets/pictures/${name}.png)` }}
    >
      <div className='z-10 hidden h-full group-hover:flex flex-col bg-[#8d402d] bg-opacity-90 justify-around items-center'>
        <h3 className='text-2xl text-white capitalize font-bold underline'>
          {name}
        </h3>
        <div className='flex gap-5'>
          <a
            href='https://github.com/dluca22/tenziex'
            target='_blank'
            rel='noreferrer'
          >
            <button type='button' className='flex items-center gap-2'>
              <span>View code</span> <BsCodeSlash value={{ className: '' }} />
            </button>
          </a>
          <a
            href='https://dluca22.github.io/tenziex/'
            target='_blank'
            rel='noreferrer'
          >
            <button type='button'>Live preview</button>
          </a>
        </div>
      </div>
    </div>
  );
}
