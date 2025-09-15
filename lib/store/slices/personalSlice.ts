import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { PersonalData, PersonalState } from "@/lib/types"

const initialState: PersonalState = {
  data: null,
  loading: true,
  error: null,
}

export const personalSlice = createSlice({
  name: "personal",
  initialState,
  reducers: {
    fetchPersonalRequest: (state) => {
      state.loading = true
      state.error = null
    },
    fetchPersonalSuccess: (state, action: PayloadAction<PersonalData>) => {
      state.loading = false
      state.data = action.payload
      state.error = null
    },
    fetchPersonalFailure: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    },
    clearPersonalError: (state) => {
      state.error = null
    },
  },
})

export const { fetchPersonalRequest, fetchPersonalSuccess, fetchPersonalFailure, clearPersonalError } =
  personalSlice.actions
