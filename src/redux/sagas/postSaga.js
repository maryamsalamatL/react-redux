import { call, put, takeEvery } from "redux-saga/effects";
import { FETCH_POSTS_REQUEST } from "../posts/postTypes";
import axios from "axios";
import { fetchPostSuccess, fetchPostfailuer } from "../posts/postActions";

function* fetchPosts(action) {
  try {
    const apiEndPoint = `https://jsonplaceholder.typicode.com/posts/${action.payload}`;
    const response = yield call(() => axios.get(apiEndPoint));
    yield put(fetchPostSuccess(response.data));
  } catch (error) {
    yield put(fetchPostfailuer(error.message));
  }
}

export function* watchFetchPosts() {
  yield takeEvery(FETCH_POSTS_REQUEST, fetchPosts);
}
