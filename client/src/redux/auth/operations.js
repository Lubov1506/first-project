import { userApi } from "../../helpers/api"
import {createAsyncThunk} from '@reduxjs/toolkit'

const setAuthHeader = (token) => {
  userApi.defaults.headers.common.Authorization = `Bearer ${token}`
}

const clearAuthHeader = () => {
  userApi.defaults.headers.common.Authorization = ""
}

export const registerThunk = createAsyncThunk('auth/register', async(credentials, thunkAPI)=>{
    try{
        const {data} = await userApi.post('/users/register', credentials) 
        setAuthHeader(data.token)
        return data
    }catch(error){
        return thunkAPI.rejectWithValue(error.message)
    }
})
 