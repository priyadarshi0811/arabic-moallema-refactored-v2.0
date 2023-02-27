import React from 'react'
import BatchDetailsMin from '@/components/Modules/batches/BatchDetaisMin'
import UserList from '@/components/Modules/batches/UserList'
import CardLayout from '@/components/Layout/card/CardLayout'

const LiveBatchDetails = () => {
  return (
    <div>
        <div className="grid grid-cols-2 gap-10">
            <div className="col-span-1">
                <BatchDetailsMin />
            </div>
            <div className="col-span-1">
                <UserList/>
            </div>
        </div>

        <div className="my-10">
        <CardLayout title="Class 1" path="/" description="https://meet.google.com//class1/" svg="" btn="Join Class" onClick={""} />
        </div>
        
    </div>
  )
}

export default LiveBatchDetails