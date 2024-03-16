import React from 'react'

function Background() {
  return (
    <>
    <div className='h-full w-full fixed z-[2]'>
    <div className='w-full font-semibold absolute flex justify-center text-lg text-zinc-600 top-[5%] '>Documents.</div>
       <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[12rem] font-semibold text-zinc-700 leading-none tracking-tighter '>Docs.</h1>
    </div>
    </>
  )
}

export default Background