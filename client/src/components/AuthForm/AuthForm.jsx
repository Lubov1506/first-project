import React from "react"
import FormInput from "../FormInput/FormInput"
import { useForm } from "react-hook-form"
import ButtonTrFn from "../ButtonTrFn/ButtonTrFn"
import { NavLink } from "react-router-dom"

const AuthForm = ({ isLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  console.log(isLogin)
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form
      className='flex flex-col p-4 bg-teal-800 text-teal-50 min-w-[300px] h-fit rounded-2xl'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='flex flex-col gap-2'>
        <h1>{isLogin ? "Login" : "Register"}</h1>
        {!isLogin && <FormInput name='name' isAuth register={register} />}
        <FormInput name='email' isAuth register={register} />
        <FormInput name='password' isAuth register={register} />
        <NavLink
          to={isLogin ? "/register" : "/login"}
          className={"justify-center w-fit px-2"}
        >
          to {isLogin ? "Register" : "Login"}
        </NavLink>
        <ButtonTrFn title={isLogin ? "Login" : "Register"} theme='dark' />
      </div>
    </form>
  )
}

export default AuthForm
