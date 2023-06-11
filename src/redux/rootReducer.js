import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import colaReucer from "./cola/colaReducer";
import userReducer from "./user/userReducer";
import postReducer from "./posts/postReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  cola: colaReucer,
  iceCream: iceCreamReducer,
  user: userReducer,
  post: postReducer,
});
export default rootReducer;
