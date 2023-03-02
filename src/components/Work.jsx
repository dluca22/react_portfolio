import React from 'react';
import ProjectSnippet from './ProjectSnippet';

export default function Work() {
  return (
    <div
      name='work'
      className='w-full md:h-screen text-[#E0FBFC] '
    >
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <h3 className='section-header'>
            Work
          </h3>
          <p>Check out some of my recent work:</p>
        </div>

      <ProjectSnippet name="tenzies" />
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
