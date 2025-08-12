import React from 'react'
import DBConnection from './utils/config/db'
import { redirect } from 'next/navigation'
import { auth } from './auth'
import Navbar from './navbar/navabr';




const HomePage  = async() => {

  const session = await auth()

    await DBConnection()

  if (!session) {
    redirect('/login')
  }

  // Redirect to dashboard if authenticated
  redirect('/dashboard')
}
export default HomePage
