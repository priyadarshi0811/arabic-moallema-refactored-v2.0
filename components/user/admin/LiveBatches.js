import MUIMiniCard from '@/components/Layout/card/MUIMiniCard'
import React from 'react'

const LiveClasses = () => {
  return (
    <div><div className="grid grid-cols-3 w-full mx-auto my-10 gap-10">
    <div className="col-span-auto">
      <MUIMiniCard
        title="Chapter 1"
        disc="from Batch 1"
        isBtn="true"
        btnText="open"
        link="/admin/live-batches/live-batch-details"
        // minTitle=""
        // subTitle=""
      />
    </div>
    <div className="col-span-auto">
      <MUIMiniCard
        title="Chapter 2"
        disc="from Batch 2"
        isBtn="true"
        btnText="open"
        link="/admin/live-batches/live-batch-details"
      />
    </div>
    <div className="col-span-auto">
      <MUIMiniCard
        title="Chapter 2"
        disc="from Batch 3"
        isBtn="true"
        btnText="open"
        link="/admin/live-batches/live-batch-details"
      />
    </div>
  </div></div>
  )
}

export default LiveClasses