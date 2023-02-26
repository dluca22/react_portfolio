import React from 'react'
import SkillTile from './SkillTile'
import { TailwindLogo, ReactLogo, ReactRouterLogo, DjangoLogo, DockerLogo, GitLogo, CssLogo, JsLogo, PythonLogo, LineVector } from '../assets/AllLogos'


function Skills() {
    return (
            <div name="skills" className='w-full h-screen flex flex-col items-center justify-center'>
            <div className='text-[#E0FBFC] leading-10'>
                <h3 className='text-4xl font-bold inline border-b-4 border-[#EE6C4D]'>
                Skills</h3>

                <p>There are the skills I have worked with so far</p>
            </div>
            <div className='max-w-[80%] lg:max-w-[65%] h-full flex justify-center items-center flex-wrap'>
                <SkillTile name="javascript" logo={<JsLogo/>} />
                <SkillTile name="python" logo={<PythonLogo/>} />
                <SkillTile name="django" logo={<DjangoLogo/>} />
                <SkillTile name="react" logo={<ReactLogo/>} />
                <SkillTile name="react router" logo={<ReactRouterLogo/>} />
                <SkillTile name="git" logo={<GitLogo/>} />
                <SkillTile name="css" logo={<CssLogo/>} />
                <SkillTile name="tailwind" logo={<TailwindLogo/>} />
                <SkillTile name="docker" logo={<DockerLogo/>} />
            </div>
        </div>
    )
}

export default Skills