import React from 'react'

const MarkRemarkSec = () => {
  return (
    <div className='grid grid-cols-2 w-full' >
    <div className="col-span-1 text-center">
        <label >Marks</label>
        <input type="number" className='w-20 ml-10 rounded-md text-2xl' min="0" max="5" />
        <span className='text-2xl'> /5</span>
    </div>
    <div className="col-span-1 text-center w-full">
    <label >Remark</label>
    <input type="text" className='w-98 ml-10 rounded-md text-lg' /> 
    </div>


    </div>
  )
}

export default MarkRemarkSec