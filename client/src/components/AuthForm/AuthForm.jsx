import React, { useEffect } from "react"
import FormInput from "../FormInput/FormInput"
import { useForm } from "react-hook-form"
import ButtonTrFn from "../ButtonTrFn/ButtonTrFn"
import { NavLink } from "react-router-dom"
import { useDispatch } from "react-redux"

const AuthForm = ({ type, onSubmitThunk, chosenValues }) => {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const initialValues =
    type === "login"
      ? { email: "", password: "" }
      : { name: "", email: "", password: "" }
  useEffect(() => {
    reset(chosenValues)
  }, [chosenValues, reset])
  const onSubmit = (values) => {
    console.log(values)
    dispatch(onSubmitThunk({ ...values }))
    values = { chosenValues }
  }
  return (
    <form
      className='flex flex-col p-4 bg-teal-800 text-teal-50 min-w-[300px] h-fit rounded-2xl'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='flex flex-col gap-2'>
        <h1>{type === "login" ? "Login" : "Register"}</h1>
        {type === "register" && (
          <FormInput name='name' isAuth register={register} />
        )}
        <FormInput name='email' isAuth register={register} />
        <FormInput name='password' isAuth register={register} />
        <NavLink
          to={type === "login" ? "/auth/register" : "/auth/login"}
          className={"justify-center w-fit px-2"}
        >
          to {type === "login" ? "Register" : "Login"}
        </NavLink>
        <ButtonTrFn
          title={type === "login" ? "Login" : "Register"}
          theme='dark'
        />
      </div>
    </form>
  )
}

export default AuthForm
