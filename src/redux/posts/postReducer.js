import {
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
} from "./postTypes";

const initialState = {
  data: null,
  error: null,
  loading: false,
};
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return { ...state, loading: true };
    case FETCH_POSTS_SUCCESS:
      return { loading: false, data: action.payload, error: "" };
    case FETCH_POSTS_FAILURE:
      return { loading: false, data: null, error: action.payload };
    default:
      return state;
  }
};
export default postReducer;
