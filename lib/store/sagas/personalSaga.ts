import { call, put, takeEvery } from "redux-saga/effects"
import { fetchPersonalData } from "@/lib/api"
import { fetchPersonalRequest, fetchPersonalSuccess, fetchPersonalFailure } from "../slices/personalSlice"
import type { PersonalData } from "@/lib/types"

function* fetchPersonalSaga() {
  try {
    const data: PersonalData = yield call(fetchPersonalData)
    yield put(fetchPersonalSuccess(data))
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Failed to fetch personal data"
    yield put(fetchPersonalFailure(errorMessage))
  }
}

export function* personalSaga() {
  yield takeEvery(fetchPersonalRequest.type, fetchPersonalSaga)
}
