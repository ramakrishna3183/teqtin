
'use client'

import Link from 'next/link';
import React, { useState } from 'react';

const registerForm = () => {
    const[username, setUsername] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    
    
    const registerHandler = async (e) => {
        e.preventDefault()

        const userRegisterDetails = {username, email,password}
        console.log(userRegisterDetails)

        try {
            const response = await registerAction(userRegisterDetails);
            if(response.sucess) {
              alert("Registration success");  
            }
        } catch (error) {
            console.log(error)
            
        }
     }


    return (
        <div className = "formContainer">
            <h1>Registration Form</h1>
            <form onSubmit={registerHandler} className="formSection">
                <h3>Username</h3>
                <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} />
                <h3>Email</h3>
                <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                <h3>Password</h3>       
                <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                <br/> <br/>
                <button type="submit">Register</button>
            </form>

            <Link href='/login'>
                    Already Registered? Login
            </Link>

        </div>
    )
}

export default registerForm;