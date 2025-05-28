import { createSlice, isAnyOf } from "@reduxjs/toolkit"
import { loginThunk, registerThunk } from "./operations"

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.token = action.payload.token
        isLoggedIn = true
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        console.log(action.payload)

        state.user = action.payload.user
        state.token = action.payload.token
        state.isLoggedIn = true
      })
      .addMatcher(
        isAnyOf(registerThunk.fulfilled, loginThunk.fulfilled),
        (state, action) => {
          state.isRefreshing = false
          state.isLoading = false
        }
      )
      .addMatcher(
        isAnyOf(registerThunk.rejected, loginThunk.rejected),
        (state, action) => {
          state.isRefreshing = false
          state.isLoading = false
          state.error = action.payload
        }
      )
  },
})

export const authReducer = authSlice.reducer