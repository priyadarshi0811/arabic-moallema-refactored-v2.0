import React from 'react'
import grayBgImg from "@/components/src/img/grayBgImg.png"
import blueBgImg from "@/components/src/img/colorBgImg.png";
import Login from '@/components/user/multiUser/Login'

const login = () => {
  return (
    <div className='' style={{
        backgroundImage: `url(${blueBgImg.src})`,
        backgroundAttachment: "fixed",
        backgroundSize: "100%",
        backgroundPosition: "center top",
        widows: "100vw",
        height: "100vh",
      }}>
        <Login />
        {/* Login */}
      </div>
  )
}

export default login