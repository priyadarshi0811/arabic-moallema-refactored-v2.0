import React from 'react'
import styles from "./LoginForm.module.css";


const Login = () => {
  return (
    <div>
         {/* <form className={styles.form} onSubmit={submitHandler}> */}
         <div className={styles.form}>
      <div className={`${styles.control}`}>    
        <label htmlFor="title">Email Id</label>
        <input type="text" id="email"  />
        {/* {!formEmailValid && ( */}
          <p style={{ color: "orangered", fontSize: "14px" }}>
            Please Enter Correct Email
          </p>
        {/* )} */}
      </div>
      <div className={`${styles.control}`}>    
        <label htmlFor="address">Password</label>
        <input type="password" id="password"  /> 
        {/* {passwordError}
        {!passwordError && serverError && ( */}
          <p className=" text-red-500 mt-2">Invalid email or password</p>
        {/* )} */}
      </div>
      <div className={styles.actions}>
        <button>Login</button>
      </div>
      </div>
    {/* </form> */}
    </div>
  )
}

export default Login