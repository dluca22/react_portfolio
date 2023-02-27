import React from 'react';
import SkillTile from './SkillTile';
import {
  TailwindLogo,
  ReactLogo,
  ReactRouterLogo,
  DjangoLogo,
  DockerLogo,
  GitLogo,
  CssLogo,
  JsLogo,
  PythonLogo,
  LineVector,
} from '../assets/AllLogos';

function Skills() {
  return (
    <div
      name='skills'
      className='w-full flex flex-col items-center '
    >
      <div className='text-[#E0FBFC] leading-10 p-4 md:p-0 md:ml-[-200px]'>
        <h3 className='section-header'>
          Skills
        </h3>

        <p>There are the technologies I have worked with so far</p>
      </div>
      <div className='max-w-[80%] lg:max-w-[65%] h-fit p-2 md:p-0bg-red-400 flex sm:justify-evenly items-center overflow-x-auto  sm:overflow-hidden sm:flex-wrap scrollable'>
        <SkillTile name='javascript' logo={<JsLogo />} />
        <SkillTile name='python' logo={<PythonLogo />} />
        <SkillTile name='django' logo={<DjangoLogo />} />
        <SkillTile name='react' logo={<ReactLogo />} />
        <SkillTile name='react router' logo={<ReactRouterLogo />} />
        <SkillTile name='git' logo={<GitLogo />} />
        <SkillTile name='css' logo={<CssLogo />} />
        <SkillTile name='tailwind' logo={<TailwindLogo />} />
        <SkillTile name='docker' logo={<DockerLogo />} />
      </div>
    </div>
  );
}

export default Skills;
