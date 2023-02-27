import MUIMiniCard from '@/components/Layout/card/MUIMiniCard'
import React from 'react'

const CardList = ({user, link, minTitle, disc}) => {
  return (
    <div><div className="grid grid-cols-3 w-full mx-auto my-10 gap-10">
    <div className="col-span-auto">
   
      <MUIMiniCard
        minTitle={minTitle}
        title={user + "1"}
        disc={disc}
        isBtn="true"
        btnText="open"
        link={link}
        // minTitle=""
        // subTitle=""
      />   
            
    </div>
    <div className="col-span-auto">
      <MUIMiniCard
      minTitle={minTitle}
        title={user + "2"}
        disc={disc}
        isBtn="true"
        btnText="open"
        link={link}
        
      />              
    </div>
    <div className="col-span-auto">
      <MUIMiniCard 
      minTitle={minTitle}
        title={user + "3"}
        disc={disc}
        isBtn="true"
        btnText="open"
        link={link}
        
      />              
    </div>
    
  </div></div>
  )
}

export default CardList