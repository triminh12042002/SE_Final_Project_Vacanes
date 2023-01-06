import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../features/auth/authSlice'
import accommodationReducer from '../features/accommodations/accommodationsSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    accommodation: accommodationReducer,
  },
})
