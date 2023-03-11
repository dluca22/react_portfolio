import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { ImWarning } from "react-icons/im";

export default function PopupInfo({ setDismissed }) {
  function closeModal(event) {
    if(event.target === event.currentTarget){
        event.currentTarget.classList.add("hidden")
    };
  }
  return (
    <div
      id='modal'
      className='z-20 w-full h-screen flex fixed top-0 left-0 justify-center bg-black bg-opacity-10 cursor-pointer'
      onClick={event => closeModal(event)}
    >
      <div
        className=' w-full mx-3 md:w-1/2 max-w-[350px] max-h-[300px] top-[100px]
        flex flex-col mt-20 items-center justify-center gap-4 p-2 text-sm md:text-base
        rounded border-4 border-yellow-500 bg-yellow-200 bg-opacity-95
         text-colAccent relative overflow-auto scrollable
         shadow-2xl'
      >
        <button
          className='absolute top-2 right-2'
          type='button'
          onClick={() => setDismissed(true)}
        >
          <FaTimes size={25} />
        </button>
        <h2 className='font-bold text-2xl flex gap-3'> <ImWarning/> Attention <ImWarning /></h2>
        <p className='font-semibold underline'>My Portfolio is currently under development</p>
        <p className='font-semibold text-justify'>
          I am actively attending a course and my time and resources are focused on expanding my knowledge
        </p>
      </div>
    </div>
  );
}
