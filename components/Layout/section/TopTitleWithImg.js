import React from 'react'
import logo from "@/components/src/img/AMLogo.png"

const TopTitleWithImg = () => {
  return (
    <div className='pt-10 pb-5'>
        <img
          className="mx-auto  w-1/6 p-10"
          src={logo.src}
          alt="Workflow"
        />
        <h2 className=" text-center text-2xl font-extrabold text-gray-800">
            <p className='text-5xl text-green-500' >السلام عليكم </p>
          {/* {typeAdmin && <p>Manage Batches Of Your Organization</p>}
          {typeInstructor && <p>Manage Your Batches</p>}
          {typeStudent && <p>You are enrolled in following batches</p>} */}
        </h2>
      </div>
  )
}

export default TopTitleWithImg