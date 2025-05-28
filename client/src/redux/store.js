import { configureStore } from "@reduxjs/toolkit"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"
import { transactionsReducer } from "./transactions/slice"
import storage from "redux-persist/lib/storage"
import { authReducer } from "./auth/slice"

const persistUser = {
  key: "auth",
  version: 1,
  storage,
  // whitelist: ["token"],
}
export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    auth: persistReducer(persistUser, authReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: import.meta.env.MODE !== "production",
})

export const persistor = persistStore(store)
