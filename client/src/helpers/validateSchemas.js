import * as yup from "yup"
export const transactionSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    amount: yup
      .number()
      .typeError("Amount must be a number")
      .min(0, "Amount must be at least 0")
      .required("Amount is required"),
    category: yup
      .string()
      .oneOf(
        ["food", "entertainment", "transport", "health", "house", "animals", "other"],
        "Invalid category"
      )
      .required("Category is required"),
    type: yup
      .string()
      .oneOf(["income", "expense"], "Invalid type")
      .required("Type is required"),
  })