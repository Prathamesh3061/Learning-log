import React from 'react'
import { useRef } from 'react';

const LoginForm = () => {
    const nameRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(`User data: ${nameRef.current.value}, ${passwordRef.current.value}`)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
            Enter Your Name: 
            <input
                type="text"
                ref={nameRef}
            />
        </label>
        <label>
            Enter password:
            <input
                type="password"
                ref={passwordRef}
            />
        </label>
        <button type="submit">Login Now</button>
      </form>
    </div>
  )
}

export default LoginForm
