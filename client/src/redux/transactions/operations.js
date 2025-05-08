import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const instance = axios.create({
  baseURL: "http://localhost:3000/api/",
})
export const fetchTransactions = createAsyncThunk(
  "transactions/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await instance.get("transactions")
      return response.data.transactions.data
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)
export const addTransaction = createAsyncThunk(
  "transactions/addTransaction",
  async (data, thunkAPI) => {
    try {
      const response = await instance.post("transactions", data)
      console.log(response)

      return response.data.transaction
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)
