import {
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
} from "./postTypes";

export const fetchPostRequest = (id) => {
  return {
    type: FETCH_POSTS_REQUEST,
    payload: id,
  };
};
export const fetchPostSuccess = (data) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: data,
  };
};
export const fetchPostfailuer = (error) => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error,
  };
};
