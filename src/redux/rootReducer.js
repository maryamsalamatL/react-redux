import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import colaReucer from "./cola/colaReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  cola: colaReucer,
  iceCream: iceCreamReducer,
  user: userReducer,
});
export default rootReducer;
