import { createSlice, isAnyOf } from "@reduxjs/toolkit"
import { addTransaction, deleteTransaction, fetchTransactions } from "./operations"

const initialState = {
  transactions: [],
  isLoading: false,
  error: null,
}
const transactionsSlice = createSlice({
  name: "transactions",
  initialState: initialState,
  reducers: {
    setTransactions: (state, action) => {
      state = action.payload
      return state
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.transactions = action.payload
      })
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.transactions.push(action.payload)
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.transactions = state.transactions.filter(
          (item) => item._id !== action.payload
        )
      })
      .addMatcher(
        isAnyOf(fetchTransactions.pending, addTransaction.pending, deleteTransaction.pending),
        (state) => {
          state.error = false
          state.isLoading = true
        }
      )
      .addMatcher(
        isAnyOf(fetchTransactions.rejected, addTransaction.rejected, deleteTransaction.rejected),
        (state) => {
          state.isLoading = false
          state.error = true
        }
      )
      .addMatcher(
        isAnyOf(fetchTransactions.fulfilled, addTransaction.fulfilled, deleteTransaction.fulfilled),
        (state) => {
          state.isLoading = false
          state.error = null
        }
      )
  },
})
export const transactionsReducer = transactionsSlice.reducer
