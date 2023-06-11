import { all } from "redux-saga/effects";
import { watchFetchPosts } from "./postSaga";

export function* rootSaga() {
  yield all([watchFetchPosts()]);
}
