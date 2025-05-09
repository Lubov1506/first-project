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

      return response.data.transaction
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)
export const deleteTransaction = createAsyncThunk(
  "transactions/deleteTransaction",
  async (id, thunkAPI) => {
    try {
      const response = await instance.delete(`transactions/${id}`)      
      return response.data.removedTransaction._id
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)
export const editTransaction = createAsyncThunk(
  "transactions/editTransaction",
  async ({ id, data }, thunkAPI) => {
    
    try {
      const response = await instance.put(`transactions/${id}`, data)
      
      return response.data.updatedTransaction
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)