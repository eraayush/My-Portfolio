import { all, fork } from "redux-saga/effects"
import { personalSaga } from "./personalSaga"
import { skillsSaga } from "./skillsSaga"
import { projectsSaga } from "./projectsSaga"
import { experienceSaga } from "./experienceSaga"

export default function* rootSaga() {
  yield all([fork(personalSaga), fork(skillsSaga), fork(projectsSaga), fork(experienceSaga)])
}
