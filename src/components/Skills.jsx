import React from 'react'
import SkillTile from './SkillTile'
import { TailwindLogo, ReactLogo, ReactRouterLogo, DjangoLogo, DockerLogo, GitLogo, CssLogo, JsLogo, PythonLogo, LineVector } from '../assets/AllLogos'


function Skills() {
    return (
        <div name="skills">

            <div className='w-full h-screen flex justify-center items-center flex-wrap'>
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