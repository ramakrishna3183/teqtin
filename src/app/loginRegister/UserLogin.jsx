
"use client"

import React, { useState } from 'react'
import { loginAction } from '@/app/serverActions/loginAction';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const UserLogin = () => {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter()

    const loginHandler = async (e) => {
        e.preventDefault()

        const loginDetails = {email, password}
        console.log(loginDetails)

        try {
            const response = await loginAction(loginDetails)
            if(response.success) {
                router.push("/dashboard")
            }else {
                setError(response.message || "Login failed")

            }
        } catch (error) {
            setError(error.message) 
            
        }

    }

  return (
    <div className="formContainer">
        <h1>Login Form</h1>
        <form onSubmit={loginHandler} className="formSection">
            {error && <p style={{color:'red'}}>{error}</p>}
                <h3>Email</h3>
                <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                <h3>Password</h3>       
                <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                <br/> <br/>
                <button type="submit">Login</button>
            </form>
            <Link href='/register'>
            If not registered? Register here
            </Link>
    </div>
  )
}

export default UserLogin