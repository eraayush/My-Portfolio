import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { SkillsData, SkillsState } from "@/lib/types"

const initialState: SkillsState = {
  data: null,
  loading: false,
  error: null,
}

export const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    fetchSkillsRequest: (state) => {
      state.loading = true
      state.error = null
    },
    fetchSkillsSuccess: (state, action: PayloadAction<SkillsData>) => {
      state.loading = false
      state.data = action.payload
      state.error = null
    },
    fetchSkillsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    },
    clearSkillsError: (state) => {
      state.error = null
    },
  },
})

export const { fetchSkillsRequest, fetchSkillsSuccess, fetchSkillsFailure, clearSkillsError } = skillsSlice.actions
