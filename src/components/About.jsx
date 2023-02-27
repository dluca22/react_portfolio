import React from 'react';

function About() {
  return (
    <div name='about' className='w-full py-20 text-[#E0FBFC]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1300px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <h3 className='section-header'>About</h3>
          </div>
          <div> </div>
        </div>

        <div className='resume-container'>
          <div className='resume-row'>
            <h5 className='resume-row-title'>Education</h5>
            <div className='resume-row-description'>
              <p>
                I have I <strong>degree in Languages and Business</strong>, I am
                fluent in <u>English</u> and also have a knowledge of{' '}
                <u>Spanish</u> and <u>German</u>.
              </p>
            </div>
          </div>
          <div className='resume-row'>
            <h5 className='resume-row-title'>Courses</h5>
            <div className='resume-row-description'>
              <p>
                I embarked on my journey to learn web development by taking
                multiple courses and bootcamps. Among them, the most noteworthy
                ones were CS50 and CS50w from Harvard University.
              </p>
              <p>
                Through these programs, I gained expertise in both front-end and
                back-end development, as well as a strong understanding of{' '}
                <em>security measures</em> and how to{' '}
                <em>create responsive user experiences</em>.
              </p>
            </div>
          </div>
          <div className='resume-row'>
            <h5 className='resume-row-title'>Soft-skills</h5>
            <div className='resume-row-description'>
              <p>
                With many years of experience in the restaurant industry, I have
                attained a senior-level position due to my exceptional
                reliability and unwavering focus in the workplace. Throughout my
                professional journey, I have cultivated valuable skills that
                have proven to be instrumental in achieving successful outcomes,
                including:
              </p>
              <ul className='list-disc list-inside indent-4 text-sm'>
                <li>
                  Strong ability to work effectively as part of a teamto
                  accomplish common goals.
                </li>
                <li>
                  Enduring in high-pressure environments and maintaining a
                  level-headed approach to effectively manage the demands of the
                  job.
                </li>
                <li>Excellent communication skills.</li>
                <li>
                  Being a highly dependable resource and asset and meeting
                  expectations consistently.
                </li>
                <li>Keen organizational abilities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
