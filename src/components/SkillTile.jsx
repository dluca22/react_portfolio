import React from 'react';
import { LineVector } from '../assets/AllLogos';

function SkillTile(props) {
  return (
    <div className='skill-tile '>
      <div className='scale-75 min-h-[157px] flex justify-center items-center'>{props.logo}</div>
        <div className='w-2/3 overflow-clip bottom-0'>
          <LineVector />
        </div>
        <span className='mt-1 capitalize'>{props.name}</span>
    </div>
  );
}
export default SkillTile;
