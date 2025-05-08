import { useForm } from "react-hook-form"
import FormInput from "../FormInput/FormInput"
import { useDispatch } from "react-redux"
import { addTransaction } from "../../redux/transactions/operations"
import { yupResolver } from "@hookform/resolvers/yup"
import { transactionSchema } from "../../helpers/validateSchemas"
const AddForm = ({ onClose }) => {
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(transactionSchema) })

  const onSubmit = (data) => {
    console.log(data)
    dispatch(addTransaction(data))
      .unwrap()
      .then(() => onClose())
      .catch((err) => console.log(err))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
      <div className='flex flex-col gap-2 px-2 py-3'>
        <FormInput name='name' register={register} error={errors.name} />
        <FormInput name='type' register={register} error={errors.type} />
        <FormInput
          name='category'
          register={register}
          error={errors.category}
        />
        <FormInput name='amount' register={register} error={errors.amount} />
      </div>

      <button
        type='submit'
        className='text-teal-100 bg-teal-800 py-2 w-full text-center hover:text-teal-50 hover:bg-teal-600 transition-colors duration-200 rounded-sm'
      >
        Send
      </button>
    </form>
  )
}

export default AddForm
