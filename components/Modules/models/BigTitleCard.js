import React from 'react'
import logo from "@/components/src/img/AMLogo.png";
import PlayCard from "@/components/Layout/card/PlayCard";
import AudioBtn from "@/components/Layout/elements/AudioBtn";

const BigTitleCard = ({
  
    disc,
    title,
    
  }) => {
  return (
    <div><div className="col-span-1 p-5  w-full h-full bg-dark-purple rounded-sm text-center text-white">
    <h1 className="p-5 w-full " style={{ fontSize: "16rem" }}>
    {title}
    </h1> <p>{disc}</p>
    
    <AudioBtn url="https://www.arabicreadingcourse.com/audio/isolated-letters/alif.mp3" />
  </div></div>
  )
}

export default BigTitleCard