import { useForm } from "react-hook-form"
import FormInput from "../FormInput/FormInput"

const AddForm = ({onClose}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) =>{ console.log(data)
    onClose()
  }
  console.log(watch("example"))
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col gap-2 px-2 py-3'>
        <FormInput name='name' />
        <FormInput name='type' />
        <FormInput name='category' />
        <FormInput name='amount' />
      </div>

      {errors.exampleRequired && <span>This field is required</span>}

      <button type='submit' className="text-teal-100 bg-teal-800 py-2 w-full text-center hover:text-teal-50 hover:bg-teal-600 transition-colors duration-200 rounded-sm">Send</button>
    </form>
  )
}

export default AddForm
