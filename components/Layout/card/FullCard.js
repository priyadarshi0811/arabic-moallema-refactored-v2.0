import React from 'react'

const FullCard = ({title, title2, disc, btn, comp}) => {
  return (
    <div >
        <div className="m10 bg-white p-5 rounded-md text-center text-dark-purple h-full">
            <h1 className='text-9xl pt-5'>{title}</h1>
            <h1 className='text-3xl'>{title2}</h1>
            <p className='py-5'>{disc}</p>
            {comp}
            {btn}
        </div>
    </div>
  )
}

export default FullCard