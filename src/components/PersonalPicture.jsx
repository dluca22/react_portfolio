import React from 'react';

export default function PersonalPicture() {
  return (
    <div
      className='min-h-[200px] w-[200px] md:h-[300px]  md:w-[300px] rounded-full border-8 border-colPrimary overflow-clip'
      style={{
        backgroundImage: `url(https://avatars.githubusercontent.com/u/59019840?s=400&u=24f132ea1c80593b3bc92738b3b3e6893718f4df&v=4)`, backgroundSize:"cover", backgroundPosition:"center"
      }}
    />
  );
}
