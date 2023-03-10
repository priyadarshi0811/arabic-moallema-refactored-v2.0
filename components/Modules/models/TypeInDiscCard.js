import React from 'react'

const TypeInDiscCard = ({title, disc,  initial,
    middle,
    final}) => {
  return (
    <div><div className="m10 bg-white py-5 px-20 rounded-md text-center text-dark-purple h-full">
    <h1 className="text-3xl">{title}</h1>
    <div className="flex flex-row justify-around my-5 bg-dark-purple w-full text-white ">
      <h1 className="text-9xl py-5 px-10">{initial} </h1>
      <h1 className="text-9xl py-5 px-10">{middle} </h1>
      <h1 className="text-9xl py-5 px-10">{final} </h1>
    </div>
    <p className="py-5">
      {disc}
    </p>
  </div></div>
  )
}

export default TypeInDiscCard