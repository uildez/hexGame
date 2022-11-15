import React from 'react'

export const Sidebar = () => {
  return (
    <div className='flex flex-col items-center w-[300px] h-full overflow-y-auto bg-slate-900 shadow-2xl px-4 py-8'> 
      <div className='grid grid-cols-3 w-full justify-center items-center bg-slate-600 rounded-md'>
        <p className='text-center text-slate-100 text-sm py-2'>Guessed color</p>
        <p className='text-center text-slate-100 text-sm py-2 bg-slate-500 rounded-md'>Corrent color</p>
        <p className='text-center text-slate-100 text-sm py-2'>Score</p>
      </div>
    </div>
  )
}
