import React, { useState } from "react"
import { AuthForm } from "../../components"
import { Outlet, useParams } from "react-router-dom"
import { loginThunk, registerThunk } from "../../redux/auth/operations"

const AuthPage = ({ onSubmitThunk }) => {
  const { type } = useParams()
  const defaultValues = { email: '', password: '' };
  const [chosenValues, setChosenValues] = useState(defaultValues);
  return (
    <div className='flex justify-center items-center h-screen w-screen py-10 px-6 bg-teal-50'>
      {type === "register" ? (
        <AuthForm type={type} onSubmitThunk={registerThunk} chosenValues={chosenValues} />
      ) : (
        <AuthForm type={type} onSubmitThunk={loginThunk} chosenValues={chosenValues} />
      )}
    </div>
  )
}

export default AuthPage
