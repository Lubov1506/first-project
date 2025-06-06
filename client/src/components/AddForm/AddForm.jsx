import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import {
  addTransaction,
  editTransaction,
} from "../../redux/transactions/operations"
import { yupResolver } from "@hookform/resolvers/yup"
import { transactionSchema } from "../../helpers/validateSchemas"
import FormInput from "../FormInput/FormInput"
import FormSelectInput from "../FormSelectInput/FormSelectInput"
const AddForm = ({ onClose, editedTransaction, isEdit, id }) => {
  const dispatch = useDispatch()
  const initialState = editedTransaction
    ? {
        name: editedTransaction.name,
        type: editedTransaction.type,
        category: editedTransaction.category,
        amount: editedTransaction.amount,
      }
    : { name: "", type: "", category: "", amount: "" }
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(transactionSchema),
    defaultValues: initialState,
  })

  const onSubmit = (data) => {
    isEdit
      ? dispatch(editTransaction({ id, data }))
          .unwrap()
          .then(() => onClose())
          .catch((err) => console.log(err))
      : dispatch(addTransaction(data))
          .unwrap()
          .then(() => onClose())
          .catch((err) => console.log(err))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
      <div className='flex flex-col gap-3 px-2 py-3'>
        <FormInput name='name' register={register} error={errors.name} />
        <FormSelectInput
          control={control}
          name='type'
          register={register}
          error={errors.type}
        />
        <FormSelectInput
          control={control}
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
