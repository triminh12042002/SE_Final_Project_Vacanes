import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../features/auth/authSlice'
import accommodationReducer from '../features/accommodations/accommodationSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    accommodation: accommodationReducer,
  },
})
