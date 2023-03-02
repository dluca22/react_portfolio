import React from 'react';
import ProjectSnippet from './ProjectSnippet';

export default function Work() {
  return (
    <div name='work' className='w-full md:h-screen text-[#E0FBFC] '>
      <div className='max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 ml-20'>
          <h3 className='section-header '>Work</h3>
          <p>Check out some of my recent work:</p>
        </div>
        <div className='w-full flex flex-wrap justify-center lg:justify-start'>
          <ProjectSnippet
            name='tenzies'
            repo='https://github.com/dluca22/tenziex'
            livePage='https://dluca22.github.io/tenziex/'
          />
          <ProjectSnippet
          name='quizzical'
          repo="https://github.com/dluca22/simple_quiz_react"
          livePage="https://dluca22.github.io/simple_quiz_react/"
          />
          <ProjectSnippet
          name='react_notes'
          />
          <ProjectSnippet
          name='keymdall'
          repo="https://github.com/dluca22/vaultrepo"
          />
          <ProjectSnippet
          name='PyJob'
          repo="https://github.com/dluca22/PyJob"
          />

        </div>
        {/* <div>
          <div>
            <div>
              <span></span>
              <div>
                <a href="/">
                    <button></button>
                </a>
                <a href="/">
                    <button></button>
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
