import React from 'react';
import { BsCodeSlash } from 'react-icons/bs';

//  component for Project snippet boxes (name & repo[requried], livePage[optional])
// background & name inherited from "name" prop (make sure matches with .png name for template literal)
// button links ineherit from prop.repo & prop.livePage
// if NOT livePage link was provided, button isn't rendered
export default function ProjectSnippet({name, repo, livePage}) {

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
            href={repo}
            target='_blank'
            rel='noreferrer'
          >
            <button type='button' className='flex items-center gap-2'>
              <span>View code</span> <BsCodeSlash value={{ className: '' }} />
            </button>
          </a>
          {
            livePage &&
          <a
            href={livePage}
            target="_blank"
            rel='noreferrer'
          >
            <button type='button'>Live preview</button>
          </a>
          }
        </div>
      </div>
    </div>
  );
}
