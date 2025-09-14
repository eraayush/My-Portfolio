import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { Experience, ExperienceState } from "@/lib/types"

const initialState: ExperienceState = {
  data: [],
  loading: false,
  error: null,
}

export const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    fetchExperienceRequest: (state) => {
      state.loading = true
      state.error = null
    },
    fetchExperienceSuccess: (state, action: PayloadAction<Experience[]>) => {
      state.loading = false
      state.data = action.payload
      state.error = null
    },
    fetchExperienceFailure: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    },
    clearExperienceError: (state) => {
      state.error = null
    },
  },
})

export const { fetchExperienceRequest, fetchExperienceSuccess, fetchExperienceFailure, clearExperienceError } =
  experienceSlice.actions
