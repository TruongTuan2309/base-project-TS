import { errorLogin } from '@/store/middlewares/errorLogin'
import rootReducer from '@/store/rootReducer'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(errorLogin)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
