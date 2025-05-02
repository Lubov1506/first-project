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
      <div className='flex flex-col'>
        <FormInput name='name' />
        <FormInput name='type' />
        <FormInput name='category' />
        <FormInput name='amount' />
      </div>

      {errors.exampleRequired && <span>This field is required</span>}

      <input type='submit' />
    </form>
  )
}

export default AddForm
