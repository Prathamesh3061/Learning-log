import React, { useState } from 'react'

const StudentInfo = () => {
    const stateOptions = [
        "Maharashtra",
        "Karnataka",
        "Tamil Nadu",
        "Delhi",
        "Uttar Pradesh",
        "Gujarat"  
    ]
    const [student, setStudent] = useState({
        firstName:"",
        lastName:"",
        email:"",
        gender:"",
        state:""
    });

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setStudent((prev) => ({
           ...prev,
           [name]: value
        }))
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("submitted student data: ", student);
        alert("Form submitted! Check console for data");
    };
  return (
    <div>
    <h2>Student Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
            <label>
                First Name:
                <input
                    type="text"
                    name="firstName"
                    value={student.firstName}
                    onChange={handleChange}
                    placeholder="Enter first Name"
                    required
                />
            </label>
        </div>
        <div>
            <label>
                Last Name:
                <input
                    type="text"
                    name="lastName"
                    value={student.lastName}
                    onChange={handleChange}
                    placeholder="Enter last Name"
                    required
                />
            </label>
        </div>

        <div>
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={student.email}
                    onChange={handleChange}
                    placeholder="Enter Email"
                    required
                />
            </label>
        </div>

        <div>
            <label>
                Gender:
            </label>
                <label>
                     <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={handleChange}
                    checked={student.gender === "male"}
                    />
                    Male
                </label>
                 <label>
                     <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={handleChange}
                    checked={student.gender === "female"}
                    />
                    female
                </label>
                 <label>
                     <input
                    type="radio"
                    name="gender"
                    value="other"
                    onChange={handleChange}
                    checked={student.gender === "other"}
                    />
                    other
                </label>    
        </div>

        <div>
            <label>State:</label>
            <select
                name="state"
                value={student.state}
                onChange={handleChange}
                required
            >
                <option value="">
                    Select State
                </option>
                {stateOptions.map((stateName) =>(
                    <option key={stateName} value={stateName}>
                        {stateName}
                    </option>
                ))}
            </select>
        </div>
        <button type="submit">Register Student</button>

      </form>
    </div>
  )
}

export default StudentInfo
