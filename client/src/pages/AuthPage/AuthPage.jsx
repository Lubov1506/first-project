import React from "react"
import { AuthForm } from "../../components"
import { Outlet } from "react-router-dom"

const AuthPage = ({ isLogin }) => {
  return (
    <div className='flex justify-center items-center h-screen w-screen py-10 px-6 bg-teal-50'>
      <AuthForm isLogin={isLogin} />
    </div>
  )
}

export default AuthPage
