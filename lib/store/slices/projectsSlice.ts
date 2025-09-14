import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { Project, ProjectsState } from "@/lib/types"

const initialState: ProjectsState = {
  data: [],
  loading: false,
  error: null,
  selectedProject: null,
}

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    fetchProjectsRequest: (state) => {
      state.loading = true
      state.error = null
    },
    fetchProjectsSuccess: (state, action: PayloadAction<Project[]>) => {
      state.loading = false
      state.data = action.payload
      state.error = null
    },
    fetchProjectsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    },
    fetchProjectByIdRequest: (state, action: PayloadAction<number>) => {
      state.loading = true
      state.error = null
    },
    fetchProjectByIdSuccess: (state, action: PayloadAction<Project>) => {
      state.loading = false
      state.selectedProject = action.payload
      state.error = null
    },
    fetchProjectByIdFailure: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    },
    clearProjectsError: (state) => {
      state.error = null
    },
    clearSelectedProject: (state) => {
      state.selectedProject = null
    },
  },
})

export const {
  fetchProjectsRequest,
  fetchProjectsSuccess,
  fetchProjectsFailure,
  fetchProjectByIdRequest,
  fetchProjectByIdSuccess,
  fetchProjectByIdFailure,
  clearProjectsError,
  clearSelectedProject,
} = projectsSlice.actions
