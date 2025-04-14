import { Schema, model } from "mongoose"

const transactionSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    amount: {
      type: Number,
      required: [true, "Amount is required"],
      min: 0,
    },
    type: {
      type: String,
      required: [true, "Type is required"],
      enum: ["income", "expense"],
    },
  },
  { versionKey: false, timestamps: true }
)

const Transaction = model("transaction", transactionSchema)
export default Transaction
