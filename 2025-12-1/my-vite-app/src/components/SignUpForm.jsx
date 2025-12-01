import React, { useState } from 'react'

const SignUpForm = () => {

    const [formData, setFormData] = useState({
        userName:"",
        email:"",
        password:""
    });

    const handleChange = (e)=>{
        const{name , value} = e.target;
        setFormData((prev)=>({
            ...prev,
            [name]:value
        }));
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("user data: ",formData);
    };
  return (
    <div>
      <form onSubmit={handleSubmit} >
        <label>
        Enter Your name :
          <input
            type="text"
            name="userName"
            placeholder="UserName"
            value={formData.userName}
            onChange={handleChange}
          />
        </label>

        <br/>
        <br/>
        <input
            type="email"
            name="email"
            placeholder='Enter your email'
            value={formData.email}
            onChange={handleChange}
        />
        <br/><br/>
        <input
            type="password"
            name="password"
            placeholder='enter your password'
            value={formData.password}
            onChange={handleChange}
        />
        <br/><br/>
        <button  type="submit">Signup</button>
      </form>
    </div>
  )
}

export default SignUpForm
