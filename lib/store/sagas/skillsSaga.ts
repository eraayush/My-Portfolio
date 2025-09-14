import { call, put, takeEvery } from "redux-saga/effects"
import { fetchSkillsData } from "@/lib/api"
import { fetchSkillsRequest, fetchSkillsSuccess, fetchSkillsFailure } from "../slices/skillsSlice"
import type { SkillsData } from "@/lib/types"

function* fetchSkillsSaga() {
  try {
    const data: SkillsData = yield call(fetchSkillsData)
    yield put(fetchSkillsSuccess(data))
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Failed to fetch skills data"
    yield put(fetchSkillsFailure(errorMessage))
  }
}

export function* skillsSaga() {
  yield takeEvery(fetchSkillsRequest.type, fetchSkillsSaga)
}
