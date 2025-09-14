import { call, put, takeEvery } from "redux-saga/effects"
import { fetchExperienceData } from "@/lib/api"
import { fetchExperienceRequest, fetchExperienceSuccess, fetchExperienceFailure } from "../slices/experienceSlice"
import type { Experience } from "@/lib/types"

function* fetchExperienceSaga() {
  try {
    const data: Experience[] = yield call(fetchExperienceData)
    yield put(fetchExperienceSuccess(data))
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Failed to fetch experience data"
    yield put(fetchExperienceFailure(errorMessage))
  }
}

export function* experienceSaga() {
  yield takeEvery(fetchExperienceRequest.type, fetchExperienceSaga)
}
