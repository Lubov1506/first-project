import { createSlice, isAnyOf } from "@reduxjs/toolkit"
import { fetchTransactions } from "./operations"

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
      .addMatcher(isAnyOf(fetchTransactions.pending), (state) => {
        state.error = false
        state.isLoading = true
      })
      .addMatcher(isAnyOf(fetchTransactions.rejected), (state) => {
        state.isLoading = false
        state.error = true
      })
      .addMatcher(isAnyOf(fetchTransactions.fulfilled), (state) => {
        state.isLoading = false
        state.error = null
      })
  },
})
export const transactionsReducer = transactionsSlice.reducer
