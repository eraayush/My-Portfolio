import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import { personalSlice } from "./slices/personalSlice"
import { skillsSlice } from "./slices/skillsSlice"
import { projectsSlice } from "./slices/projectsSlice"
import { experienceSlice } from "./slices/experienceSlice"
import rootSaga from "./sagas/rootSaga"

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    personal: personalSlice.reducer,
    skills: skillsSlice.reducer,
    projects: projectsSlice.reducer,
    experience: experienceSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }).concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
