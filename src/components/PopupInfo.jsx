import React from 'react'

export default function PopupInfo({setDismissed}) {

    function closeModal(){
        console.log("chiuso, evento", event.target)

    }
  return (
    <div id="modal" className='w-full h-screen flex absolute top-0 right-0 justify-center bg-black bg-opacity-10'>
        onClick={event => closeModal()}
        <div className='z-20 w-1/2 max-w-[350px] rounded border-6 border-yellow-700 bg-yellow-300 bg-opacity-80
        text-lg text-orange-600 text-bold ' >
            test
            <button type="button" onClick={() => setDismissed(true)}>chiudi</button>
        </div>
    </div>
  )
}
