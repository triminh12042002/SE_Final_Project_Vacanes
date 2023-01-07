import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import accommodationService from './accommodationService'

const initialState = {
  accommodations: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new accommodation
export const createAccommodation = createAsyncThunk(
  'accommodations/create',
  async (accommodationData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await accommodationService.createAccommodation(accommodationData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get user accommodations
export const getAccommodations = createAsyncThunk(
  'accommodations/getAll',
  async (_, thunkAPI) => {
    try {
      // const token = thunkAPI.getState().auth.user.token
      const token = '123'
      return await accommodationService.getAccommodations(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Delete user accommodation
export const deleteAccommodation = createAsyncThunk(
  'accommodations/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await accommodationService.deleteAccommodation(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const accommodationSlice = createSlice({
  name: 'accommodation',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createAccommodation.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createAccommodation.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.accommodations.push(action.payload)
      })
      .addCase(createAccommodation.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getAccommodations.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAccommodations.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.accommodations = action.payload
      })
      .addCase(getAccommodations.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteAccommodation.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteAccommodation.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.accommodations = state.accommodations.filter(
          (accommodation) => accommodation._id !== action.payload.id
        )
      })
      .addCase(deleteAccommodation.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = accommodationSlice.actions
export default accommodationSlice.reducer