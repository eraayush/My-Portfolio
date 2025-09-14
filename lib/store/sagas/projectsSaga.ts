import { call, put, takeEvery } from "redux-saga/effects"
import type { PayloadAction } from "@reduxjs/toolkit"
import { fetchProjectsData, fetchProjectById } from "@/lib/api"
import {
  fetchProjectsRequest,
  fetchProjectsSuccess,
  fetchProjectsFailure,
  fetchProjectByIdRequest,
  fetchProjectByIdSuccess,
  fetchProjectByIdFailure,
} from "../slices/projectsSlice"
import type { Project } from "@/lib/types"

function* fetchProjectsSaga() {
  try {
    const data: Project[] = yield call(fetchProjectsData)
    yield put(fetchProjectsSuccess(data))
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Failed to fetch projects data"
    yield put(fetchProjectsFailure(errorMessage))
  }
}

function* fetchProjectByIdSaga(action: PayloadAction<number>) {
  try {
    const data: Project = yield call(fetchProjectById, action.payload)
    yield put(fetchProjectByIdSuccess(data))
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Failed to fetch project data"
    yield put(fetchProjectByIdFailure(errorMessage))
  }
}

export function* projectsSaga() {
  yield takeEvery(fetchProjectsRequest.type, fetchProjectsSaga)
  yield takeEvery(fetchProjectByIdRequest.type, fetchProjectByIdSaga)
}
